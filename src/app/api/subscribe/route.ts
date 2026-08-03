import { randomUUID } from "node:crypto"
import {
  BlobPreconditionFailedError,
  BlobRequestAbortedError,
  BlobServiceNotAvailable,
  BlobServiceRateLimited,
  BlobStoreSuspendedError,
  put,
} from "@vercel/blob"
import { NextResponse } from "next/server"
import { z } from "zod"
import { pilotFormSchema } from "@/lib/schemas"

export const runtime = "nodejs"

const MAX_BODY_BYTES = 16 * 1024
const requestSchema = pilotFormSchema.extend({
  submissionId: z.uuid().optional(),
})

function storageErrorResponse(error: unknown) {
  if (error instanceof BlobServiceRateLimited) {
    const retryAfter = Math.max(1, error.retryAfter)
    return NextResponse.json(
      { ok: false, error: "Serviço temporariamente indisponível" },
      { status: 429, headers: { "Retry-After": String(retryAfter) } },
    )
  }

  if (
    error instanceof BlobRequestAbortedError ||
    error instanceof BlobServiceNotAvailable ||
    error instanceof BlobStoreSuspendedError
  ) {
    return NextResponse.json(
      { ok: false, error: "Serviço temporariamente indisponível" },
      { status: 503 },
    )
  }

  console.error("[lead] storage error", error instanceof Error ? error.name : "UnknownError")
  return NextResponse.json({ ok: false, error: "Erro interno" }, { status: 500 })
}

function hasInvalidOrigin(req: Request) {
  const origin = req.headers.get("origin")
  if (!origin) return false

  try {
    return new URL(origin).origin !== new URL(req.url).origin
  } catch {
    return true
  }
}

export async function POST(req: Request) {
  if (hasInvalidOrigin(req)) {
    return NextResponse.json({ ok: false, error: "Origem inválida" }, { status: 403 })
  }

  const contentLengthHeader = req.headers.get("content-length")
  const contentLength = contentLengthHeader ? Number(contentLengthHeader) : 0
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, error: "Payload muito grande" }, { status: 413 })
  }

  let body: unknown
  try {
    const rawBody = await req.text()
    if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
      return NextResponse.json({ ok: false, error: "Payload muito grande" }, { status: 413 })
    }
    body = JSON.parse(rawBody)
  } catch {
    return NextResponse.json({ ok: false, error: "Payload inválido" }, { status: 400 })
  }

  const parsed = requestSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: z.flattenError(parsed.error).fieldErrors },
      { status: 400 },
    )
  }

  const headerSubmissionId = req.headers.get("idempotency-key")?.trim()
  if (headerSubmissionId && !z.uuid().safeParse(headerSubmissionId).success) {
    return NextResponse.json({ ok: false, error: "Payload inválido" }, { status: 400 })
  }

  const { submissionId: bodySubmissionId, website, ...formData } = parsed.data
  if (website) {
    return NextResponse.json({ ok: true })
  }

  const submissionId = headerSubmissionId ?? bodySubmissionId ?? randomUUID()
  const submittedAt = new Date().toISOString()
  const lead = {
    submissionId,
    ...formData,
    consentAt: submittedAt,
    submittedAt,
    source: "landing-page",
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error("[lead] storage configuration missing")
    return NextResponse.json(
      { ok: false, error: "Serviço temporariamente indisponível" },
      { status: 503 },
    )
  }

  try {
    await put(`leads/${submissionId}.json`, JSON.stringify(lead, null, 2), {
      access: "private",
      addRandomSuffix: false,
      allowOverwrite: false,
      contentType: "application/json",
    })
  } catch (error) {
    // The deterministic pathname makes a retry of the same submission a no-op.
    if (error instanceof BlobPreconditionFailedError) {
      return NextResponse.json({ ok: true })
    }

    return storageErrorResponse(error)
  }

  return NextResponse.json({ ok: true })
}

import { randomUUID } from "node:crypto"
import { NextResponse } from "next/server"
import { z } from "zod"
import { pilotFormSchema } from "@/lib/schemas"

export const runtime = "nodejs"

// TODO: file-based storage for MVP. `/tmp` is ephemeral on Vercel, so this
// is not durable persistence — swap for Vercel KV / a database before launch.
const DATA_DIR = "/tmp/webingressos-leads"

async function ensureDir() {
  const { mkdir, access } = await import("fs/promises")
  try {
    await access(DATA_DIR)
  } catch {
    await mkdir(DATA_DIR, { recursive: true })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsed = pilotFormSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, errors: z.flattenError(parsed.error).fieldErrors },
        { status: 400 },
      )
    }

    const submissionId = randomUUID()
    const lead = {
      submissionId,
      ...parsed.data,
      // Keep the LGPD consent on the record instead of discarding it.
      consentAt: new Date().toISOString(),
      submittedAt: new Date().toISOString(),
      source: "landing-page",
    }

    // Log only a non-sensitive identifier — the lead itself carries PII
    // (name, e-mail, phone) and must not end up in server logs.
    console.info("[lead] received", submissionId)

    await ensureDir()
    const { writeFile } = await import("fs/promises")
    const filename = `${DATA_DIR}/${submissionId}.json`
    await writeFile(filename, JSON.stringify(lead, null, 2), { flag: "wx" })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Lead submission error:", err)
    return NextResponse.json({ ok: false, error: "Erro interno" }, { status: 500 })
  }
}

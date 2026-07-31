import { NextResponse } from "next/server"
import { z } from "zod"
import { pilotFormSchema } from "@/lib/schemas"

export const runtime = "nodejs"

// TODO: file-based storage for MVP. `/tmp` is ephemeral on Vercel, so the
// console line below is currently the only durable trace of a lead.
// Swap for Vercel KV / a database before launch.
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

    const lead = {
      ...parsed.data,
      // Keep the LGPD consent on the record instead of discarding it.
      consentAt: new Date().toISOString(),
      submittedAt: new Date().toISOString(),
      source: "landing-page",
    }

    console.info("[lead]", JSON.stringify(lead))

    await ensureDir()
    const { appendFile } = await import("fs/promises")
    const filename = `${DATA_DIR}/${Date.now()}-${lead.email.replace(/[^a-z0-9]/gi, "_")}.json`
    await appendFile(filename, JSON.stringify(lead, null, 2))

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Lead submission error:", err)
    return NextResponse.json({ ok: false, error: "Erro interno" }, { status: 500 })
  }
}

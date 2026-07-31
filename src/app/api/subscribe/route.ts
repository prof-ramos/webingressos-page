import { NextResponse } from "next/server"
import { pilotFormSchema } from "@/lib/schemas"

// ponytail: file-based storage for MVP; swap for Vercel KV / DB when leads grow
const DATA_DIR = "/tmp/webingressos-leads"

async function ensureDir() {
  const { mkdir, access } = await import("fs/promises")
  try { await access(DATA_DIR) } catch { await mkdir(DATA_DIR, { recursive: true }) }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const parsed = pilotFormSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json({ ok: false, errors: parsed.error.flatten().fieldErrors }, { status: 400 })
    }

    const { acceptsTerms, ...data } = parsed.data
    void acceptsTerms // already validated by Zod
    const lead = {
      ...data,
      submittedAt: new Date().toISOString(),
      source: "landing-page",
    }

    await ensureDir()
    const { appendFile } = await import("fs/promises")
    const filename = `${DATA_DIR}/${Date.now()}-${data.email.replace(/[^a-z0-9]/gi, "_")}.json`
    await appendFile(filename, JSON.stringify(lead, null, 2))

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Lead submission error:", err)
    return NextResponse.json({ ok: false, error: "Erro interno" }, { status: 500 })
  }
}

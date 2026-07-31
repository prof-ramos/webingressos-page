import { leadSchema } from "@/lib/lead-schema"

export const runtime = "nodejs"

const MAX_BODY_BYTES = 20_000
const WEBHOOK_TIMEOUT_MS = 8_000

function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin")
  if (!origin) return true

  const forwardedHost = request.headers.get("x-forwarded-host")
  const host = (forwardedHost ?? request.headers.get("host") ?? "").split(",")[0]?.trim()
  if (!host) return false

  try {
    return new URL(origin).host === host
  } catch {
    return false
  }
}

function resolveWebhookUrl(value: string | undefined) {
  if (!value) return null

  try {
    const url = new URL(value)
    const isLocalDevelopment =
      process.env.NODE_ENV !== "production" &&
      (url.hostname === "localhost" || url.hostname === "127.0.0.1")

    if (url.protocol !== "https:" && !isLocalDevelopment) return null
    return url
  } catch {
    return null
  }
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return Response.json({ error: "Origem da requisição não autorizada." }, { status: 403 })
  }

  const contentType = request.headers.get("content-type") ?? ""
  if (!contentType.includes("application/json")) {
    return Response.json({ error: "Formato de requisição inválido." }, { status: 415 })
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0)
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return Response.json({ error: "A requisição excede o limite permitido." }, { status: 413 })
  }

  let rawBody: string
  try {
    rawBody = await request.text()
  } catch {
    return Response.json({ error: "Não foi possível ler os dados enviados." }, { status: 400 })
  }

  if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
    return Response.json({ error: "A requisição excede o limite permitido." }, { status: 413 })
  }

  let body: unknown
  try {
    body = JSON.parse(rawBody)
  } catch {
    return Response.json(
      { error: "Não foi possível interpretar os dados enviados." },
      { status: 400 },
    )
  }

  const parsed = leadSchema.safeParse(body)
  if (!parsed.success) {
    return Response.json(
      {
        error: "Revise os campos obrigatórios e tente novamente.",
        fields: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    )
  }

  const data = parsed.data

  // Resposta neutra para não oferecer feedback útil a robôs.
  if ((data.website?.trim().length ?? 0) > 0) {
    return Response.json({ ok: true }, { status: 201 })
  }

  const submittedAt = new Date().toISOString()
  const lead = {
    submissionId: data.submissionId,
    name: data.name,
    email: data.email,
    whatsapp: data.whatsapp,
    organization: data.organization,
    university: data.university ?? "",
    city: data.city,
    eventType: data.eventType,
    eventDate: data.eventDate ?? "",
    expectedAudience: data.expectedAudience,
    currentPlatform: data.currentPlatform ?? "",
    mainChallenge: data.mainChallenge,
    consent: {
      granted: data.consent,
      recordedAt: submittedAt,
    },
    metadata: {
      source: "webingressos-landing-page",
      submittedAt,
    },
  }

  const webhookUrl = resolveWebhookUrl(process.env.LEADS_WEBHOOK_URL)
  if (!webhookUrl) {
    if (process.env.NODE_ENV === "production") {
      console.error("[lead:webhook] configuração ausente ou inválida")
      return Response.json(
        { error: "O formulário está temporariamente indisponível." },
        { status: 503, headers: { "Retry-After": "300" } },
      )
    }

    console.info("[lead:development] candidatura validada", {
      submissionId: lead.submissionId,
      submittedAt,
    })

    return Response.json({ ok: true }, { status: 201 })
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "Idempotency-Key": lead.submissionId,
    "User-Agent": "WebIngressos-Landing/1.0",
    "X-Webhook-Source": "webingressos-landing-page",
  }

  const bearerToken = process.env.LEADS_WEBHOOK_BEARER_TOKEN
  if (bearerToken) headers.Authorization = `Bearer ${bearerToken}`

  try {
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(lead),
      cache: "no-store",
      signal: AbortSignal.timeout(WEBHOOK_TIMEOUT_MS),
    })

    if (!webhookResponse.ok) {
      console.error("[lead:webhook] resposta inválida", {
        status: webhookResponse.status,
        submissionId: lead.submissionId,
      })
      return Response.json(
        { error: "Não foi possível registrar a candidatura agora." },
        { status: 502 },
      )
    }
  } catch (error) {
    console.error("[lead:webhook] falha de entrega", {
      error: error instanceof Error ? error.name : "unknown",
      submissionId: lead.submissionId,
    })
    return Response.json(
      { error: "Não foi possível registrar a candidatura agora." },
      { status: 502 },
    )
  }

  return Response.json({ ok: true }, { status: 201 })
}

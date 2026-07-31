"use client"

import type { FormEvent } from "react"
import { useRef, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowRight, LoaderCircle, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { audienceRanges, eventTypes } from "@/lib/lead-options"
import { cn } from "@/lib/utils"

const selectClassName =
  "flex h-11 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm outline-none transition focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/25 disabled:cursor-not-allowed disabled:opacity-50"

export function PilotForm() {
  const router = useRouter()
  const submissionId = useRef<string | null>(null)
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle")
  const [message, setMessage] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("submitting")
    setMessage("")

    const form = event.currentTarget
    const formData = new FormData(form)
    const value = (name: string) => String(formData.get(name) ?? "")

    submissionId.current ??= crypto.randomUUID()

    const payload = {
      submissionId: submissionId.current,
      name: value("name"),
      email: value("email"),
      whatsapp: value("whatsapp"),
      organization: value("organization"),
      university: value("university"),
      city: value("city"),
      eventType: value("eventType"),
      eventDate: value("eventDate"),
      expectedAudience: value("expectedAudience"),
      currentPlatform: value("currentPlatform"),
      mainChallenge: value("mainChallenge"),
      consent: formData.get("consent") === "on",
      website: value("website"),
    }

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as { error?: string } | null
        throw new Error(body?.error ?? "Não foi possível enviar sua candidatura.")
      }

      router.push("/obrigado")
    } catch (error) {
      setStatus("error")
      setMessage(error instanceof Error ? error.message : "Ocorreu um erro inesperado.")
    }
  }

  return (
    <section id="candidatura" className="section-space scroll-mt-24 bg-background">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Candidatura
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
            Leve seu próximo evento para o programa piloto.
          </h2>
          <p className="mt-5 text-pretty text-lg leading-8 text-muted-foreground">
            Preencha os dados principais. A seleção considera aderência ao escopo, data,
            complexidade operacional e disponibilidade para colaborar com a validação.
          </p>

          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-border bg-muted/50 p-4">
            <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
            <p className="text-sm leading-6 text-muted-foreground">
              Os dados serão usados para analisar a candidatura e entrar em contato sobre o piloto.
              Não envie senhas, documentos ou dados sensíveis.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="relative rounded-3xl border border-border bg-card p-5 shadow-[0_30px_80px_-45px_rgba(15,23,42,0.45)] sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="name">Seu nome *</Label>
              <Input id="name" name="name" autoComplete="name" required maxLength={120} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsapp">WhatsApp *</Label>
              <Input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="(61) 99999-9999"
                required
                maxLength={30}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="organization">Organização *</Label>
              <Input
                id="organization"
                name="organization"
                placeholder="Atlética, república, CA ou produtora"
                required
                maxLength={160}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="university">Universidade</Label>
              <Input id="university" name="university" maxLength={160} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">Cidade *</Label>
              <Input id="city" name="city" autoComplete="address-level2" required maxLength={120} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="eventType">Tipo de evento *</Label>
              <select
                id="eventType"
                name="eventType"
                className={selectClassName}
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Selecione
                </option>
                {eventTypes.map((eventType) => (
                  <option key={eventType} value={eventType}>
                    {eventType}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="eventDate">Data estimada</Label>
              <Input id="eventDate" name="eventDate" type="date" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="expectedAudience">Público esperado *</Label>
              <select
                id="expectedAudience"
                name="expectedAudience"
                className={selectClassName}
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Selecione
                </option>
                {audienceRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="currentPlatform">Plataforma usada atualmente</Label>
              <Input
                id="currentPlatform"
                name="currentPlatform"
                placeholder="Ex.: planilhas, plataforma de ingressos ou operação própria"
                maxLength={120}
              />
            </div>

            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="mainChallenge">Qual é a principal dificuldade hoje? *</Label>
              <Textarea
                id="mainChallenge"
                name="mainChallenge"
                placeholder="Conte como vocês controlam vendas, promoters, entrada e fechamento financeiro."
                required
                minLength={10}
                maxLength={2000}
              />
            </div>
          </div>

          <div
            className="absolute -left-[10000px] top-auto size-px overflow-hidden"
            aria-hidden="true"
          >
            <Label htmlFor="website">Website</Label>
            <Input id="website" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <label className="mt-6 flex cursor-pointer items-start gap-3 text-sm leading-6 text-muted-foreground">
            <input
              type="checkbox"
              name="consent"
              required
              className="mt-1 size-4 rounded border-input accent-primary"
            />
            <span>
              Autorizo o uso dos dados para análise da candidatura e contato sobre o programa
              piloto, conforme a{" "}
              <Link
                href="/privacidade"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Política de Privacidade
              </Link>
              .
            </span>
          </label>

          <div
            className={cn(
              "mt-5 rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive",
              status !== "error" && "hidden",
            )}
            role="alert"
            aria-live="polite"
          >
            {message}
          </div>

          <Button
            type="submit"
            size="lg"
            className="mt-7 w-full"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? (
              <>
                <LoaderCircle className="animate-spin" aria-hidden="true" />
                Enviando candidatura
              </>
            ) : (
              <>
                Quero participar do piloto
                <ArrowRight aria-hidden="true" />
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  )
}

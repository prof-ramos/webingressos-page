"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm, type FieldErrors } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight, Loader2 } from "lucide-react"
import { toast } from "sonner"

import { pilotFormSchema, type PilotFormData } from "@/lib/schemas"
import {
  ATTENDANCE_RANGES,
  ATTENDANCE_RANGE_LABELS,
  ORGANIZATION_TYPES,
  ORGANIZATION_TYPE_LABELS,
  UFS,
  UF_LABELS,
  toOptions,
} from "@/lib/form-options"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

/**
 * base-nova controls are sized for dense dashboards (h-8). Marketing forms need
 * h-12, and SelectTrigger must be overridden with the same `data-[size=...]`
 * prefix it ships with — tailwind-merge won't dedupe `h-12` against
 * `data-[size=default]:h-8`.
 */
const fieldClass =
  "h-12 w-full rounded-lg border-input bg-control px-4 text-[15px] text-foreground placeholder:text-muted-foreground focus-visible:border-accent focus-visible:ring-accent/20 aria-invalid:border-destructive dark:bg-control dark:aria-invalid:border-destructive"

const selectTriggerClass =
  "w-full justify-between rounded-lg border-input bg-control px-4 text-[15px] text-foreground data-[size=default]:h-12 data-placeholder:text-muted-foreground focus-visible:border-accent focus-visible:ring-accent/20 aria-invalid:border-destructive dark:bg-control dark:hover:bg-control dark:aria-invalid:border-destructive"

const labelClass = "text-[13px] font-semibold text-foreground"

const ORGANIZATION_TYPE_OPTIONS = toOptions(ORGANIZATION_TYPES, ORGANIZATION_TYPE_LABELS)
const ATTENDANCE_OPTIONS = toOptions(ATTENDANCE_RANGES, ATTENDANCE_RANGE_LABELS)
const UF_OPTIONS = toOptions(UFS, UF_LABELS)

export function PilotForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitError, setSubmitError] = React.useState<string | null>(null)
  const submissionRef = React.useRef<{ id: string; data: string } | null>(null)

  const form = useForm<PilotFormData>({
    resolver: zodResolver(pilotFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      organizationType: undefined,
      organizationName: "",
      expectedAttendance: undefined,
      cityState: undefined,
      acceptsTerms: false,
      website: "",
    },
  })

  async function onSubmit(data: PilotFormData) {
    setIsSubmitting(true)
    setSubmitError(null)
    const serializedData = JSON.stringify(data)
    const submissionId =
      submissionRef.current?.data === serializedData
        ? submissionRef.current.id
        : crypto.randomUUID()
    submissionRef.current = { id: submissionId, data: serializedData }
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Idempotency-Key": submissionId },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const result = await res.json().catch(() => null)
        throw new Error(result?.error ?? "Erro ao enviar candidatura")
      }

      form.reset()
      submissionRef.current = null
      router.push("/obrigado")
    } catch {
      setSubmitError("Não foi possível enviar agora. Tente novamente em alguns minutos.")
      toast.error("Erro ao enviar candidatura", {
        description: "Tente novamente em alguns minutos ou entre em contato diretamente.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  function onInvalid(errors: FieldErrors<PilotFormData>) {
    const firstError = Object.keys(errors)[0] as keyof PilotFormData | undefined
    if (firstError) {
      window.requestAnimationFrame(() => form.setFocus(firstError))
    }
  }

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    void form.handleSubmit(onSubmit, onInvalid)(event)
  }

  return (
    <div className="rounded-panel border border-primary/55 bg-surface p-6 sm:p-8 lg:p-10">
      <p className="text-xs font-bold tracking-[0.16em] text-accent uppercase">Candidatura</p>
      <h2 className="mt-3 font-display text-3xl tracking-tight text-foreground uppercase sm:text-4xl">
        Candidatar seu evento ao piloto
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
        Conte um pouco sobre a sua operação. A candidatura não garante vaga; retornamos em até 48
        horas úteis para conversar sobre data, público e formato.
      </p>

      {/* Polite status for the submitting state only. The error is announced
          once by the role="alert" banner below — keeping it here too would
          double-announce it to screen readers. */}
      <p id="pilot-form-status" className="sr-only" aria-live="polite">
        {isSubmitting ? "Enviando candidatura…" : ""}
      </p>
      {submitError ? (
        <div
          role="alert"
          className="mt-5 rounded-lg border border-destructive bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive"
        >
          {submitError}
        </div>
      ) : null}

      <Form {...form}>
        <form
          onSubmit={handleFormSubmit}
          aria-describedby="pilot-form-status"
          className="mt-7 space-y-5"
          noValidate
        >
          <fieldset>
            <legend className="sr-only">Dados de contato</legend>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Nome do responsável</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Seu nome completo…"
                        autoComplete="name"
                        className={fieldClass}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>WhatsApp</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        inputMode="tel"
                        placeholder="(61) 99999-9999…"
                        autoComplete="tel"
                        maxLength={20}
                        className={fieldClass}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>E-mail</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="seu@email.com…"
                        autoComplete="email"
                        className={fieldClass}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-destructive" />
                  </FormItem>
                )}
              />
            </div>
          </fieldset>

          <fieldset>
            <legend className="sr-only">Dados do evento</legend>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <FormField
                control={form.control}
                name="organizationType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Tipo de evento</FormLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger className={selectTriggerClass}>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {ORGANIZATION_TYPE_OPTIONS.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-destructive" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="expectedAttendance"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Estimativa de público</FormLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger className={selectTriggerClass}>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {ATTENDANCE_OPTIONS.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-destructive" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cityState"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClass}>Estado (UF)</FormLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger className={selectTriggerClass}>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {UF_OPTIONS.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.value} — {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-destructive" />
                  </FormItem>
                )}
              />
            </div>
          </fieldset>

          <FormField
            control={form.control}
            name="organizationName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClass}>Nome da organização ou do evento</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ex.: Atlética do Cerrado, Festa Junina da República…"
                    autoComplete="organization"
                    className={fieldClass}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-destructive" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="acceptsTerms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start gap-3 space-y-0 pt-1">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="mt-0.5 size-5 rounded-md bg-control aria-invalid:border-destructive dark:bg-control dark:aria-invalid:border-destructive"
                  />
                </FormControl>
                <div className="space-y-1">
                  <FormLabel className="text-[13px] leading-relaxed font-normal text-muted-foreground">
                    Autorizo o uso dos meus dados para contato e envio de informações sobre o
                    Programa Piloto da WebIngressos, conforme a{" "}
                    <Link
                      href="/privacidade"
                      className="font-semibold text-accent underline underline-offset-2"
                    >
                      Política de Privacidade
                    </Link>
                    .
                  </FormLabel>
                  <FormMessage className="text-destructive" />
                </div>
              </FormItem>
            )}
          />

          <input
            tabIndex={-1}
            aria-hidden="true"
            autoComplete="off"
            className="sr-only"
            {...form.register("website")}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            className="inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-lg bg-primary px-6 text-base font-bold text-primary-foreground transition-[background-color,box-shadow] hover:bg-brand-400 hover:shadow-cta focus-visible:outline-none disabled:pointer-events-none disabled:opacity-60"
          >
            {isSubmitting ? <Loader2 className="size-5 animate-spin" aria-hidden="true" /> : null}
            {isSubmitting ? "Enviando…" : "Enviar candidatura"}
            {isSubmitting ? null : <ArrowRight className="size-5" />}
          </button>
        </form>
      </Form>
    </div>
  )
}

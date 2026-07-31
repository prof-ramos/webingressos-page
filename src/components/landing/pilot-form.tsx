"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowRight } from "lucide-react"
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
  "h-12 w-full rounded-xl border-input bg-white px-4 text-[15px] placeholder:text-ink-400 focus-visible:border-primary focus-visible:ring-primary/15"

const selectTriggerClass =
  "w-full justify-between rounded-xl border-input bg-white px-4 text-[15px] data-[size=default]:h-12 data-placeholder:text-ink-400 focus-visible:border-primary focus-visible:ring-primary/15"

const labelClass = "text-[13px] font-semibold text-ink-700"

const ORGANIZATION_TYPE_OPTIONS = toOptions(
  ORGANIZATION_TYPES,
  ORGANIZATION_TYPE_LABELS
)
const ATTENDANCE_OPTIONS = toOptions(
  ATTENDANCE_RANGES,
  ATTENDANCE_RANGE_LABELS
)
const UF_OPTIONS = toOptions(UFS, UF_LABELS)

export function PilotForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = React.useState(false)

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
    },
  })

  async function onSubmit(data: PilotFormData) {
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const result = await res.json().catch(() => null)
        throw new Error(result?.error ?? "Erro ao enviar candidatura")
      }

      form.reset()
      router.push("/obrigado")
    } catch {
      toast.error("Erro ao enviar candidatura", {
        description:
          "Tente novamente em alguns minutos ou entre em contato diretamente.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="rounded-card border border-border bg-white p-6 shadow-card sm:p-8 lg:p-10">
      <h2 className="text-xl font-extrabold tracking-tight text-ink-900 sm:text-2xl">
        Candidate seu evento
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-7 space-y-5">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={labelClass}>
                    Nome do responsável
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Seu nome completo"
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
                      placeholder="(61) 99999-9999"
                      autoComplete="tel"
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
                      placeholder="seu@email.com"
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
                  <FormLabel className={labelClass}>
                    Estimativa de público
                  </FormLabel>
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

          <FormField
            control={form.control}
            name="organizationName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClass}>
                  Nome da organização ou do evento
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Ex.: Atlética do Cerrado, Festa Junina da República…"
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
                    className="mt-0.5 size-5 rounded-md"
                  />
                </FormControl>
                <div className="space-y-1">
                  <FormLabel className="text-[13px] leading-relaxed font-normal text-ink-500">
                    Autorizo o uso dos meus dados para contato e envio de
                    informações sobre o Programa Piloto da WebIngressos,
                    conforme a{" "}
                    <Link
                      href="/privacidade"
                      className="font-semibold text-brand-700 underline underline-offset-2"
                    >
                      LGPD
                    </Link>
                    .
                  </FormLabel>
                  <FormMessage className="text-destructive" />
                </div>
              </FormItem>
            )}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-xl bg-brand-700 px-6 text-base font-bold text-white shadow-cta transition-colors hover:bg-brand-800 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-60"
          >
            {isSubmitting ? "Enviando…" : "Enviar candidatura"}
            {isSubmitting ? null : <ArrowRight className="size-5" />}
          </button>
        </form>
      </Form>
    </div>
  )
}

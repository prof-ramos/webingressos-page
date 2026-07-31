import { ArrowRight } from "lucide-react"

import { DashboardPreview } from "@/components/landing/dashboard-preview"
import { Shell } from "@/components/landing/section"
import { SITE_CONFIG } from "@/lib/constants"

export function Hero() {
  return (
    <section className="pt-9 pb-11 sm:pt-12 sm:pb-12 lg:pt-14 lg:pb-14">
      <Shell>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.12fr] lg:gap-12">
          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.16em] text-brand-700 uppercase">
              Programa piloto para eventos universitários
            </p>
            {/* Explicit breaks from lg up so the three lines land exactly as in
                the reference design; below lg the copy wraps naturally. */}
            <h1 className="text-[2.1rem] leading-[1.08] font-extrabold tracking-[-0.028em] text-ink-800 sm:text-[2.75rem] lg:text-[2.9rem] xl:text-[3.1rem]">
              Venda ingressos
              <br className="hidden lg:inline" /> sem perder o controle
              <br className="hidden lg:inline" /> do evento.
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-500 sm:text-lg">
              Centralize vendas, promoters, comissões, check-in e prestação de contas em uma
              plataforma desenvolvida para atléticas, repúblicas e produtores universitários.
            </p>

            <div className="mt-8 flex max-w-sm flex-col gap-3">
              <a
                href={SITE_CONFIG.pilotFormUrl}
                className="inline-flex h-14 items-center justify-center gap-2.5 rounded-xl bg-brand-700 px-6 text-base font-bold text-white shadow-cta transition-colors hover:bg-brand-800 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
              >
                {SITE_CONFIG.ctaLabel}
                <ArrowRight className="size-5" />
              </a>
              <a
                href="#pilares"
                className="inline-flex h-14 items-center justify-center rounded-xl border border-brand-300 bg-white px-6 text-base font-bold text-brand-700 transition-colors hover:border-brand-500 hover:bg-brand-50 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
              >
                Conhecer a proposta
              </a>
            </div>

            <p className="mt-5 max-w-sm text-xs leading-relaxed text-ink-500 sm:text-sm">
              Candidatura sem compromisso. Retornamos em até 48 horas úteis para entender o seu
              evento.
            </p>
          </div>

          <div className="lg:justify-self-end">
            <DashboardPreview className="pt-4 sm:pt-6" />
          </div>
        </div>
      </Shell>
    </section>
  )
}

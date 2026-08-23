import { ArrowDown, ArrowRight, Zap } from "lucide-react"

import { DashboardPreview } from "@/components/landing/dashboard-preview"
import { Shell } from "@/components/landing/section"
import { SITE_CONFIG } from "@/lib/constants"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface-deep">
      <div
        className="pointer-events-none absolute inset-0 flyer-grid opacity-25"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 grain opacity-[0.08] mix-blend-screen"
        aria-hidden="true"
      />
      <Shell className="relative py-14 sm:py-18 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 border border-accent/55 bg-accent/10 px-3 py-2 text-xs font-bold tracking-[0.16em] text-accent uppercase">
              <Zap className="size-3.5" aria-hidden="true" />
              Piloto para a cena universitária
            </p>
            <h1 className="font-display text-[3.25rem] leading-[0.9] tracking-[-0.025em] text-balance text-foreground uppercase sm:text-[4.6rem] lg:text-[5.3rem] xl:text-[6.15rem]">
              Venda ingressos
              <br /> sem perder o <span className="text-primary">controle</span>
              <br /> do evento.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Para atléticas, repúblicas, centros acadêmicos e produtores universitários, a
              WebIngressos está em validação para conectar vendas, promoters, check-in e prestação
              de contas — sem depender de Pix no WhatsApp e planilhas paralelas.
            </p>

            <div className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
              <a
                href={SITE_CONFIG.pilotFormUrl}
                className="inline-flex h-14 items-center justify-center gap-2.5 rounded-lg bg-primary px-7 text-base font-bold text-primary-foreground transition-[background-color,box-shadow,transform] hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-cta focus-visible:outline-none"
              >
                {SITE_CONFIG.ctaLabel}
                <ArrowRight className="size-5" />
              </a>
              <a
                href="#demonstracao"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-lg border border-input bg-surface px-7 text-base font-bold text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline-none"
              >
                Ver por dentro
                <ArrowDown className="size-4" aria-hidden="true" />
              </a>
            </div>

            <p className="mt-5 max-w-md text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Candidatura sem compromisso. Retornamos em até 48 horas úteis para entender o seu
              evento.
            </p>
          </div>

          <div id="demonstracao" className="scroll-mt-24 lg:justify-self-end">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs font-bold tracking-[0.16em] text-accent uppercase">
                Demonstração do produto
              </p>
              <span className="border border-primary/60 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                Dados fictícios
              </span>
            </div>
            <DashboardPreview />
          </div>
        </div>
      </Shell>

      <div className="relative overflow-hidden border-t border-border bg-accent py-3 text-accent-foreground">
        <div className="flex w-max animate-marquee motion-reduce:w-full motion-reduce:animate-none">
          {[0, 1].map((copy) => (
            <p
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center gap-6 pr-6 font-display text-lg tracking-tight whitespace-nowrap uppercase sm:text-xl"
            >
              Atléticas <Zap className="size-4" /> Repúblicas <Zap className="size-4" /> Centros
              acadêmicos <Zap className="size-4" /> Produtores universitários{" "}
              <Zap className="size-4" />
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

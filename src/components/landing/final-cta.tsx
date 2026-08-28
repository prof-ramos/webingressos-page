import { ArrowRight } from "lucide-react"

import { TicketLine } from "@/components/illustrations/ticket-line"
import { Shell } from "@/components/landing/section"
import { SITE_CONFIG } from "@/lib/constants"

export function FinalCta() {
  return (
    <section className="pt-4 pb-16 sm:pt-6 sm:pb-20">
      <Shell>
        <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-panel bg-primary px-7 py-10 text-center text-primary-foreground sm:px-10 sm:py-12 lg:flex-row lg:justify-between lg:px-14 lg:text-left">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-64 items-center lg:flex"
            aria-hidden="true"
          >
            <div className="absolute inset-y-9 left-10 w-16 flyer-grid opacity-25" />
            <TicketLine className="relative ml-14 w-44 text-primary-foreground/40" />
          </div>

          <h2 className="relative max-w-lg font-display text-4xl leading-[0.95] tracking-tight text-balance uppercase sm:text-5xl lg:ml-auto">
            Quer validar seu próximo evento com a WebIngressos?
          </h2>

          <a
            href={SITE_CONFIG.pilotFormUrl}
            className="relative inline-flex h-14 shrink-0 items-center justify-center gap-2.5 rounded-lg border border-primary-foreground bg-primary-foreground px-7 text-base font-bold text-primary transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none"
          >
            {SITE_CONFIG.ctaLabel}
            <ArrowRight className="size-5" />
          </a>
        </div>
      </Shell>
    </section>
  )
}

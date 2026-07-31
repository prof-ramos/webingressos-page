import { ArrowRight } from "lucide-react"

import { TicketLine } from "@/components/illustrations/ticket-line"
import { Shell } from "@/components/landing/section"
import { SITE_CONFIG } from "@/lib/constants"

export function FinalCta() {
  return (
    <section className="pt-6 pb-14 sm:pt-8 sm:pb-20">
      <Shell>
        <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-panel bg-brand-700 px-7 py-9 text-center sm:px-10 sm:py-11 lg:flex-row lg:justify-between lg:px-14 lg:text-left">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-64 items-center lg:flex"
            aria-hidden="true"
          >
            <div className="absolute inset-y-9 left-10 w-16 dot-grid text-white/20" />
            <TicketLine className="relative ml-14 w-44 text-white/30" />
          </div>

          <h2 className="relative max-w-md text-2xl font-extrabold tracking-tight text-balance text-white sm:text-3xl lg:ml-auto">
            Quer validar seu próximo evento com a WebIngressos?
          </h2>

          <a
            href={SITE_CONFIG.pilotFormUrl}
            className="relative inline-flex h-14 shrink-0 items-center justify-center gap-2.5 rounded-xl bg-white px-7 text-base font-bold text-brand-700 transition-colors hover:bg-brand-50 focus-visible:ring-3 focus-visible:ring-white/60 focus-visible:outline-none"
          >
            {SITE_CONFIG.ctaLabel}
            <ArrowRight className="size-5" />
          </a>
        </div>
      </Shell>
    </section>
  )
}

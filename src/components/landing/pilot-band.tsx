import { CircleCheck } from "lucide-react"

import { TicketBadge } from "@/components/illustrations/ticket-badge"
import { Shell } from "@/components/landing/section"
import { PILOT_BENEFITS } from "@/lib/constants"

export function PilotBand() {
  return (
    <section id="programa-piloto" className="scroll-mt-16 py-6 sm:scroll-mt-20 sm:py-8">
      <Shell>
        <div className="relative grid gap-8 overflow-hidden rounded-panel border border-accent/55 bg-surface-raised p-7 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:p-14">
          <div className="relative">
            <p className="text-xs font-bold tracking-[0.16em] text-accent uppercase">
              Programa piloto
            </p>
            <h2 className="mt-3 max-w-lg font-display text-4xl leading-[0.95] tracking-tight text-balance text-foreground uppercase sm:text-5xl">
              Estamos selecionando os primeiros eventos parceiros
            </h2>

            <ul className="mt-7 space-y-3.5">
              {PILOT_BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CircleCheck
                    className="size-5 shrink-0 fill-accent text-accent-foreground"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium text-foreground sm:text-base">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative hidden sm:block">
            <div
              className="absolute inset-x-4 inset-y-2 flyer-grid opacity-35"
              aria-hidden="true"
            />
            <TicketBadge className="relative mx-auto max-w-xs text-accent lg:max-w-sm" />
          </div>
        </div>
      </Shell>
    </section>
  )
}

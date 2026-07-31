import { CircleCheck } from "lucide-react"

import { TicketBadge } from "@/components/illustrations/ticket-badge"
import { Shell } from "@/components/landing/section"
import { PILOT_BENEFITS } from "@/lib/constants"

export function PilotBand() {
  return (
    <section id="programa-piloto" className="py-6 sm:py-8">
      <Shell>
        <div className="relative grid gap-8 overflow-hidden rounded-panel bg-brand-50 p-7 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:p-14">
          <div className="relative">
            <p className="text-xs font-bold tracking-[0.16em] text-brand-500 uppercase">
              Programa piloto
            </p>
            <h2 className="mt-3 max-w-md text-2xl font-extrabold tracking-tight text-balance text-ink-800 sm:text-3xl">
              Estamos selecionando os primeiros eventos parceiros
            </h2>

            <ul className="mt-7 space-y-3.5">
              {PILOT_BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CircleCheck
                    className="size-5 shrink-0 fill-brand-600 text-brand-50"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium text-ink-700 sm:text-base">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative hidden sm:block">
            <div
              className="absolute inset-x-4 inset-y-2 dot-grid text-brand-300/45 [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]"
              aria-hidden="true"
            />
            <TicketBadge className="relative mx-auto max-w-xs text-brand-700 lg:max-w-sm" />
          </div>
        </div>
      </Shell>
    </section>
  )
}

import { TicketLine } from "@/components/illustrations/ticket-line"
import { Section, SectionHeading } from "@/components/landing/section"
import { AUDIENCE } from "@/lib/constants"

export function TargetAudience() {
  return (
    <Section id="publico" className="border-y border-border bg-surface-deep">
      <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div>
          <SectionHeading
            eyebrow="Público inicial"
            align="start"
            title="Feito para quem organiza o evento e responde pela conta."
          />

          <ul className="grid gap-3 sm:grid-cols-2">
            {AUDIENCE.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-3 rounded-card border border-border bg-surface px-5 py-4 transition-colors duration-200 hover:border-accent"
              >
                <item.icon
                  className="size-5 shrink-0 text-accent"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
                <span className="text-sm font-semibold text-foreground">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative hidden min-h-64 items-center justify-center overflow-hidden rounded-panel border border-primary/50 bg-surface sm:flex">
          <div className="absolute inset-5 flyer-grid opacity-40" aria-hidden="true" />
          <TicketLine className="relative z-10 w-56 text-primary lg:w-64" />
        </div>
      </div>
    </Section>
  )
}

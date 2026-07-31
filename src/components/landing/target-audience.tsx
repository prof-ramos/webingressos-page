import { TicketLine } from "@/components/illustrations/ticket-line"
import { Section, SectionHeading } from "@/components/landing/section"
import { AUDIENCE } from "@/lib/constants"

export function TargetAudience() {
  return (
    <Section id="publico">
      <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div>
          <SectionHeading align="start" title="Feito para quem faz o evento acontecer." />

          <ul className="grid gap-3 sm:grid-cols-2">
            {AUDIENCE.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-3 rounded-card border border-border bg-white px-5 py-4 transition-[border-color,box-shadow] duration-200 hover:border-brand-200 hover:shadow-card"
              >
                <item.icon
                  className="size-5 shrink-0 text-brand-600"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
                <span className="text-sm font-semibold text-ink-800">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative hidden min-h-64 items-center justify-center overflow-hidden rounded-panel bg-ink-100 sm:flex">
          <div
            className="absolute inset-5 dot-grid text-brand-300/45 [mask-image:radial-gradient(ellipse_at_center,black,transparent_74%)]"
            aria-hidden="true"
          />
          <TicketLine className="relative z-10 w-56 text-brand-700 lg:w-64" />
        </div>
      </div>
    </Section>
  )
}

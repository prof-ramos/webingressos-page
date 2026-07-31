import { Section, SectionHeading } from "@/components/landing/section"
import { AUDIENCE } from "@/lib/constants"

export function TargetAudience() {
  return (
    <Section id="publico">
      <SectionHeading title="Feito para quem faz o evento acontecer." />

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
            <span className="text-sm font-semibold text-ink-800">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  )
}

import { Section, SectionHeading } from "@/components/landing/section"
import { PILLARS } from "@/lib/constants"

export function Pillars() {
  return (
    <Section id="pilares">
      <SectionHeading title="Uma plataforma feita para a realidade universitária." />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {PILLARS.map((pillar) => (
          <li
            key={pillar.title}
            className="rounded-card border border-border bg-white p-6 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card"
          >
            <span className="inline-flex size-12 items-center justify-center rounded-full bg-brand-700 text-white">
              <pillar.icon className="size-6" strokeWidth={1.8} aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-bold text-ink-900">{pillar.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{pillar.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

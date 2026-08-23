import { Section, SectionHeading } from "@/components/landing/section"
import { PILLARS } from "@/lib/constants"

export function Pillars() {
  return (
    <Section id="pilares">
      <SectionHeading
        eyebrow="A proposta"
        title="Uma infraestrutura pensada para a realidade universitária."
        subtitle="Os fluxos abaixo estão em validação com organizadores para formar o programa piloto."
      />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {PILLARS.map((pillar, index) => (
          <li
            key={pillar.title}
            className="group rounded-card border border-border bg-surface p-6 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent"
          >
            <span
              className={`inline-flex size-12 items-center justify-center rounded-lg ${
                index % 2 === 0
                  ? "bg-primary text-primary-foreground"
                  : "bg-accent text-accent-foreground"
              }`}
            >
              <pillar.icon className="size-6" strokeWidth={1.8} aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-display text-xl tracking-tight text-foreground uppercase">
              {pillar.title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
              {pillar.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

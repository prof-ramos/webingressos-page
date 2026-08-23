import { Section, SectionHeading } from "@/components/landing/section"
import { PROBLEMS } from "@/lib/constants"

export function Problems() {
  return (
    <Section id="problemas">
      <SectionHeading
        eyebrow="O problema"
        title="O evento cresce. A operação se espalha. A conta deixa de fechar."
        subtitle="Pix, comprovantes, listas e comissões acabam distribuídos entre WhatsApp e planilhas que não conversam."
      />

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        {PROBLEMS.map((problem) => (
          <li
            key={problem.title}
            className="flex items-start gap-4 rounded-card border border-border bg-surface p-5 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-primary"
          >
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/12 text-primary">
              <problem.icon className="size-5" strokeWidth={1.7} aria-hidden="true" />
            </span>
            <span>
              <h3 className="text-sm font-bold text-foreground">{problem.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {problem.description}
              </p>
            </span>
          </li>
        ))}
      </ul>
    </Section>
  )
}

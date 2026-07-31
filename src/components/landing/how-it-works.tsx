import { CalendarCheck, ClipboardList, Rocket } from "lucide-react"

import { SectionHeading } from "@/components/landing/section-heading"

const steps = [
  {
    icon: ClipboardList,
    title: "Conte como seu evento funciona",
    description:
      "Você informa o formato do evento, o público esperado, a equipe envolvida e o principal gargalo da operação atual.",
  },
  {
    icon: CalendarCheck,
    title: "Desenhamos o piloto juntos",
    description:
      "Mapeamos lotes, promoters, check-in, responsabilidades e fechamento antes de comprometer o evento.",
  },
  {
    icon: Rocket,
    title: "Executamos e medimos",
    description:
      "A primeira operação é acompanhada de perto para identificar falhas, medir resultados e definir as próximas entregas.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="section-space scroll-mt-24 bg-background">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Como funciona"
          title="Primeiro o evento real. Depois, a plataforma completa."
          description="A WebIngressos nasce com validação operacional, sem fingir que todas as funcionalidades já estão prontas."
          align="center"
        />

        <ol className="relative mt-14 grid gap-6 lg:grid-cols-3">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <li
              key={title}
              className="relative rounded-3xl border border-border bg-card p-7 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-muted-foreground">0{index + 1}</span>
              </div>
              <h3 className="mt-7 text-xl font-semibold tracking-tight">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

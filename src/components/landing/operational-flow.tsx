import { Landmark, QrCode, Ticket, Users } from "lucide-react"

import { Section, SectionHeading } from "@/components/landing/section"

const FLOW_STEPS = [
  {
    title: "Configure o evento",
    description: "Datas, lotes e regras começam no mesmo fluxo, sem reconstruir a base depois.",
    icon: Ticket,
  },
  {
    title: "Ligue venda e responsável",
    description: "A proposta relaciona cada venda ao canal ou promoter que a originou.",
    icon: Users,
  },
  {
    title: "Registre a entrada",
    description: "O check-in mantém o uso do ingresso no mesmo histórico da operação.",
    icon: QrCode,
  },
  {
    title: "Feche com rastreabilidade",
    description: "Receitas, despesas, comissões e divisões formam a prestação de contas.",
    icon: Landmark,
  },
] as const

export function OperationalFlow() {
  return (
    <Section id="operacao">
      <SectionHeading
        eyebrow="Fluxo previsto para o piloto"
        title="Da primeira venda à prestação de contas."
      />

      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {FLOW_STEPS.map((step, index) => (
          <li
            key={step.title}
            className="relative rounded-card border border-border bg-surface p-6 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-primary"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex size-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <step.icon className="size-5" strokeWidth={1.7} aria-hidden="true" />
              </span>
              <span className="font-display text-3xl text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-5 text-base font-bold text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}

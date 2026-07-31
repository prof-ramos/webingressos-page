import { BarChart3, QrCode, TicketCheck, WalletCards } from "lucide-react"

import { SectionHeading } from "@/components/landing/section-heading"

const pillars = [
  {
    icon: TicketCheck,
    number: "01",
    title: "Vendas centralizadas",
    description:
      "Estruture lotes, cupons e ingressos com uma visão única da operação comercial do evento.",
  },
  {
    icon: BarChart3,
    number: "02",
    title: "Promoters acompanhados",
    description:
      "Associe vendas, metas e comissões a cada promoter sem depender de apuração manual no fim.",
  },
  {
    icon: QrCode,
    number: "03",
    title: "Entrada organizada",
    description:
      "Prepare validação por QR Code e rastreabilidade do check-in para reduzir improviso na portaria.",
  },
  {
    icon: WalletCards,
    number: "04",
    title: "Financeiro rastreável",
    description:
      "Consolide receitas, despesas, taxas e divisões para produzir uma prestação de contas verificável.",
  },
]

export function Pillars() {
  return (
    <section
      id="solucao"
      className="section-space scroll-mt-24 border-y border-border/70 bg-muted/45"
    >
      <div className="container-shell">
        <SectionHeading
          eyebrow="A proposta"
          title="Uma única operação, do primeiro lote ao fechamento."
          description="O programa piloto prioriza as partes que mais consomem tempo e geram divergência para quem organiza eventos universitários."
          align="center"
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-2">
          {pillars.map(({ icon: Icon, number, title, description }) => (
            <article key={title} className="bg-background p-7 sm:p-9">
              <div className="flex items-center justify-between gap-4">
                <span className="grid size-12 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <span className="font-mono text-sm text-muted-foreground">{number}</span>
              </div>
              <h3 className="mt-8 text-2xl font-semibold tracking-tight">{title}</h3>
              <p className="mt-3 max-w-xl leading-7 text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

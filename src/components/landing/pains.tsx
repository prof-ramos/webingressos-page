import { FileSpreadsheet, History, MessagesSquare, Split } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeading } from "@/components/landing/section-heading"

const pains = [
  {
    icon: MessagesSquare,
    title: "Informação espalhada",
    description:
      "Vendas, listas, cortesias e decisões ficam divididas entre grupos, links e mensagens difíceis de conferir.",
  },
  {
    icon: FileSpreadsheet,
    title: "Comissões manuais",
    description:
      "Promoters, metas e valores devidos dependem de planilhas que exigem conferência e retrabalho.",
  },
  {
    icon: Split,
    title: "Fechamento confuso",
    description:
      "Receitas, despesas, taxas e divisões entre organizadores nem sempre chegam ao mesmo resultado.",
  },
  {
    icon: History,
    title: "Histórico perdido",
    description:
      "Quando a diretoria muda, parte do processo e das decisões do evento anterior precisa ser reconstruída.",
  },
]

export function Pains() {
  return (
    <section id="problemas" className="section-space scroll-mt-24 bg-background">
      <div className="container-shell">
        <SectionHeading
          eyebrow="O problema"
          title="Seu evento não deveria depender de cinco planilhas e um grupo de WhatsApp."
          description="O ingresso é apenas uma parte da operação. O trabalho mais difícil aparece no controle de quem vendeu, quem recebeu, quem aprovou e como a conta fechou."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pains.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="h-full bg-card/80">
              <CardHeader>
                <span className="grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <CardTitle className="mt-4">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { ChevronDown } from "lucide-react"

import { SectionHeading } from "@/components/landing/section-heading"

const questions = [
  {
    question: "A plataforma já está disponível para qualquer evento?",
    answer:
      "Ainda não. A WebIngressos está estruturando a primeira versão e selecionando eventos parceiros para validar os fluxos antes do lançamento comercial.",
  },
  {
    question: "Quais eventos têm prioridade no piloto?",
    answer:
      "Calouradas, festas de repúblicas e atléticas, jogos e outros eventos universitários com equipe organizadora, promoters, lotes e necessidade de prestação de contas.",
  },
  {
    question: "Já existe preço definido?",
    answer:
      "O modelo comercial ainda está em validação. Qualquer taxa, condição ou responsabilidade será apresentada com clareza antes de o organizador assumir compromisso.",
  },
  {
    question: "Posso me candidatar mesmo usando outra plataforma?",
    answer:
      "Sim. Entender como o evento opera hoje — inclusive relatórios, planilhas e dificuldades da plataforma atual — faz parte do processo de seleção.",
  },
  {
    question: "PIX, cartão e QR Code farão parte do produto?",
    answer:
      "Esses recursos estão no escopo planejado do MVP. A disponibilidade efetiva dependerá da validação técnica, operacional e do provedor de pagamentos escolhido.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="section-space scroll-mt-24 border-y border-border/70 bg-muted/45">
      <div className="container-shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <SectionHeading
          eyebrow="Perguntas frequentes"
          title="O que já está definido — e o que ainda está em validação."
          description="A página não apresenta funcionalidades futuras como se estivessem prontas. O piloto existe justamente para transformar hipóteses em operação comprovada."
        />

        <div className="divide-y divide-border overflow-hidden rounded-3xl border border-border bg-background px-5 sm:px-7">
          {questions.map(({ question, answer }) => (
            <details key={question} className="group py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-left font-semibold marker:hidden">
                <span>{question}</span>
                <ChevronDown
                  className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="max-w-3xl pb-6 pr-8 text-sm leading-7 text-muted-foreground">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

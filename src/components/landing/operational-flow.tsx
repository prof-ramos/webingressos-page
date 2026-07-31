import { QrCode, Smartphone, TicketCheck } from "lucide-react"

import { Section, SectionHeading } from "@/components/landing/section"

const FLOW_STEPS = [
  {
    title: "Ingresso digital",
    description: "A pessoa compra e acessa o ingresso pelo celular, sem fila e sem papel.",
    icon: Smartphone,
  },
  {
    title: "Check-in por QR Code",
    description: "A equipe valida a entrada com rapidez e clareza na porta do evento.",
    icon: QrCode,
  },
  {
    title: "Confirmação da entrada",
    description: "O evento acompanha em tempo real o público que já entrou.",
    icon: TicketCheck,
  },
] as const

export function OperationalFlow() {
  return (
    <Section id="operacao">
      <SectionHeading
        eyebrow="Da venda à entrada"
        title="Uma operação mais clara para quem organiza e para quem participa."
      />

      <ol className="grid gap-4 sm:grid-cols-3 lg:gap-5">
        {FLOW_STEPS.map((step, index) => (
          <li
            key={step.title}
            className="rounded-card border border-border bg-white p-6 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                <step.icon className="size-5" strokeWidth={1.7} aria-hidden="true" />
              </span>
              <span className="text-xs font-bold tracking-[0.16em] text-brand-700">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-5 text-lg font-bold text-ink-900">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-500">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}

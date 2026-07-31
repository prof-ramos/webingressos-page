import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const benefits = [
  "Configuração acompanhada pela equipe",
  "Participação direta na definição dos fluxos",
  "Validação com as regras reais do evento",
  "Condições comerciais apresentadas antes de qualquer compromisso",
]

export function PilotProgram() {
  return (
    <section id="piloto" className="scroll-mt-24 bg-background pb-12 sm:pb-16 lg:pb-24">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#11182b] px-6 py-10 text-white sm:px-10 sm:py-14 lg:px-16">
          <div
            className="absolute -right-32 -top-32 size-96 rounded-full bg-violet-500/25 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-36 left-1/3 size-96 rounded-full bg-cyan-400/15 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <Badge variant="inverse">Primeiros parceiros</Badge>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
                Seu próximo evento pode ajudar a construir a WebIngressos.
              </h2>
              <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-slate-300">
                Estamos selecionando organizações dispostas a abrir o processo real do evento,
                testar a proposta e apontar o que precisa mudar antes do lançamento comercial.
              </p>
              <Button asChild variant="inverse" size="lg" className="mt-8">
                <Link href="/#candidatura">
                  Candidatar meu evento
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <ul className="grid gap-3">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-sm leading-6 text-slate-200"
                >
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-cyan-300"
                    aria-hidden="true"
                  />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

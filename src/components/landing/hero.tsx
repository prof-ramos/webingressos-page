import Link from "next/link"
import { ArrowRight, Check, ClipboardCheck, QrCode, Ticket, Users, Wallet } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const productAreas = [
  { icon: Ticket, label: "Vendas e lotes" },
  { icon: Users, label: "Promoters e comissões" },
  { icon: QrCode, label: "Check-in" },
  { icon: Wallet, label: "Prestação de contas" },
]

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0b1020] text-white">
      <div className="absolute inset-0 hero-grid opacity-35" aria-hidden="true" />
      <div
        className="absolute -left-40 top-10 size-[34rem] rounded-full bg-violet-600/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -right-40 bottom-0 size-[32rem] rounded-full bg-cyan-400/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-shell relative grid min-h-[calc(100svh-4rem)] items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="max-w-3xl">
          <Badge variant="inverse">
            <span className="size-1.5 rounded-full bg-cyan-300" aria-hidden="true" />
            Programa piloto para eventos universitários
          </Badge>

          <h1 className="mt-7 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl lg:leading-[1.02]">
            Venda ingressos sem perder o controle do evento.
          </h1>

          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl">
            Centralize vendas, promoters, check-in e prestação de contas em uma operação pensada
            para atléticas, repúblicas, centros acadêmicos e produtores universitários.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="inverse" size="lg">
              <Link href="/#candidatura">
                Quero participar do piloto
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/#como-funciona">Ver como funciona</Link>
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
            {[
              "Configuração assistida",
              "Fluxo desenhado com o organizador",
              "Escopo transparente",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="size-4 text-cyan-300" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div
            className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-500/20 to-cyan-400/10 blur-2xl"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/[0.07] p-3 shadow-2xl backdrop-blur-xl">
            <div className="rounded-2xl border border-white/10 bg-[#11182b] p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                    Conceito do piloto
                  </p>
                  <h2 className="mt-2 text-xl font-semibold">Operação do evento</h2>
                </div>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  Em definição
                </span>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {productAreas.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex min-h-28 flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <span className="grid size-9 place-items-center rounded-xl bg-white/10 text-cyan-200">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <p className="mt-5 text-sm font-medium text-slate-100">{label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-3 flex items-start gap-3 rounded-2xl border border-violet-300/15 bg-violet-400/10 p-4">
                <ClipboardCheck
                  className="mt-0.5 size-5 shrink-0 text-violet-200"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-slate-300">
                  A primeira versão será validada com eventos reais antes de ampliar o escopo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

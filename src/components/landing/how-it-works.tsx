"use client"

import * as React from "react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ClipboardCheck, Handshake, Rocket, BarChart3 } from "lucide-react"

const STEPS = [
  {
    step: "01",
    icon: ClipboardCheck,
    title: "Candidatura",
    description:
      "Preencha o formulário com os dados do seu evento. Analisamos sua candidatura em até 48h.",
  },
  {
    step: "02",
    icon: Handshake,
    title: "Seleção & Onboarding",
    description:
      "Se seu evento se encaixar no piloto, faremos uma chamada para alinhar expectativas e configurar sua conta.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Operação do Evento",
    description:
      "Use a plataforma para vender ingressos, gerenciar promoters e fazer check-in. Nossa acompanha em tempo real.",
  },
  {
    step: "04",
    icon: BarChart3,
    title: "Prestação de Contas",
    description:
      "Ao fim do evento, gere relatórios de receita, comissões e repasses. Tudo documentado e transparente.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-slate-950 text-slate-100">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Como funciona o programa piloto
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Do cadastro à prestação de contas, acompanhamos cada etapa para garantir que seu evento aconteça sem imprevistos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((item, idx) => (
            <Card
              key={idx}
              className="bg-slate-900/40 border-slate-800 hover:border-emerald-500/50 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-4 right-4 text-5xl font-extrabold text-slate-800/50 group-hover:text-emerald-500/10 transition-colors">
                {item.step}
              </div>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4 text-emerald-400 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-bold text-white">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardDescription className="text-slate-400 text-base leading-relaxed px-6 pb-6">
                {item.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

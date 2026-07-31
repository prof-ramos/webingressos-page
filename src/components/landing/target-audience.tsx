"use client"

import * as React from "react"
import { Target, Ticket, ShieldCheck, Users } from "lucide-react"

const TARGET_AUDIENCE = [
  {
    icon: Target,
    title: "Atléticas Universitárias",
    desc: "Organize suas festas com controle total de receitas e comissões de torcedores e promoters.",
  },
  {
    icon: Ticket,
    title: "Repúblicas & Centros Acadêmicos",
    desc: "Simplifique o processo de venda e entrada em festas de fim de ano e eventos beneficentes.",
  },
  {
    icon: Users,
    title: "Produtores de Festas & Festivais",
    desc: "Gerencie grandes públicos, diferentes lotes e uma rede complexa de promoters.",
  },
  {
    icon: ShieldCheck,
    title: "Casas Noturnas & Espaços",
    desc: "Reduza filas na portaria, evite fraudes e tenha um relatório claro ao fim da noite.",
  },
]

export function TargetAudience() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Feito para quem move a cena universitária
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Se a sua organização enfrenta desafios com controle de vendas e gestão de pessoas, a WebIngressos foi desenhada para você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TARGET_AUDIENCE.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 group flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

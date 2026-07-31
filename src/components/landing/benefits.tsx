"use client"

import * as React from "react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { PILARS } from "@/lib/constants"
import { TrendingUp, Users, QrCode, ShieldCheck } from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  TrendingUp,
  Users,
  QrCode,
  ShieldCheck,
}

export function Benefits() {
  return (
    <section id="pilares" className="py-24 bg-slate-900 text-slate-100">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Controle total na palma da mão
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Chega de planilhas compartilhadas e WhatsApp lotado de prints. A WebIngressos oferece um painel integrado para todas as etapas do seu evento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PILARS.map((pilar, index) => {
            const IconComponent = iconMap[pilar.icon] || TrendingUp
            return (
              <Card key={index} className="bg-slate-800/50 border-emerald-500/20 hover:bg-slate-800/80 transition-all group">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-bold text-white mb-2">
                      {pilar.title}
                    </CardTitle>
                    <CardDescription className="text-slate-400 text-base leading-relaxed">
                      {pilar.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

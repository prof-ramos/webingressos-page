"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"

export function FinalCta() {
  return (
    <section className="py-32 bg-gradient-to-br from-emerald-900/40 via-slate-900 to-slate-950 text-center">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="inline-flex p-3 bg-emerald-500/10 rounded-full mb-8 border border-emerald-500/20">
          <Rocket className="w-8 h-8 text-emerald-400" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
          Pronto para profissionalizar a sua produção?
        </h2>
        
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Garanta uma vaga no programa piloto da WebIngressos e tenha acesso a uma plataforma feita sob medida para o seu evento, com suporte dedicado e sem custos iniciais para os primeiros parceiros.
        </p>

        <a href="#piloto">
          <Button size="lg" className="bg-white text-emerald-900 hover:bg-slate-100 font-bold px-12 py-6 text-xl rounded-2xl shadow-[0_0_50px_-10px_rgba(255,255,255,0.3)] transition-all hover:scale-105">
            Quero participar do piloto
          </Button>
        </a>
      </div>
    </section>
  )
}

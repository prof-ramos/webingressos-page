"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Target } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center bg-gradient-to-br from-slate-900 via-emerald-900/30 to-slate-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] bg-[url('/grid.svg')] bg-center" />

      <div className="container mx-auto px-6 lg:px-12 z-10 text-center pt-32 pb-20">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-emerald-500/20">
          <Target className="w-4 h-4" />
          <span>Foco exclusivo em organizadores de eventos</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8 max-w-4xl mx-auto">
          Venda ingressos sem{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
            perder o controle
          </span>{" "}
          do evento.
        </h1>

        <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Centralize vendas, promoters, comissões, check-in e prestação de contas em uma plataforma desenvolvida para{" "}
          <strong className="text-white font-semibold">atléticas, repúblicas e produtores universitários</strong>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="#piloto">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 text-lg rounded-xl shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] transition-all hover:scale-105">
              Quero participar do piloto
            </Button>
          </Link>
          <Link href="#problemas">
            <Button variant="ghost" size="lg" className="text-slate-300 hover:text-white hover:bg-white/5 px-8 py-4 text-lg rounded-xl transition-all">
              Ver como funciona
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent z-10" />
    </section>
  )
}

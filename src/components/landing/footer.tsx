"use client"

import * as React from "react"
import Link from "next/link"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-800 text-slate-400 text-sm">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-bold text-white tracking-tight">
            Web<span className="text-emerald-400">Ingressos</span>
          </span>
          <p>&copy; {new Date().getFullYear()} WebIngressos. Todos os direitos reservados.</p>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/privacidade" className="hover:text-white transition-colors">
            Política de Privacidade
          </Link>
        </div>
        
        <p className="flex items-center gap-1.5">
          Feito com <Heart className="w-4 h-4 text-red-500 fill-current" /> para a cena universitária.
        </p>
      </div>
    </footer>
  )
}

"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold text-white tracking-tight">
            Web<span className="text-emerald-400">Ingressos</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#como-funciona" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Como funciona
          </a>
          <a href="#problemas" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            O problema
          </a>
          <a href="#faq" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Perguntas Frequentes
          </a>
          <a href="#piloto">
            <Button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-2.5 rounded-lg transition-all">
              Participar do Piloto
            </Button>
          </a>
        </div>

        <button 
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-6">
          <a href="#como-funciona" className="text-base font-medium text-slate-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>
            Como funciona
          </a>
          <a href="#problemas" className="text-base font-medium text-slate-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>
            O problema
          </a>
          <a href="#faq" className="text-base font-medium text-slate-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>
            Perguntas Frequentes
          </a>
          <a href="#piloto" onClick={() => setIsMenuOpen(false)}>
            <Button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-lg">
              Participar do Piloto
            </Button>
          </a>
        </div>
      )}
    </header>
  )
}

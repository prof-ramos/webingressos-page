"use client"

import * as React from "react"
import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Problems } from "@/components/landing/problems"
import { TargetAudience } from "@/components/landing/target-audience"
import { Benefits } from "@/components/landing/benefits"
import { PilotForm } from "@/components/landing/pilot-form"
import { FinalCta } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FAQS } from "@/lib/constants"

export default function Home() {
  return (
    <main className="min-h-screen font-sans selection:bg-emerald-500/30">
      <Header />
      <Hero />
      <Problems />
      <TargetAudience />
      <Benefits />
      
      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-slate-950 text-slate-100">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Tudo o que você precisa saber sobre o programa piloto da WebIngressos.
            </p>
          </div>

          <Accordion className="w-full space-y-4">
            {FAQS.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-slate-800 bg-slate-900/50 rounded-xl px-6">
                <AccordionTrigger className="text-left font-bold text-lg py-6 hover:no-underline hover:text-emerald-400 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-400 pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Form Section */}
      <section id="piloto" className="py-24 bg-slate-900 text-slate-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Candidatar-se ao Programa Piloto
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Preencha os dados abaixo. Nossa equipe analisará sua candidatura e entrará em contato em até 48 horas úteis.
            </p>
          </div>
          <PilotForm />
        </div>
      </section>

      <FinalCta />
      <Footer />
    </main>
  )
}

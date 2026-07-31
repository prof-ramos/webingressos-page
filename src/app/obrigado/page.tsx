import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"

import { SiteFooter } from "@/components/landing/site-footer"
import { SiteHeader } from "@/components/landing/site-header"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Candidatura recebida",
  description: "Confirmação de envio da candidatura ao programa piloto da WebIngressos.",
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <>
      <SiteHeader />
      <main className="container-shell grid min-h-[70svh] place-items-center py-20">
        <section className="mx-auto max-w-2xl text-center">
          <span className="mx-auto grid size-16 place-items-center rounded-3xl bg-emerald-500/10 text-emerald-600">
            <CheckCircle2 className="size-8" aria-hidden="true" />
          </span>
          <h1 className="mt-7 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Candidatura recebida.
          </h1>
          <p className="mt-5 text-pretty text-lg leading-8 text-muted-foreground">
            Os dados foram encaminhados para análise. O contato será feito pelos canais informados
            caso o evento esteja aderente ao escopo atual do programa piloto.
          </p>
          <Button asChild variant="outline" size="lg" className="mt-8">
            <Link href="/">
              <ArrowLeft aria-hidden="true" />
              Voltar para a página inicial
            </Link>
          </Button>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

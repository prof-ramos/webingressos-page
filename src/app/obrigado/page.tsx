import Link from "next/link"
import { CircleCheck } from "lucide-react"

import { Logo } from "@/components/brand/logo"

export default function ThankYouPage() {
  return (
    <main
      id="main-content"
      className="flex min-h-screen flex-col items-center justify-center bg-surface-deep px-5 py-16"
    >
      <div className="w-full max-w-lg rounded-panel border border-primary/55 bg-surface p-8 text-center sm:p-10">
        <div className="flex justify-center">
          <Logo markClassName="size-7" wordmarkClassName="text-lg" />
        </div>

        <div className="mt-8 flex justify-center">
          <span className="inline-flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
            <CircleCheck className="size-7" strokeWidth={1.8} aria-hidden="true" />
          </span>
        </div>

        <h1 className="mt-6 font-display text-4xl tracking-tight text-balance text-foreground uppercase sm:text-5xl">
          Candidatura recebida
        </h1>

        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          Obrigado por se candidatar ao programa piloto da WebIngressos. Nossa equipe entrará em
          contato pelo e-mail ou WhatsApp informado em até{" "}
          <strong className="font-semibold text-foreground">48 horas úteis</strong> para dar início
          ao seu processo.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex h-13 items-center justify-center rounded-lg bg-primary px-7 text-base font-bold text-primary-foreground transition-[background-color,box-shadow] hover:bg-brand-400 hover:shadow-cta"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </main>
  )
}

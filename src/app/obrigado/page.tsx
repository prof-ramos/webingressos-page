import Link from "next/link"
import { CircleCheck } from "lucide-react"

import { Logo } from "@/components/brand/logo"

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 py-16">
      <div className="w-full max-w-lg rounded-card border border-border bg-white p-8 text-center shadow-card sm:p-10">
        <div className="flex justify-center">
          <Logo markClassName="size-7" wordmarkClassName="text-lg" />
        </div>

        <div className="mt-8 flex justify-center">
          <span className="inline-flex size-14 items-center justify-center rounded-full bg-brand-100 text-brand-700">
            <CircleCheck className="size-7" strokeWidth={1.8} aria-hidden="true" />
          </span>
        </div>

        <h1 className="mt-6 text-2xl font-extrabold tracking-tight text-balance text-ink-800 sm:text-3xl">
          Candidatura recebida!
        </h1>

        <p className="mt-4 text-base leading-relaxed text-ink-500">
          Obrigado por se candidatar ao programa piloto da WebIngressos. Nossa
          equipe entrará em contato pelo e-mail ou WhatsApp informado em até{" "}
          <strong className="font-semibold text-ink-800">48 horas úteis</strong>{" "}
          para dar início ao seu processo.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex h-13 items-center justify-center rounded-xl bg-brand-700 px-7 text-base font-bold text-white shadow-cta transition-colors hover:bg-brand-800"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </main>
  )
}

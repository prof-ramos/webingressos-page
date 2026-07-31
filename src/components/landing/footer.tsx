import Link from "next/link"

import { Logo } from "@/components/brand/logo"
import { Shell } from "@/components/landing/section"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-white py-10">
      <Shell>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Logo markClassName="size-7" wordmarkClassName="text-lg" />
            <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-ink-500">
              Gestão de vendas, promoters, check-in e prestação de contas para a cena universitária.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm sm:items-end">
            <Link
              href="/privacidade"
              className="font-medium text-ink-700 transition-colors hover:text-brand-700"
            >
              Política de privacidade
            </Link>
            <p className="text-ink-400">© {year} WebIngressos. Todos os direitos reservados.</p>
          </div>
        </div>
      </Shell>
    </footer>
  )
}

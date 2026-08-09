import Link from "next/link"

import { Logo } from "@/components/brand/logo"
import { Shell } from "@/components/landing/section"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface-deep py-10">
      <Shell>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Logo markClassName="size-7" wordmarkClassName="text-lg" />
            <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Infraestrutura em validação para vendas, operação e prestação de contas de eventos
              universitários.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm sm:items-end">
            <Link
              href="/privacidade"
              className="font-medium text-foreground transition-colors hover:text-accent"
            >
              Política de privacidade
            </Link>
            <p className="text-muted-foreground">
              © {year} WebIngressos. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </Shell>
    </footer>
  )
}

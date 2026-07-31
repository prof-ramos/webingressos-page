import Link from "next/link"
import { ArrowRight, Ticket } from "lucide-react"

import { Button } from "@/components/ui/button"

const navigation = [
  { label: "Problemas", href: "/#problemas" },
  { label: "Solução", href: "/#solucao" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Piloto", href: "/#piloto" },
  { label: "FAQ", href: "/#faq" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="container-shell flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5" aria-label="WebIngressos — início">
          <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <Ticket className="size-5" aria-hidden="true" />
          </span>
          <span className="text-lg font-semibold tracking-tight">WebIngressos</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegação principal">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button asChild size="sm">
          <Link href="/#candidatura">
            <span className="hidden sm:inline">Participar do piloto</span>
            <span className="sm:hidden">Piloto</span>
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </header>
  )
}

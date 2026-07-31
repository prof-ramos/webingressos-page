import Link from "next/link"
import { Ticket } from "lucide-react"

import { siteConfig } from "@/lib/site-config"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/45">
      <div className="container-shell flex flex-col gap-7 py-9 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5 font-semibold">
            <span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Ticket className="size-4" aria-hidden="true" />
            </span>
            WebIngressos
          </Link>
          <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
            Infraestrutura em validação para venda e gestão de eventos universitários.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
          <Link href="/privacidade" className="hover:text-foreground">
            Privacidade
          </Link>
          <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-foreground">
            Contato
          </a>
          <span>© {new Date().getFullYear()} WebIngressos</span>
        </div>
      </div>
    </footer>
  )
}

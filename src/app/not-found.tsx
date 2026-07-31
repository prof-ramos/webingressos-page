import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="container-shell grid min-h-svh place-items-center py-20 text-center">
      <div>
        <p className="font-mono text-sm text-primary">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Página não encontrada.</h1>
        <p className="mt-4 text-muted-foreground">
          O endereço pode estar incorreto ou a página pode ter sido removida.
        </p>
        <Button asChild className="mt-7">
          <Link href="/">Voltar ao início</Link>
        </Button>
      </div>
    </main>
  )
}

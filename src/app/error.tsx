"use client"

import { Button } from "@/components/ui/button"

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="container-shell grid min-h-svh place-items-center py-20 text-center">
      <div className="max-w-xl">
        <p className="font-mono text-sm text-destructive">ERRO</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Algo não saiu como esperado.</h1>
        <p className="mt-4 text-muted-foreground">
          Tente carregar novamente. Se o problema persistir, registre o contexto antes de alterar a
          configuração de produção.
        </p>
        <Button className="mt-7" onClick={reset}>
          Tentar novamente
        </Button>
      </div>
    </main>
  )
}

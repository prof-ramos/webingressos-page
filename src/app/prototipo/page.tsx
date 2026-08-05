import type { CSSProperties } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Inter, Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["500", "600"],
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Protótipo dark neon · WebIngressos",
  description: "Direção visual em avaliação. Não é a página pública.",
  robots: { index: false, follow: false },
}

/* Kept local instead of src/lib/constants.ts so the whole prototype is one
   deletable directory. Promote to constants.ts only if the direction ships. */
const SPLIT = [
  { party: "Atlética de Medicina", role: "organizadora", share: "52%" },
  { party: "Atlética de Direito", role: "coorganizadora", share: "28%" },
  { party: "Promoters", role: "12 pessoas", share: "12%" },
  { party: "Custos do evento", role: "estrutura e som", share: "8%" },
] as const

export default function PrototipoPage() {
  return (
    <div
      data-theme="neon"
      className={`${playfair.variable} ${inter.variable} min-h-screen bg-[var(--p-void)] font-[family-name:var(--font-inter)] text-[var(--p-ice)]`}
    >
      <p className="border-b border-[var(--p-slate)] px-6 py-3 text-center text-xs tracking-wide text-[var(--p-ice-dim)]">
        Protótipo de direção visual. A página pública continua em{" "}
        <Link href="/" className="text-[var(--p-ice)] underline underline-offset-4">
          webingressos.com.br
        </Link>
        .
      </p>

      <main className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <p className="text-xs font-semibold tracking-[0.18em] text-[var(--p-neon)] uppercase">
          Para atléticas que dividem receita entre entidades
        </p>

        <h1 className="mt-6 max-w-3xl font-[family-name:var(--font-playfair)] text-[clamp(2rem,6vw,4.25rem)] leading-[1.04] font-medium tracking-[-0.02em] text-balance">
          Quem vendeu, quem recebeu, quem assinou embaixo.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--p-ice-dim)] sm:text-lg">
          O fechamento do evento com nome, papel e assinatura em cada linha. Estamos selecionando os
          primeiros eventos para o piloto.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/#piloto"
            className="inline-flex items-center justify-center rounded-[6px] bg-[var(--p-neon)] px-6 py-3.5 text-sm font-semibold text-[var(--p-void)] transition-[box-shadow,transform] duration-200 hover:-translate-y-px hover:shadow-[0_0_28px_-4px_var(--p-neon)]"
          >
            Quero participar do piloto
          </Link>
          <a
            href="#rateio"
            className="inline-flex items-center justify-center rounded-[6px] border border-[var(--p-slate)] px-6 py-3.5 text-sm font-semibold text-[var(--p-ice)] transition-colors duration-200 hover:border-[var(--p-ice-dim)]"
          >
            Ver o fechamento de exemplo
          </a>
        </div>

        <section id="rateio" aria-labelledby="rateio-titulo" className="mt-16 max-w-2xl sm:mt-24">
          <div className="ticket-counterfoil rounded-t-[6px] pb-5">
            <header className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[var(--p-ice)]/10 px-5 py-4 sm:px-6">
              <h2
                id="rateio-titulo"
                className="font-[family-name:var(--font-playfair)] text-lg font-medium"
              >
                Rateio do evento
              </h2>
              <p className="text-xs tracking-[0.14em] text-[var(--p-gold)] uppercase">
                Exemplo ilustrativo
              </p>
            </header>

            <table className="w-full border-collapse text-sm">
              <caption className="sr-only">
                Divisão de receita do evento entre entidades organizadoras, promoters e custos, em
                percentual. Valores ilustrativos.
              </caption>
              <thead>
                <tr className="text-left text-[var(--p-ice-dim)]">
                  <th scope="col" className="px-5 pt-5 pb-2 text-xs font-medium sm:px-6">
                    Parte
                  </th>
                  <th
                    scope="col"
                    className="px-5 pt-5 pb-2 text-right text-xs font-medium tabular-nums sm:px-6"
                  >
                    Share
                  </th>
                </tr>
              </thead>
              <tbody>
                {SPLIT.map((row, index) => (
                  <tr key={row.party}>
                    <th scope="row" className="px-5 py-3 text-left font-normal sm:px-6">
                      <span className="block">{row.party}</span>
                      <span className="block text-xs text-[var(--p-ice-dim)]">{row.role}</span>
                      <span
                        aria-hidden="true"
                        className="mt-2 block h-px bg-[var(--p-ice)]/45 motion-safe:animate-[ledger-bar_700ms_cubic-bezier(0.22,1,0.36,1)_both]"
                        style={
                          {
                            "--bar-w": row.share,
                            animationDelay: `${240 + index * 110}ms`,
                          } as CSSProperties
                        }
                      />
                    </th>
                    <td className="px-5 py-3 text-right align-top tabular-nums sm:px-6">
                      {row.share}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            aria-hidden="true"
            className="mx-5 border-t-2 border-dashed border-[var(--p-ice)]/20 sm:mx-6"
          />

          <div className="ticket-stub flex flex-wrap items-end justify-between gap-3 rounded-b-[6px] px-5 py-5 motion-safe:animate-[ledger-settle_500ms_ease-out_both] motion-safe:[animation-delay:760ms] sm:px-6">
            <div>
              <p className="text-xs text-[var(--p-ice-dim)]">1.248 ingressos validados</p>
              <p className="mt-1.5 font-mono text-xs tracking-[0.18em] text-[var(--p-ice-dim)]">
                FECH·2026·0412·MED
              </p>
            </div>
            <p className="text-sm font-semibold text-[var(--p-gold)]">3 assinaturas · conferido</p>
          </div>
        </section>

        <p className="mt-6 max-w-2xl text-xs leading-relaxed text-[var(--p-ice-dim)]">
          O rateio mostra a estrutura da divisão, não faturamento. A WebIngressos ainda não tem
          eventos rodando, então não há valores reais a exibir.
        </p>
      </main>
    </div>
  )
}

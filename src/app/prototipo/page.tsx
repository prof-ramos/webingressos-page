import type { Metadata } from "next"
import Link from "next/link"
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google"
import { ArrowDown, ArrowUp } from "lucide-react"

import "./prototipo.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["500", "600"],
})

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-data",
  display: "swap",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Protótipo dark · WebIngressos",
  description: "Direção visual em avaliação. Não é a página pública.",
  robots: { index: false, follow: false },
}

/* Local to the route so the whole prototype is one deletable directory — the
   route's CSS lives beside it for the same reason. Promote to
   src/lib/constants.ts only if the direction ships. */
const RATEIO = [
  { party: "Atlética de Medicina", role: "Organizadora", share: 52, fill: "var(--p-neon)" },
  { party: "Atlética de Direito", role: "Coorganizadora", share: 28, fill: "var(--p-gold)" },
  { party: "Promoters", role: "12 pessoas", share: 12, fill: "color-mix(in oklab, var(--p-ice) 72%, transparent)" }, // prettier-ignore
  { party: "Custos do evento", role: "Estrutura e som", share: 8, fill: "color-mix(in oklab, var(--p-ice) 45%, transparent)" }, // prettier-ignore
] as const

/* Cada linha abaixo é textual em .agents/product-marketing.md §2 "Initial event
   profile". Nada de prazo de resposta aqui: §10 proíbe anunciar SLA. */
const PILOT_PROFILE = [
  { value: "300–2.000", label: "Participantes" },
  { value: "2+", label: "Entidades organizadoras" },
  { value: "5+", label: "Promoters" },
] as const

/* Números de um evento fictício, para mostrar a ferramenta. Só existem dentro
   da seção rotulada "exemplo" — §10 de .agents/product-marketing.md permite
   interface demonstrativa marcada, e proíbe qualquer um destes fora dela. */
const PANEL_PREVIEW = [
  {
    label: "Ingressos vendidos",
    value: "1.248",
    trend: "18%",
    up: true,
    tone: "var(--p-neon)",
    series: [12, 18, 15, 26, 24, 35, 33, 48, 61],
  },
  {
    label: "Repasse a liberar",
    value: "R$ 32.650",
    trend: "12%",
    up: true,
    tone: "var(--p-neon)",
    series: [20, 22, 28, 27, 34, 40, 44, 52, 58],
  },
  {
    /* Tom neutro de propósito: o briefing reserva o dourado a "vitórias e selos
       de prestígio", e pendência não é nenhuma das duas. O Halo mapearia âmbar
       a warning, mas aqui a definição do briefing prevalece. */
    label: "Pendências de conciliação",
    value: "2",
    trend: "3",
    up: false,
    tone: "var(--p-ice-dim)",
    series: [9, 8, 8, 6, 7, 5, 4, 3, 2],
  },
] as const

/* Polyline num viewBox de 32px de altura, como o Stat Tile do Halo especifica.
   preserveAspectRatio="none" estica na horizontal; vectorEffect mantém a
   espessura do traço em 1,5px, na mesma linguagem das hairlines. */
function sparkline(series: readonly number[]) {
  const min = Math.min(...series)
  const span = Math.max(...series) - min || 1
  return series
    .map((v, i) => `${(i / (series.length - 1)) * 100},${28 - ((v - min) / span) * 24}`)
    .join(" ")
}

/* Halo's label-sm: 12px / 500 / 0.08em uppercase. Reserved for eyebrows and
   tile labels; data uses mono-sm, never this. */
const LABEL = "text-xs font-medium tracking-[0.08em] uppercase"
const MUTED_LABEL = `text-[var(--p-ice-dim)] ${LABEL}`
const MONO = "font-[family-name:var(--font-mono-data)]"
/* Halo's secondary button: surface fill, strong border, 10px radius in the
   system — the brief pins 6px, and the brief wins on radius. */
const BUTTON_SECONDARY =
  "inline-flex h-12 items-center justify-center rounded-[6px] border border-[var(--p-line-control)] bg-[var(--p-surface)] px-[18px] text-[0.8125rem] font-semibold transition-colors duration-150 ease-[var(--p-ease)] hover:bg-[var(--p-elevated)]"
const PANEL = "min-w-0 overflow-hidden rounded-[16px] border border-[var(--p-line)] bg-[var(--p-surface)]" // prettier-ignore

export default function PrototipoPage() {
  return (
    <div
      data-theme="neon"
      className={`${playfair.variable} ${inter.variable} ${mono.variable} min-h-screen bg-[var(--p-canvas)] font-[family-name:var(--font-inter)] text-[var(--p-ice)]`}
    >
      <p className="border-b border-[var(--p-line)] px-[clamp(20px,4vw,48px)] py-2.5 text-center text-[0.8125rem] text-[var(--p-ice-dim)]">
        Protótipo de direção visual. A página pública continua em{" "}
        <Link href="/" className="text-[var(--p-ice)] underline underline-offset-4">
          webingressos.com.br
        </Link>
        .
      </p>

      <header className="border-b border-[var(--p-line)]">
        <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-[clamp(20px,4vw,48px)]">
          <span className="text-[0.9375rem] font-semibold tracking-[-0.01em]">
            Web<span className="text-[var(--p-neon)]">Ingressos</span>
          </span>
          <Link href="/#piloto" className={BUTTON_SECONDARY}>
            Quero participar do piloto
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[1200px] px-[clamp(20px,4vw,48px)]">
        <section className="grid items-center gap-10 pt-16 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-20 lg:pb-20">
          <div className="min-w-0">
            <p className={`flex items-center gap-2 ${MUTED_LABEL}`}>
              <span aria-hidden="true" className="size-1.5 rounded-full bg-[var(--p-neon)]" />
              Programa piloto · 2026
            </p>

            <h1 className="mt-6 font-[family-name:var(--font-playfair)] text-[clamp(2.25rem,4.4vw,3.25rem)] leading-[1.06] font-medium tracking-[-0.022em] text-balance">
              Quem vendeu, quem recebeu,{" "}
              <span className="text-[var(--p-neon)]">quem assinou embaixo.</span>
            </h1>

            <p className="mt-6 max-w-xl text-[0.9375rem] leading-[1.55] tracking-[-0.005em] text-[var(--p-ice-dim)]">
              O fechamento do evento com nome, papel e assinatura em cada linha — em vez de seis
              planilhas e um grupo de WhatsApp.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#piloto"
                className="inline-flex h-12 items-center justify-center rounded-[6px] bg-[var(--p-neon)] px-[18px] text-[0.8125rem] font-semibold text-[var(--p-canvas)] transition-[background-color,box-shadow] duration-150 ease-[var(--p-ease)] hover:bg-[var(--p-neon-hover)] hover:shadow-[0_0_20px_-4px_var(--p-neon)] active:bg-[var(--p-neon-pressed)]"
              >
                Quero participar do piloto
              </Link>
              <a href="#rateio" className={BUTTON_SECONDARY}>
                Ver o fechamento
              </a>
            </div>
          </div>

          <section id="rateio" aria-labelledby="rateio-titulo" className={PANEL}>
            <header className="flex items-center justify-between gap-3 border-b border-[var(--p-line)] px-6 py-4">
              <h2
                id="rateio-titulo"
                className="font-[family-name:var(--font-playfair)] text-[1.125rem] font-medium tracking-[-0.01em]"
              >
                Rateio do evento
              </h2>
              <span
                className={`inline-flex h-6 items-center rounded-full bg-[color-mix(in_oklab,var(--p-gold)_14%,transparent)] px-2.5 text-[0.8125rem] font-medium text-[var(--p-gold)] ${MONO}`}
              >
                exemplo
              </span>
            </header>

            <div className="px-6 py-6">
              <div
                aria-hidden="true"
                className="flex h-2 origin-left overflow-hidden rounded-full motion-safe:animate-[split-fill_240ms_var(--p-ease)_both]"
              >
                {RATEIO.map((row) => (
                  <span
                    key={row.party}
                    style={{ width: `${row.share}%`, background: row.fill }}
                    className="block h-full"
                  />
                ))}
              </div>

              <table className="mt-6 w-full">
                <caption className="sr-only">
                  Divisão de receita entre entidades organizadoras, promoters e custos, em
                  percentual. Valores ilustrativos.
                </caption>
                <tbody>
                  {RATEIO.map((row) => (
                    <tr key={row.party} className="border-t border-[var(--p-line)] first:border-0">
                      <th scope="row" className="py-3 text-left font-normal">
                        <span className="flex items-center gap-3">
                          <span
                            aria-hidden="true"
                            style={{ background: row.fill }}
                            className="size-2.5 shrink-0 rounded-full"
                          />
                          <span>
                            <span className="block text-[0.9375rem] leading-tight">
                              {row.party}
                            </span>
                            <span className="block text-[0.8125rem] text-[var(--p-ice-faint)]">
                              {row.role}
                            </span>
                          </span>
                        </span>
                      </th>
                      <td
                        className={`py-3 text-right align-middle text-[0.8125rem] font-medium tabular-nums ${MONO}`}
                      >
                        {row.share}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div
              aria-hidden="true"
              className="mx-6 border-t border-dashed border-[var(--p-line-strong)]"
            />

            <footer className="flex items-end justify-between gap-4 bg-[var(--p-elevated)] px-6 py-5">
              <div className="min-w-0">
                <p className={`text-[0.8125rem] font-medium text-[var(--p-ice-dim)] ${MONO}`}>
                  FECH·2026·0412·MED
                </p>
                <p className="mt-1 text-[0.8125rem] text-[var(--p-ice-faint)]">
                  1.248 ingressos validados
                </p>
              </div>
              <p className="shrink-0 text-right">
                <span className={`block ${MUTED_LABEL}`}>Assinaturas</span>
                <span
                  className={`mt-1.5 block text-[2.5rem] leading-none font-semibold tracking-[-0.02em] text-[var(--p-gold)] ${MONO}`}
                >
                  3
                </span>
              </p>
            </footer>
          </section>
        </section>

        <section aria-labelledby="painel-titulo" className="pb-16 lg:pb-20">
          <div className="flex items-center justify-between gap-3">
            <h2 id="painel-titulo" className={MUTED_LABEL}>
              Prévia do painel
            </h2>
            <span
              className={`inline-flex h-6 items-center rounded-full bg-[color-mix(in_oklab,var(--p-gold)_14%,transparent)] px-2.5 text-[0.8125rem] font-medium text-[var(--p-gold)] ${MONO}`}
            >
              evento fictício
            </span>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PANEL_PREVIEW.map((tile) => (
              <div key={tile.label} className={PANEL}>
                <div aria-hidden="true" className="h-0.5" style={{ background: tile.tone }} />
                <div className="px-5 py-5">
                  <p className={MUTED_LABEL}>{tile.label}</p>

                  <div className="mt-3 flex items-end justify-between gap-3">
                    <p
                      className={`text-[2rem] leading-none font-semibold tracking-[-0.02em] tabular-nums ${MONO}`}
                    >
                      {tile.value}
                    </p>
                    <span
                      className={`inline-flex h-6 shrink-0 items-center gap-1 rounded-full px-2 text-[0.8125rem] font-medium tabular-nums ${MONO}`}
                      style={{
                        color: tile.tone,
                        background: `color-mix(in oklab, ${tile.tone} 14%, transparent)`,
                      }}
                    >
                      {tile.up ? (
                        <ArrowUp aria-hidden="true" className="size-3.5" strokeWidth={1.75} />
                      ) : (
                        <ArrowDown aria-hidden="true" className="size-3.5" strokeWidth={1.75} />
                      )}
                      {tile.up ? "+" : "−"}
                      {tile.trend}
                    </span>
                  </div>

                  <svg
                    aria-hidden="true"
                    viewBox="0 0 100 32"
                    preserveAspectRatio="none"
                    className="mt-4 h-8 w-full"
                  >
                    <polyline
                      points={sparkline(tile.series)}
                      fill="none"
                      stroke={tile.tone}
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="perfil-titulo"
          className="border-t border-[var(--p-line)] pt-8 pb-16 lg:pb-20"
        >
          <h2 id="perfil-titulo" className={MUTED_LABEL}>
            Perfil de evento buscado no piloto
          </h2>

          <dl className="mt-4 flex flex-col gap-x-10 gap-y-3 sm:flex-row sm:flex-wrap">
            {PILOT_PROFILE.map((item) => (
              <div key={item.label} className="flex items-baseline gap-2.5">
                <dt className="text-[0.8125rem] text-[var(--p-ice-faint)]">{item.label}</dt>
                <dd className={`text-[0.9375rem] font-medium tabular-nums ${MONO}`}>
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="border-t border-[var(--p-line)] py-8">
          <p className="max-w-2xl text-[0.8125rem] leading-[1.5] text-[var(--p-ice-faint)]">
            O rateio mostra a estrutura da divisão, não faturamento — a WebIngressos ainda não tem
            eventos rodando, então não há valores reais a exibir. Os itens acima são critérios de
            seleção do piloto, documentados no contexto de produto.
          </p>
        </div>
      </main>
    </div>
  )
}

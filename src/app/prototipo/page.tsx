import type { Metadata } from "next"
import Link from "next/link"
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google"

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
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: "Protótipo dark · WebIngressos",
  description: "Direção visual em avaliação. Não é a página pública.",
  robots: { index: false, follow: false },
}

/* Local to the route so the whole prototype is one deletable directory.
   Promote to src/lib/constants.ts only if the direction ships. */
const SPLIT = [
  { party: "Atlética de Medicina", role: "Organizadora", share: 52, fill: "var(--p-neon)" },
  { party: "Atlética de Direito", role: "Coorganizadora", share: 28, fill: "var(--p-gold)" },
  { party: "Promoters", role: "12 pessoas", share: 12, fill: "color-mix(in oklab, var(--p-ice) 72%, transparent)" }, // prettier-ignore
  { party: "Custos do evento", role: "Estrutura e som", share: 8, fill: "color-mix(in oklab, var(--p-ice) 45%, transparent)" }, // prettier-ignore
] as const

/* Perfil de evento documentado em .agents/product-marketing.md §2. São critérios
   de seleção do piloto, não tração: a plataforma ainda não tem eventos rodando. */
const PILOT_PROFILE = [
  { value: "300–2.000", label: "Participantes" },
  { value: "2+", label: "Entidades organizadoras" },
  { value: "5+", label: "Promoters" },
  { value: "48h", label: "Resposta à candidatura" },
] as const

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2 text-[0.6875rem] font-semibold tracking-[0.16em] text-[var(--p-ice-dim)] uppercase">
      <span aria-hidden="true" className="size-1 rounded-full bg-[var(--p-neon)]" />
      {children}
    </p>
  )
}

export default function PrototipoPage() {
  return (
    <div
      data-theme="neon"
      className={`${playfair.variable} ${inter.variable} ${mono.variable} min-h-screen bg-[var(--p-canvas)] font-[family-name:var(--font-inter)] text-[var(--p-ice)]`}
    >
      <p className="border-b border-[var(--p-line)] px-6 py-2.5 text-center text-xs text-[var(--p-ice-dim)]">
        Protótipo de direção visual. A página pública continua em{" "}
        <Link href="/" className="text-[var(--p-ice)] underline underline-offset-4">
          webingressos.com.br
        </Link>
        .
      </p>

      <header className="border-b border-[var(--p-line)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-sm font-bold tracking-tight">
            Web<span className="text-[var(--p-neon)]">Ingressos</span>
          </span>
          <Link
            href="/#piloto"
            className="rounded-[6px] border border-[var(--p-line)] px-4 py-2 text-xs font-semibold transition-colors duration-200 hover:border-[var(--p-neon)] hover:text-[var(--p-neon)]"
          >
            Quero participar do piloto
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6">
        <section className="grid items-center gap-12 pt-16 pb-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-24 lg:pb-20">
          <div className="min-w-0">
            <Eyebrow>Programa piloto · 2026</Eyebrow>

            <h1 className="mt-5 font-[family-name:var(--font-playfair)] text-[clamp(2rem,4.4vw,3.5rem)] leading-[1.05] font-medium tracking-[-0.02em] text-balance">
              Quem vendeu, quem recebeu,{" "}
              <span className="text-[var(--p-neon)]">quem assinou embaixo.</span>
            </h1>

            <p className="mt-5 max-w-lg leading-relaxed text-[var(--p-ice-dim)]">
              O fechamento do evento com nome, papel e assinatura em cada linha — em vez de seis
              planilhas e um grupo de WhatsApp. Estamos selecionando os primeiros eventos.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#piloto"
                className="inline-flex items-center justify-center rounded-[6px] bg-[var(--p-neon)] px-5 py-3 text-sm font-semibold text-[var(--p-canvas)] transition-[box-shadow,transform] duration-200 hover:-translate-y-px hover:shadow-[0_0_24px_-6px_var(--p-neon)]"
              >
                Quero participar do piloto
              </Link>
              <a
                href="#rateio"
                className="inline-flex items-center justify-center rounded-[6px] border border-[var(--p-line)] px-5 py-3 text-sm font-semibold transition-colors duration-200 hover:border-[var(--p-ice-dim)]"
              >
                Ver o fechamento
              </a>
            </div>
          </div>

          <section
            id="rateio"
            aria-labelledby="rateio-titulo"
            className="min-w-0 overflow-hidden rounded-[10px] border border-[var(--p-line)] bg-[var(--p-surface)]"
          >
            <header className="flex items-baseline justify-between gap-3 border-b border-[var(--p-line)] px-5 py-4">
              <h2
                id="rateio-titulo"
                className="font-[family-name:var(--font-playfair)] text-base font-medium"
              >
                Rateio do evento
              </h2>
              <span className="rounded-full border border-[var(--p-gold)]/40 px-2.5 py-1 text-[0.625rem] font-semibold tracking-[0.12em] text-[var(--p-gold)] uppercase">
                Exemplo
              </span>
            </header>

            <div className="px-5 py-5">
              <div
                aria-hidden="true"
                className="flex h-2 origin-left overflow-hidden rounded-full motion-safe:animate-[split-fill_800ms_cubic-bezier(0.22,1,0.36,1)_both]"
              >
                {SPLIT.map((row) => (
                  <span
                    key={row.party}
                    style={{ width: `${row.share}%`, background: row.fill }}
                    className="block h-full"
                  />
                ))}
              </div>

              <table className="mt-5 w-full text-sm">
                <caption className="sr-only">
                  Divisão de receita entre entidades organizadoras, promoters e custos, em
                  percentual. Valores ilustrativos.
                </caption>
                <tbody>
                  {SPLIT.map((row) => (
                    <tr
                      key={row.party}
                      className="border-t border-[var(--p-line)]/60 first:border-0"
                    >
                      <th scope="row" className="py-2.5 text-left font-normal">
                        <span className="flex items-center gap-2.5">
                          <span
                            aria-hidden="true"
                            style={{ background: row.fill }}
                            className="size-2 shrink-0 rounded-[2px]"
                          />
                          <span>
                            <span className="block leading-tight">{row.party}</span>
                            <span className="block text-xs text-[var(--p-ice-dim)]">
                              {row.role}
                            </span>
                          </span>
                        </span>
                      </th>
                      <td className="py-2.5 text-right align-middle font-[family-name:var(--font-mono-data)] tabular-nums">
                        {row.share}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div
              aria-hidden="true"
              className="mx-5 border-t border-dashed border-[var(--p-line)]"
            />

            <footer className="flex items-end justify-between gap-4 bg-[var(--p-elevated)] px-5 py-4">
              <div>
                <p className="font-[family-name:var(--font-mono-data)] text-xs tracking-[0.1em] text-[var(--p-ice-dim)]">
                  FECH·2026·0412·MED
                </p>
                <p className="mt-1 text-xs text-[var(--p-ice-dim)]">1.248 ingressos validados</p>
              </div>
              <p className="text-right leading-none">
                <span className="font-[family-name:var(--font-mono-data)] text-3xl font-medium text-[var(--p-gold)]">
                  3
                </span>
                <span className="mt-1 block text-[0.625rem] tracking-[0.12em] text-[var(--p-ice-dim)] uppercase">
                  Assinaturas
                </span>
              </p>
            </footer>
          </section>
        </section>

        <section
          aria-label="Perfil de evento buscado no piloto"
          className="grid grid-cols-2 gap-px border-t border-[var(--p-line)] bg-[var(--p-line)] lg:grid-cols-4"
        >
          {PILOT_PROFILE.map((item) => (
            <div key={item.label} className="min-w-0 bg-[var(--p-canvas)] px-5 py-6">
              <p className="font-[family-name:var(--font-mono-data)] text-xl font-medium tabular-nums">
                {item.value}
              </p>
              <p className="mt-1.5 text-[0.6875rem] tracking-[0.1em] text-[var(--p-ice-dim)] uppercase">
                {item.label}
              </p>
            </div>
          ))}
        </section>

        <div className="border-t border-[var(--p-line)] py-8">
          <p className="max-w-2xl text-xs leading-relaxed text-[var(--p-ice-dim)]">
            O rateio mostra a estrutura da divisão, não faturamento — a WebIngressos ainda não tem
            eventos rodando, então não há valores reais a exibir. O perfil acima são critérios de
            seleção do piloto.
          </p>
        </div>
      </main>
    </div>
  )
}

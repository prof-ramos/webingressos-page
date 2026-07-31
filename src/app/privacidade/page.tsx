import type { Metadata } from "next"

import { SiteFooter } from "@/components/landing/site-footer"
import { SiteHeader } from "@/components/landing/site-header"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Informações sobre o tratamento de dados na landing page da WebIngressos.",
  alternates: { canonical: "/privacidade" },
}

const sections = [
  {
    title: "1. Dados coletados",
    content:
      "O formulário pode coletar nome, e-mail, WhatsApp, organização, universidade, cidade, tipo e data estimada do evento, público esperado, plataforma atual e a descrição da principal dificuldade operacional.",
  },
  {
    title: "2. Finalidade",
    content:
      "Os dados são usados para analisar a aderência da candidatura ao programa piloto, entrar em contato com o responsável e conduzir conversas relacionadas à validação da WebIngressos.",
  },
  {
    title: "3. Base e consentimento",
    content:
      "O envio exige manifestação de concordância para as finalidades informadas. O consentimento pode ser revogado pelo canal de contato indicado nesta página, sem afetar tratamentos realizados anteriormente de forma legítima.",
  },
  {
    title: "4. Compartilhamento",
    content:
      "Os dados podem ser processados por provedores estritamente necessários à hospedagem, entrega do formulário, mensuração técnica e organização do relacionamento com os candidatos. Não são vendidos a terceiros.",
  },
  {
    title: "5. Retenção e segurança",
    content:
      "Os dados devem ser mantidos apenas enquanto necessários à seleção e ao relacionamento relativo ao piloto, ressalvadas obrigações legais de conservação. Antes da publicação, documente as medidas técnicas e administrativas efetivamente adotadas.",
  },
  {
    title: "6. Direitos do titular",
    content:
      "Você pode solicitar confirmação do tratamento, acesso, correção, anonimização, bloqueio, eliminação e outras providências cabíveis nos termos da legislação aplicável.",
  },
  {
    title: "7. Cuidados no envio",
    content:
      "O formulário não solicita senhas, documentos, dados financeiros ou dados pessoais sensíveis. Não inclua essas informações no campo aberto.",
  },
]

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="container-shell py-16 sm:py-20">
        <article className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Privacidade
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Política de Privacidade
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Esta política descreve o tratamento de dados realizado pela landing page e pelo
            formulário de candidatura ao programa piloto da WebIngressos.
          </p>
          <div className="mt-6 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm leading-6 text-amber-950">
            Minuta técnica: identifique o controlador, confirme fornecedores, retenção, base legal e
            canal de atendimento antes da publicação definitiva.
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Última atualização: 30 de julho de 2026.
          </p>

          <div className="mt-12 space-y-9">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold">{section.title}</h2>
                <p className="mt-3 leading-7 text-muted-foreground">{section.content}</p>
              </section>
            ))}

            <section>
              <h2 className="text-xl font-semibold">8. Contato</h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                Solicitações relacionadas a dados pessoais podem ser enviadas para{" "}
                <a
                  className="font-medium text-primary underline-offset-4 hover:underline"
                  href={`mailto:${siteConfig.contactEmail}`}
                >
                  {siteConfig.contactEmail}
                </a>
                . Antes da publicação definitiva, confirme a titularidade e a operação desse canal.
              </p>
            </section>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}

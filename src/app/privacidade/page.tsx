import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <main id="main-content" className="px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-ink-500 transition-colors hover:text-brand-700"
        >
          <ArrowLeft className="size-4" />
          Voltar para a página inicial
        </Link>

        <article className="mt-10">
          <h1 className="text-3xl font-extrabold tracking-tight text-ink-800 sm:text-4xl">
            Política de Privacidade
          </h1>
          <p className="mt-3 text-sm text-ink-400">Última atualização: 30 de julho de 2026</p>

          <p className="mt-8 text-base leading-relaxed text-ink-500">
            A sua privacidade é importante para nós. Esta Política de Privacidade descreve como a
            WebIngressos coleta, usa e protege as informações fornecidas por você através do nosso
            formulário de candidatura ao programa piloto.
          </p>

          <h2 className="mt-12 text-xl font-bold text-ink-800">1. Informações coletadas</h2>
          <p className="mt-3 text-base leading-relaxed text-ink-500">
            Ao preencher nosso formulário de contato, podemos coletar os seguintes dados pessoais:
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-6 text-base leading-relaxed text-ink-500">
            <li>Nome completo;</li>
            <li>Endereço de e-mail;</li>
            <li>Número de telefone / WhatsApp;</li>
            <li>Tipo de organização e nome da entidade/evento;</li>
            <li>Público estimado e estado (UF) do evento.</li>
          </ul>

          <h2 className="mt-12 text-xl font-bold text-ink-800">2. Uso das informações</h2>
          <p className="mt-3 text-base leading-relaxed text-ink-500">
            As informações coletadas são utilizadas exclusivamente para os seguintes fins:
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-6 text-base leading-relaxed text-ink-500">
            <li>Entrar em contato com você sobre sua candidatura ao programa piloto;</li>
            <li>Avaliar se o seu evento se encaixa nos critérios do piloto;</li>
            <li>Enviar informações relevantes sobre o uso da plataforma WebIngressos.</li>
          </ul>

          <h2 className="mt-12 text-xl font-bold text-ink-800">3. Compartilhamento de dados</h2>
          <p className="mt-3 text-base leading-relaxed text-ink-500">
            Não compartilhamos suas informações com terceiros, exceto quando exigido por lei, ou
            quando necessário para a prestação de serviços de infraestrutura de tecnologia que nos
            auxiliam na operação (por exemplo, hospedagem de dados), sempre sob acordos de
            confidencialidade rigorosos.
          </p>

          <h2 className="mt-12 text-xl font-bold text-ink-800">4. Segurança dos dados</h2>
          <p className="mt-3 text-base leading-relaxed text-ink-500">
            Empregamos medidas de segurança técnicas e administrativas para proteger suas
            informações contra acesso não autorizado, alteração, divulgação ou destruição. No
            entanto, nenhum método de transmissão pela internet ou de armazenamento eletrônico é
            100% seguro.
          </p>

          <h2 className="mt-12 text-xl font-bold text-ink-800">5. Seus direitos</h2>
          <p className="mt-3 text-base leading-relaxed text-ink-500">
            Você tem o direito de acessar, corrigir ou solicitar a exclusão dos seus dados pessoais
            a qualquer momento, entrando em contato pelo e-mail{" "}
            <a
              href="mailto:contato@webingressos.com.br"
              className="font-semibold text-brand-700 underline underline-offset-2"
            >
              contato@webingressos.com.br
            </a>
            .
          </p>

          <div className="mt-16 border-t border-border pt-8">
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-brand-700 px-6 text-sm font-bold text-white transition-colors hover:bg-brand-800"
            >
              Voltar ao site
            </Link>
          </div>
        </article>
      </div>
    </main>
  )
}

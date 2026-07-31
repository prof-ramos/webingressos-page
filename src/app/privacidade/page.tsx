"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center text-slate-400 hover:text-white mb-12 transition-colors gap-2">
          <ArrowLeft className="w-4 h-4" />
          Voltar para a página inicial
        </Link>

        <article className="prose prose-invert prose-slate max-w-none">
          <h1 className="text-4xl font-extrabold mb-10">Política de Privacidade</h1>
          
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Última atualização: 30 de Julho de 2026
          </p>

          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            A sua privacidade é importante para nós. Esta Política de Privacidade descreve como a WebIngressos coleta, usa e protege as informações fornecidas por você através do nosso formulário de candidatura ao programa piloto.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-white">1. Informações Coletadas</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-4">
            Ao preencher nosso formulário de contato, podemos coletar os seguintes dados pessoais:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>Nome completo;</li>
            <li>Endereço de e-mail;</li>
            <li>Número de telefone / WhatsApp;</li>
            <li>Tipo de organização e nome da entidade/evento;</li>
            <li>Público estimado e localização (Cidade/UF) do evento.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-white">2. Uso das Informações</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-4">
            As informações coletadas são utilizadas exclusivamente para os seguintes fins:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>Entrar em contato com você sobre sua candidatura ao programa piloto;</li>
            <li>Avaliar se o seu evento se encaixa nos critérios do piloto;</li>
            <li>Enviar informações relevantes sobre o uso da plataforma WebIngressos.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-white">3. Compartilhamento de Dados</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Não compartilhamos suas informações com terceiros, exceto quando exigido por lei, ou quando necessário para a prestação de serviços de infraestrutura de tecnologia que nos auxiliam na operação (por exemplo, hospedagem de dados), sempre sob acordos de confidencialidade rigorosos.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-white">4. Segurança dos Dados</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Empregamos medidas de segurança técnicas e administrativas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela internet ou de armazenamento eletrônico é 100% seguro.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-white">5. Seus Direitos</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Você tem o direito de acessar, corrigir ou solicitar a exclusão dos seus dados pessoais a qualquer momento, entrando em contato diretamente conosco pelo e-mail de contato oficial da plataforma.
          </p>

          <div className="mt-16 pt-8 border-t border-slate-800 text-center">
            <Link href="/">
              <Button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl">
                Voltar ao site
              </Button>
            </Link>
          </div>
        </article>
      </div>
    </main>
  )
}

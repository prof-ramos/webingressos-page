import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-lg w-full bg-slate-900 border border-slate-800 rounded-2xl p-10 shadow-xl">
        <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-8" />
        <h1 className="text-4xl font-extrabold mb-6 tracking-tight">
          Candidatura recebida!
        </h1>
        <p className="text-lg text-slate-400 mb-10 leading-relaxed">
          Obrigado por se candidatar ao programa piloto da WebIngressos. Nossa equipe entrará em contato pelo e-mail ou WhatsApp informado em até <strong className="text-white font-semibold">48 horas úteis</strong> para dar início ao seu processo.
        </p>
        <Link href="/">
          <Button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-3 rounded-xl text-lg">
            Voltar para a página inicial
          </Button>
        </Link>
      </div>
    </main>
  )
}

import type { LucideIcon } from "lucide-react"
import {
  Calculator,
  ChartPie,
  Clock,
  DollarSign,
  FileText,
  GraduationCap,
  House,
  IdCard,
  ScanLine,
  ShieldCheck,
  ShoppingCart,
  Ticket,
  Users,
} from "lucide-react"

export const SITE_CONFIG = {
  name: "WebIngressos",
  description:
    "Infraestrutura em validação para vendas, promoters, check-in e prestação de contas de eventos universitários.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://webingressos.com.br",
  pilotFormUrl: "#piloto",
  ctaLabel: "Quero participar do piloto",
} as const

export type FeatureItem = {
  title: string
  description: string
  icon: LucideIcon
}

/** Operational pains currently treated as hypotheses to validate with organizers. */
export const PROBLEMS: readonly FeatureItem[] = [
  {
    icon: ShoppingCart,
    title: "Pix e comprovante no WhatsApp",
    description: "A venda começa rápida, mas a conferência vira outra operação.",
  },
  {
    icon: Calculator,
    title: "Comissão calculada à mão",
    description: "Cada responsável mantém uma conta diferente do mesmo evento.",
  },
  {
    icon: ChartPie,
    title: "Divisão sem uma fonte comum",
    description: "Receitas, despesas e repasses chegam de lugares diferentes.",
  },
  {
    icon: FileText,
    title: "Histórico perdido na troca de gestão",
    description: "A próxima diretoria recomeça sem o contexto do evento anterior.",
  },
  {
    icon: ScanLine,
    title: "Portaria com listas desencontradas",
    description: "A equipe decide exceções sem enxergar o mesmo registro da venda.",
  },
  {
    icon: Clock,
    title: "Fechamento que ocupa dias",
    description: "O trabalho continua depois da festa para descobrir o que fechou.",
  },
]

/** Product flows proposed for validation in the pilot. */
export const PILLARS: readonly FeatureItem[] = [
  {
    icon: ShoppingCart,
    title: "Venda ligada à operação",
    description: "Lotes, cupons e cortesias acompanhados sem abrir uma planilha paralela.",
  },
  {
    icon: Users,
    title: "Comissão por responsável",
    description: "Cada venda ligada a quem vendeu, com a comissão saindo do próprio registro.",
  },
  {
    icon: IdCard,
    title: "Check-in com registro",
    description: "Validação do ingresso no portão, com registro de uso e caminho para imprevistos.",
  },
  {
    icon: DollarSign,
    title: "Fechamento auditável",
    description:
      "Receitas, despesas, estornos e divisões consolidados e disponíveis na próxima gestão.",
  },
]

/** Section "Feito para quem faz o evento acontecer." */
export const AUDIENCE: readonly { label: string; icon: LucideIcon }[] = [
  { icon: ShieldCheck, label: "Atléticas" },
  { icon: House, label: "Repúblicas" },
  { icon: GraduationCap, label: "Centros acadêmicos" },
  { icon: Ticket, label: "Produtores universitários" },
]

/** Checklist inside the "Programa Piloto" band. */
export const PILOT_BENEFITS: readonly string[] = [
  "Acompanhamento próximo",
  "Configuração assistida",
  "Convite para coproduzir melhorias novas",
  "Grupo reduzido de eventos por rodada",
]

export const FAQS: readonly { question: string; answer: string }[] = [
  {
    question: "Em que fase está a WebIngressos?",
    answer:
      "Ainda não apresentamos a WebIngressos como produto concluído. Estamos selecionando eventos para validar os fluxos do piloto antes de qualquer abertura geral.",
  },
  {
    question: "Quem pode participar do piloto?",
    answer:
      "Atléticas, repúblicas, centros acadêmicos e produtores universitários com evento previsto para os próximos meses. Damos prioridade a quem já vende ingressos hoje e quer organizar a operação e a prestação de contas.",
  },
  {
    question: "O formulário já garante vaga?",
    answer:
      "Não. O formulário é uma candidatura. Analisamos cada evento e retornamos em até 48 horas úteis para conversar sobre data, público e formato antes de confirmar a vaga.",
  },
  {
    question: "Vocês atendem fora de Brasília?",
    answer:
      "Brasília é a região preferencial desta fase. Eventos de outras cidades podem se candidatar e serão avaliados caso a caso, conforme o formato e a capacidade de acompanhamento do piloto.",
  },
]

/** Fictional figures rendered in the hero product preview. Decorative only. */
export const DASHBOARD_DATA = {
  period: "Este ano",
  revenue: {
    label: "Faturamento",
    value: "R$ 45.870,00",
    delta: "+21,4%",
    deltaSuffix: "vs mês anterior",
    series: [18, 22, 20, 27, 24, 33, 31, 44, 52],
  },
  events: {
    label: "Eventos",
    value: "68",
    caption: "8 ativos",
  },
  checkins: {
    label: "Check-ins",
    value: "1.248",
    caption: "Entradas",
    highlight: "98%",
    highlightSuffix: "válidos",
    progress: 98,
  },
  settlement: {
    label: "Liquidação",
    value: "R$ 32.650,00",
    caption: "A receber",
    highlight: "2",
    highlightSuffix: "pendências",
  },
  salesPerDay: {
    label: "Vendas por dia",
    max: 1000,
    ticks: [0, 500, 1000],
    tickLabels: ["0", "500", "1k"],
    days: [
      { short: "Seg", initial: "S", value: 430 },
      { short: "Ter", initial: "T", value: 470 },
      { short: "Qua", initial: "Q", value: 660 },
      { short: "Qui", initial: "Q", value: 720 },
      { short: "Sex", initial: "S", value: 860 },
      { short: "Sáb", initial: "S", value: 500 },
      { short: "Dom", initial: "D", value: 300 },
    ],
  },
  channels: {
    label: "Canais de venda",
    items: [
      { name: "Site/Link", percent: 58 },
      { name: "Instagram", percent: 26 },
      { name: "WhatsApp", percent: 10 },
      { name: "Outros", percent: 6 },
    ],
  },
} as const

export const NAV_LINKS = [
  { label: "O problema", href: "#problemas" },
  { label: "A proposta", href: "#pilares" },
  { label: "Como funciona", href: "#operacao" },
  { label: "Programa piloto", href: "#programa-piloto" },
  { label: "Dúvidas", href: "#faq" },
] as const

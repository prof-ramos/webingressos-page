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
  Share2,
  ShieldCheck,
  ShoppingCart,
  Ticket,
  Users,
} from "lucide-react"

export const SITE_CONFIG = {
  name: "WebIngressos",
  description:
    "Plataforma de gestão de vendas, promoters, check-in e prestação de contas para atléticas e produtores universitários.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://webingressos.com.br",
  pilotFormUrl: "#piloto",
  ctaLabel: "Quero participar do piloto",
} as const

export type FeatureItem = {
  title: string
  description: string
  icon: LucideIcon
}

/** Section "Organizar o evento não deveria depender de planilhas e mensagens soltas." */
export const PROBLEMS: readonly FeatureItem[] = [
  {
    icon: Calculator,
    title: "Comissões calculadas manualmente",
    description: "Erros, retrabalho e conflitos na hora de fechar contas.",
  },
  {
    icon: ChartPie,
    title: "Divisão de receitas confusa",
    description: "Falta de clareza na divisão entre equipe e núcleo.",
  },
  {
    icon: Clock,
    title: "Fechamento financeiro demorado",
    description: "Horas reunindo dados para fechar contas.",
  },
  {
    icon: FileText,
    title: "Históricos se perdem a cada gestão",
    description: "Informações dispersas e difíceis de recuperar.",
  },
  {
    icon: ScanLine,
    title: "Check-in com fila",
    description: "Entradas lentas e sem validação clara de público.",
  },
  {
    icon: Share2,
    title: "Vendas espalhadas em vários lugares",
    description: "Discord, Excel e links avulsos não se conversam.",
  },
]

/** Section "Uma plataforma feita para a realidade universitária." */
export const PILLARS: readonly FeatureItem[] = [
  {
    icon: ShoppingCart,
    title: "Vendas",
    description:
      "Centralize canais, itens, combos e acompanhe tudo em tempo real.",
  },
  {
    icon: Users,
    title: "Promoters",
    description: "Cadastre, ative e acompanhe vendas, comissões e metas.",
  },
  {
    icon: IdCard,
    title: "Operação",
    description: "Check-in rápido, controle de acesso e listas seguras.",
  },
  {
    icon: DollarSign,
    title: "Financeiro",
    description:
      "Relatórios automáticos, divisões de comissões e conciliações simples.",
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
  "Vagas limitadas",
]

export const FAQS: readonly { question: string; answer: string }[] = [
  {
    question: "A WebIngressos já está operando?",
    answer:
      "Sim, em fase de piloto. A plataforma já roda vendas, promoters, check-in por QR Code e relatórios financeiros, e estamos operando com um grupo reduzido de eventos parceiros antes da abertura geral.",
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
      "Sim. O piloto começou em Brasília, mas a plataforma é 100% online e atendemos eventos de qualquer cidade. O acompanhamento é remoto, com suporte dedicado durante a operação.",
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
  { label: "Programa piloto", href: "#programa-piloto" },
  { label: "Dúvidas", href: "#faq" },
] as const

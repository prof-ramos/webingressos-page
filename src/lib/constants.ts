export const SITE_CONFIG = {
  name: "WebIngressos",
  description: "Plataforma de gestão de vendas, promoters, check-in e prestação de contas para atléticas e produtores universitários.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://webingressos.com.br",
  pilotFormUrl: "#piloto",
}

export const TARGET_AUDIENCE = [
  "Atléticas Universitárias",
  "Repúblicas & Centros Acadêmicos",
  "Produtores de Festas & Festivais",
  "Casas Noturnas & Espaços de Eventos",
]

export const PROBLEMS = [
  {
    title: "Vendas espalhadas sem controle",
    description: "Promoters vendendo por chave PIX pessoal, planilhas desatualizadas e falta de visão clara da receita em tempo real.",
  },
  {
    title: "Fila e confusão na portaria",
    description: "Check-in lento com listas impressas, ingressos duplicados e falta de validação rápida no celular.",
  },
  {
    title: "Prestação de contas caótica",
    description: "Dificuldade para calcular comissões de promoters, dividir lucros entre sócios e justificar custos no final da festa.",
  },
]

export const PILARS = [
  {
    title: "Vendas em Tempo Real",
    description: "Acompanhe a evolução dos lotes, cupons de desconto e faturamento direto pelo celular.",
    icon: "TrendingUp",
  },
  {
    title: "Gestão de Promoters",
    description: "Links e códigos exclusivos por promoter. Saiba exatamente quem vendeu quanto e automatize o cálculo de comissões.",
    icon: "Users",
  },
  {
    title: "Check-in Ágil",
    description: "Validação de ingressos via QR Code na portaria, sem depender de internet instável ou listas de papel.",
    icon: "QrCode",
  },
  {
    title: "Governança & Financeiro",
    description: "Relatórios claros de receita, despesas e prestação de contas simplificada para a diretoria ou sócios.",
    icon: "ShieldCheck",
  },
]

export const FAQS = [
  {
    question: "Como funciona o Programa Piloto?",
    answer: "Selecionamos eventos universitários parceiros para utilizar a plataforma durante a fase inicial, com acompanhamento direto da nossa equipe na operação e condições exclusivas de taxa.",
  },
  {
    question: "A WebIngressos serve para qualquer tamanho de evento?",
    answer: "Nosso foco inicial é em eventos de 100 a 5.000 pessoas organizados por atléticas, repúblicas e produtores independentes.",
  },
  {
    question: "Como os promoters vendem e recebem comissão?",
    answer: "Cada promoter recebe um link próprio ou código. As vendas são atribuídas automaticamente no painel e o relatório de comissões é gerado ao fim das vendas.",
  },
  {
    question: "O check-in funciona se o sinal de internet cair no local?",
    answer: "Sim. O sistema de validação possui modo com sincronização local para garantir leitura contínua de QR Codes na entrada do evento.",
  },
]

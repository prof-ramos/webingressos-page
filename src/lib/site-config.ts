const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://webingressos.com.br"

export const siteConfig = {
  name: "WebIngressos",
  shortName: "WebIngressos",
  url: rawUrl.replace(/\/$/, ""),
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contato@webingressos.com.br",
  title: "WebIngressos — programa piloto para eventos universitários",
  description:
    "Programa piloto para centralizar vendas, promoters, check-in e prestação de contas em eventos universitários.",
} as const

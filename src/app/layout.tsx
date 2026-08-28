import type { Metadata, Viewport } from "next"
import { Anton, Archivo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"
import { SITE_CONFIG } from "@/lib/constants"

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
})

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: "WebIngressos | Venda ingressos sem perder o controle do evento",
  description:
    "Infraestrutura em validação para vendas, promoters, check-in e prestação de contas de eventos universitários.",
  alternates: { canonical: SITE_CONFIG.url },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "WebIngressos | Venda ingressos sem perder o controle do evento",
    description:
      "Infraestrutura em validação para vendas, promoters, check-in e prestação de contas de eventos universitários.",
  },
  twitter: { card: "summary_large_image" },
}

export const viewport: Viewport = {
  themeColor: "#0a0611",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`dark ${anton.variable} ${archivo.variable} scroll-smooth`}>
      <body className="bg-background font-sans text-foreground antialiased">
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-100 focus-visible:rounded-lg focus-visible:bg-accent focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-bold focus-visible:text-accent-foreground focus-visible:outline-none"
        >
          Pular para o conteúdo
        </a>
        {children}
        <Toaster richColors position="top-center" />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}

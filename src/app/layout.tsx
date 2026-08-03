import type { Metadata, Viewport } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"
import { SITE_CONFIG } from "@/lib/constants"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: "WebIngressos | Gestão de Ingressos para Eventos Universitários",
  description:
    "Centralize vendas, promoters, check-in e prestação de contas para atléticas, repúblicas e produtores universitários.",
  alternates: { canonical: SITE_CONFIG.url },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "WebIngressos | Gestão de Ingressos para Eventos Universitários",
    description:
      "Centralize vendas, promoters, check-in e prestação de contas para atléticas, repúblicas e produtores universitários.",
  },
  twitter: { card: "summary_large_image" },
}

export const viewport: Viewport = {
  themeColor: "#0e6340",
  colorScheme: "light",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} scroll-smooth`}>
      <body className="bg-background text-foreground antialiased">
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-100 focus-visible:rounded-xl focus-visible:bg-brand-700 focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-bold focus-visible:text-white focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
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

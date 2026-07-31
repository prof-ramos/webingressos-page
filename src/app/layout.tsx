import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WebIngressos | Gestão de Ingressos para Eventos Universitários",
  description:
    "Centralize vendas, promoters, check-in e prestação de contas para atléticas, repúblicas e produtores universitários.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.className} bg-slate-950 text-slate-100 antialiased`}
      >
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}

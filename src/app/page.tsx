import type { Metadata } from "next"

import { Faq } from "@/components/landing/faq"
import { Hero } from "@/components/landing/hero"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Pains } from "@/components/landing/pains"
import { Pillars } from "@/components/landing/pillars"
import { PilotForm } from "@/components/landing/pilot-form"
import { PilotProgram } from "@/components/landing/pilot-program"
import { SiteFooter } from "@/components/landing/site-footer"
import { SiteHeader } from "@/components/landing/site-header"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Pains />
        <Pillars />
        <HowItWorks />
        <PilotProgram />
        <Faq />
        <PilotForm />
      </main>
      <SiteFooter />
    </>
  )
}

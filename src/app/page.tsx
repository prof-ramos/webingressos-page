import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Problems } from "@/components/landing/problems"
import { Pillars } from "@/components/landing/pillars"
import { TargetAudience } from "@/components/landing/target-audience"
import { PilotBand } from "@/components/landing/pilot-band"
import { Faq } from "@/components/landing/faq"
import { FinalCta } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"
import { OperationalFlow } from "@/components/landing/operational-flow"
import { PilotFormLazy } from "@/components/landing/pilot-form-lazy"
import { Section } from "@/components/landing/section"

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Problems />
        <Pillars />
        <OperationalFlow />
        <TargetAudience />
        <PilotBand />

        <Section id="piloto" className="py-8 sm:py-10">
          <PilotFormLazy />
        </Section>

        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}

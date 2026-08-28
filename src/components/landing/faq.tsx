"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Section } from "@/components/landing/section"
import { FAQS } from "@/lib/constants"

export function Faq() {
  return (
    <Section id="faq">
      <h2 className="mb-7 font-display text-4xl tracking-tight text-foreground uppercase sm:text-5xl">
        Perguntas diretas
      </h2>

      <Accordion className="w-full gap-2.5">
        {FAQS.map((faq, index) => (
          <AccordionItem
            key={faq.question}
            value={`faq-${index}`}
            className="rounded-card border border-border bg-surface px-5 not-last:border-b sm:px-6"
          >
            <AccordionTrigger className="py-4 text-left text-sm font-semibold text-foreground hover:no-underline sm:text-base **:data-[slot=accordion-trigger-icon]:text-accent">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  )
}

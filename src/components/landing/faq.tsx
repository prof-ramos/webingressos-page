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
    <Section id="faq" className="py-10 sm:py-12 lg:py-14">
      <h2 className="mb-5 text-lg font-extrabold tracking-tight text-ink-900 sm:text-xl">
        Dúvidas frequentes
      </h2>

      <Accordion className="w-full gap-2.5">
        {FAQS.map((faq, index) => (
          <AccordionItem
            key={faq.question}
            value={`faq-${index}`}
            className="rounded-card border border-border bg-white px-5 not-last:border-b sm:px-6"
          >
            <AccordionTrigger className="py-4 text-left text-sm font-semibold text-ink-800 hover:no-underline sm:text-base **:data-[slot=accordion-trigger-icon]:text-brand-700">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-sm leading-relaxed text-ink-500">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  )
}

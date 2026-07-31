import { Section, SectionHeading } from "@/components/landing/section"
import { PROBLEMS } from "@/lib/constants"

export function Problems() {
  return (
    <Section id="problemas">
      <SectionHeading title="Organizar o evento não deveria depender de planilhas e mensagens soltas." />

      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6 lg:gap-4">
        {PROBLEMS.map((problem) => (
          <li
            key={problem.title}
            className="flex flex-col items-center rounded-card border border-border bg-white p-4 text-center transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card lg:p-5"
          >
            <problem.icon
              className="size-7 text-brand-600"
              strokeWidth={1.6}
              aria-hidden="true"
            />
            <h3 className="mt-4 text-sm font-bold text-balance text-ink-900">
              {problem.title}
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-balance text-ink-500">
              {problem.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

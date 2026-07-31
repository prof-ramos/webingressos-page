# WebIngressos Agent Context

## Repositório
`prof-ramos/webingressos-page` — Landing page de captação de organizadores de eventos para o piloto da WebIngressos.

## Regras de Projeto
- Foco exclusivo no produtor/organizador de eventos.
- Design mobile-first, limpo e confiável.
- Código limpo sem abstrações desnecessárias.

## Design System
- Tema **light apenas**. `globals.css` define a paleta em `:root` e a expõe via
  `@theme inline`: escala `brand-50..900` (verde institucional `brand-700 = #0e6340`),
  escala `ink-*` e os tokens semânticos do shadcn (`--primary`, `--border`, …).
- **Não usar cores cruas do Tailwind** (`slate-*`, `emerald-*`) nos componentes —
  sempre os tokens (`bg-brand-700`, `text-ink-500`, `border-border`).
- Os primitivos em `src/components/ui/` são shadcn **base-nova sobre `@base-ui/react`**
  e leem variáveis *sem prefixo* (`var(--secondary)`, `var(--popover)`), por isso a
  camada `:root` + `@theme inline` é obrigatória.
- Eles também trazem variantes `dark:`; o `@custom-variant dark` no topo do
  `globals.css` as neutraliza. Não remover.
- Controles são dimensionados para dashboard (`h-8`). Em formulários de marketing
  use `h-12`, e no `SelectTrigger` o override precisa do mesmo prefixo:
  `data-[size=default]:h-12`.
- Seções da landing são Server Components. Só `header`, `pilot-form` e `faq`
  são `"use client"`.

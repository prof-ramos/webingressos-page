@AGENTS.md

O arquivo importado acima é a fonte única de posicionamento, regras de copy,
design system e contrato do formulário. O que segue cobre o que ele não trata.

## Comandos

```bash
pnpm dev        # servidor de desenvolvimento
pnpm check      # gate obrigatório: format:check + lint + typecheck + build
pnpm format     # corrige formatação (Prettier)
pnpm lint:fix   # corrige lint (ESLint)
```

Gerenciador fixado em `pnpm@11.18.0`. Não usar npm nem yarn: o lockfile é
`pnpm-lock.yaml` e a CI instala com `--frozen-lockfile`.

**Não existe suíte de testes.** Não há script `test`; `pnpm check` é o gate
completo. Criar testes é item P2 do `TODO.md` — não prometer nem invocar
`pnpm test`.

## Arquitetura

- `src/app/` — App Router. `page.tsx` monta a landing; rotas `obrigado/`,
  `privacidade/` e `api/subscribe/`; metadados em `layout.tsx`, `sitemap.ts`,
  `robots.ts`, `manifest.ts` e `opengraph-image.tsx`.
- `src/components/landing/` — uma seção por arquivo. Server Components, exceto
  `header`, `faq`, `pilot-form` e `pilot-form-lazy`.
- `src/components/ui/` — primitivos shadcn (base-nova sobre `@base-ui/react`).
- `src/lib/` — `constants.ts`, `schemas.ts` (Zod), `form-options.ts`, `utils.ts`.
- Alias: `@/*` → `./src/*`.

**Toda a copy da landing vive em `src/lib/constants.ts`**, não nos componentes.
Alterar texto significa editar constants, não JSX.

## Ambiente

`.env.example` documenta as duas variáveis: `NEXT_PUBLIC_SITE_URL` (pública, sem
barra final) e `BLOB_READ_WRITE_TOKEN` (server-only, persistência das
candidaturas).

## Gotchas

- **Copy tem contexto obrigatório.** Antes de mexer em texto, ler
  `.agents/product-marketing.md`: a seção 6 afirma que vender ingresso, PIX, QR
  Code e cadastrar promoter são requisitos mínimos de mercado e **não** o
  diferencial; a seção 8 fixa o rótulo de superfície de cada pilar; a seção 10
  proíbe sugerir funcionalidade, cliente ou métrica que não existe. Mudança
  substantiva exige atualizar o changelog daquele documento.
- **Prettier reprova string longa.** Descrições acima de ~90 caracteres em
  `constants.ts` quebram `format:check`. Rodar `pnpm format` antes de
  `pnpm check`.
- **`typescript-eslint` não suporta TypeScript 7.** Bumps agrupados do
  Dependabot podem trazer `typescript@7.x`, que quebra `pnpm lint` e o build na
  Vercel. Conferir `gh pr checks <n>` antes de mergear bump que toque
  `typescript` ou `eslint`.
- **As métricas do hero são fictícias.** `DASHBOARD_DATA` em `constants.ts` usa
  valores inventados (`R$ 45.870,00`), registrados como bloqueador P0 no
  `TODO.md` e como tensão declarada no `AGENTS.md`.
- **Não há `CONTRIBUTING.md` nem issue tracker.** Para `/code-review`, usar
  `AGENTS.md` como única fonte de padrões; o eixo Spec normalmente não terá
  PRD/issue, salvo indicação explícita do usuário.

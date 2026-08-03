# AGENTS.md — WebIngressos Page

## Objetivo do repositório

Este repositório contém exclusivamente a landing page de validação comercial da WebIngressos.

- Site público: `webingressos.com.br`.
- Produto operacional futuro: repositório separado, preferencialmente em `app.webingressos.com.br`.
- A landing não deve acumular autenticação, checkout, pagamentos, emissão de ingressos ou backoffice.

## Contexto obrigatório

Antes de alterar posicionamento, copy, público ou CTA:

1. leia `.agents/product-marketing.md`;
2. preserve a distinção entre **recurso existente**, **recurso em validação** e **hipótese futura**;
3. use as skills versionadas em `.agents/skills/product-marketing/` e `.agents/skills/copywriting/`;
4. atualize o contexto do produto e o changelog quando houver mudança substantiva.

Para atualizar as skills a partir do repositório oficial:

```bash
pnpm skills:update
```

## Posicionamento atual

A WebIngressos é apresentada como infraestrutura em validação para venda, operação e prestação de contas de eventos universitários.

Público inicial:

- atléticas;
- repúblicas;
- centros acadêmicos e diretórios estudantis;
- produtores de eventos universitários.

CTA principal:

> Quero participar do piloto

## Regras de copy

- Escreva em português-BR.
- Priorize clareza, especificidade e linguagem do organizador.
- Use uma mensagem central e uma ação principal por página.
- Não invente clientes, números, depoimentos, integrações, disponibilidade ou resultados.
- Não trate hipóteses como gaps confirmados.
- Não apresente o produto como pronto.
- Evite competir apenas por preço ou taxa.
- Evite jargão sem consequência concreta.
- Prefira benefício operacional verificável a listas extensas de funcionalidades.

> O mockup de dashboard no hero (`dashboard-preview.tsx`) é ilustrativo e
> marcado `aria-hidden`, mas é visualmente visível e mostra métricas
> fictícias (faturamento, eventos ativos). Isso está em tensão com a regra
> acima — avaliar antes do lançamento se o rótulo precisa deixar isso mais
> explícito ou se os números devem ficar mais genéricos.

## Regras técnicas

- Next.js com App Router e TypeScript estrito.
- Design mobile-first.
- Tailwind CSS e componentes no padrão shadcn/ui mantidos no repositório.
- Priorize Server Components; use `"use client"` somente quando houver estado, efeitos ou APIs do navegador.
- Não adicione dependências sem necessidade demonstrável.
- Preserve acessibilidade, responsividade e navegação por teclado.
- Valide entrada no servidor, mesmo quando houver validação no cliente.
- Não registre PII em logs.
- Nunca versione segredos ou arquivos `.env` reais.
- Consulte Context7 ou documentação oficial atual antes de usar APIs suscetíveis a mudança.

## Qualidade obrigatória

Antes de concluir uma alteração:

```bash
pnpm check
```

Também verifique:

- viewport móvel e desktop;
- estados de foco;
- contraste;
- envio, repetição e falha do formulário;
- ausência de links quebrados;
- ausência de promessas não comprovadas;
- nenhuma regressão em metadados, sitemap e robots.

## Formulário

O endpoint `POST /api/subscribe`:

- valida o corpo com o schema de `src/lib/schemas.ts` (Zod);
- na falha de validação, responde `400` com os erros por campo;
- no sucesso, persiste o lead de forma privada no Vercel Blob usando um pathname
  determinístico por `submissionId`, preservando consentimento, data e origem;
- reenvios do mesmo `submissionId` são idempotentes e não criam outro registro;
- não registra PII em logs; o armazenamento durável depende de
  `BLOB_READ_WRITE_TOKEN` configurado no ambiente de produção;
- limites de payload e proteção contra abuso devem acompanhar o tráfego do piloto;
  para volume elevado, adicionar rate limiting distribuído antes da abertura geral.

## Compatibilidade

Preserve compatibilidade retroativa com:

- estrutura pública de URLs;
- nomes das variáveis de ambiente;
- aliases `@/*`;
- fluxo principal `/#piloto`.

## Design System

- Tema **light apenas**. `globals.css` define a paleta em `:root` e a expõe via
  `@theme inline`: escala `brand-50..900` (verde institucional `brand-700 = #0e6340`),
  escala `ink-*` e os tokens semânticos do shadcn (`--primary`, `--border`, …).
- **Não usar cores cruas do Tailwind** (`slate-*`, `emerald-*`) nos componentes —
  sempre os tokens (`bg-brand-700`, `text-ink-500`, `border-border`).
- Os primitivos em `src/components/ui/` são shadcn **base-nova sobre `@base-ui/react`**
  e leem variáveis _sem prefixo_ (`var(--secondary)`, `var(--popover)`), por isso a
  camada `:root` + `@theme inline` é obrigatória.
- Eles também trazem variantes `dark:`; o `@custom-variant dark` no topo do
  `globals.css` as neutraliza. Não remover.
- Controles são dimensionados para dashboard (`h-8`). Em formulários de marketing
  use `h-12`, e no `SelectTrigger` o override precisa do mesmo prefixo:
  `data-[size=default]:h-12`.
- Seções da landing são Server Components. Só `header`, `pilot-form` e `faq`
  são `"use client"`.

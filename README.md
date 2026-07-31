# WebIngressos Page

Landing page de validação comercial da **WebIngressos**, destinada à captação de organizadores de eventos universitários para o programa piloto.

## Escopo

Este repositório contém apenas o site público de marketing:

- `webingressos.com.br`: landing page;
- `app.webingressos.com.br`: futura plataforma operacional, em outro repositório.

Não devem ser adicionados aqui checkout, autenticação, pagamentos, emissão de ingressos ou backoffice do produto.

## Stack

- Next.js 16 com App Router;
- React 19;
- TypeScript estrito;
- Tailwind CSS 4;
- componentes no padrão shadcn/ui (`base-nova`, sobre `@base-ui/react`), mantidos no código;
- React Hook Form + Zod para o formulário e validação server-side;
- Route Handler para persistência inicial das candidaturas;
- Vercel Analytics e Speed Insights;
- Vercel como destino de deploy;
- pnpm 11, com scripts de dependências bloqueados por padrão e permissões explícitas em `pnpm-workspace.yaml`.

## Requisitos

- Node.js 22 ou superior; Node.js 24 recomendado;
- Corepack atualizado e habilitado.

## Instalação

```bash
npm install --global corepack@latest
corepack enable pnpm
pnpm install
cp .env.example .env.local
pnpm dev
```

Acesse `http://localhost:3000`. Após a primeira instalação, versione o `pnpm-lock.yaml` gerado. A CI usa `--frozen-lockfile` automaticamente quando o arquivo existe; antes da publicação, remova o fallback sem lockfile.

## Variáveis de ambiente

| Variável               | Obrigatória em produção | Finalidade                    |
| ---------------------- | ----------------------: | ----------------------------- |
| `NEXT_PUBLIC_SITE_URL` |                     Sim | URL canônica, sem barra final |

## Comandos

```bash
pnpm dev             # servidor local
pnpm format:check    # verifica formatação
pnpm lint            # ESLint
pnpm typecheck       # TypeScript
pnpm build           # build de produção
pnpm check           # executa todas as validações acima
pnpm skills:update   # atualiza as skills de marketing versionadas
```

## Estrutura principal

```text
.agents/
  product-marketing.md   contexto de produto e posicionamento
  skills/                product-marketing, copywriting e referências
.github/
  workflows/ci.yml       validação de pull requests e da branch main
src/
  app/
    api/subscribe/route.ts   validação e persistência da candidatura
    obrigado/                 confirmação de candidatura
    privacidade/               política inicial
  components/
    landing/               seções da landing
    ui/                    componentes no padrão shadcn/ui (base-nova)
    brand/                 marca (logo)
    illustrations/         ilustrações line-art
  lib/
    schemas.ts            contrato de entrada (Zod)
    form-options.ts       opções do formulário (tipo de evento, UF etc.)
    constants.ts          conteúdo das seções e config do site
```

## Deploy na Vercel

1. importe `prof-ramos/webingressos-page` na Vercel;
2. mantenha o preset Next.js detectado automaticamente;
3. configure `NEXT_PUBLIC_SITE_URL`;
4. valide o Preview Deployment e o fluxo completo do formulário;
5. vincule `webingressos.com.br` somente após confirmar a persistência dos leads (ver aviso abaixo);
6. revise a Política de Privacidade antes da publicação definitiva.

Não é necessário `vercel.json` para este boilerplate.

## Copy e agentes

Antes de alterar texto ou posicionamento:

1. leia `.agents/product-marketing.md`;
2. aplique as skills `product-marketing` e `copywriting` em `.agents/skills/`;
3. preserve o CTA principal e o status de produto em validação;
4. não invente métricas, clientes, depoimentos, integrações ou funcionalidades.

As regras completas estão em `AGENTS.md`.

## Segurança e produção

O boilerplate inclui headers de segurança (`next.config.ts`) e validação server-side com Zod. Ainda são necessários antes de lançamento público:

- **persistência durável dos leads** — o endpoint `POST /api/subscribe` grava candidaturas em `/tmp`, que é efêmero na Vercel; os dados são perdidos entre invocações e precisam migrar para um banco, KV ou webhook antes de tráfego real;
- rate limiting e proteção antispam (não há honeypot nem limite de taxa hoje);
- monitoramento de erros;
- política de retenção de leads;
- revisão jurídica da política de privacidade;
- teste completo em Preview e Production.

## Licença

Código proprietário (`UNLICENSED`). As skills de terceiros permanecem sob a licença indicada em `.agents/skills/THIRD_PARTY_LICENSES.md`.

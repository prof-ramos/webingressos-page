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
- Route Handler + Vercel Blob privado para persistência das candidaturas;
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

Acesse `http://localhost:3000`. O `pnpm-lock.yaml` é versionado e a CI usa `--frozen-lockfile`.

## Variáveis de ambiente

| Variável                | Obrigatória em produção | Finalidade                       |
| ----------------------- | ----------------------: | -------------------------------- |
| `NEXT_PUBLIC_SITE_URL`  |                     Sim | URL canônica, sem barra final    |
| `BLOB_READ_WRITE_TOKEN` |                     Sim | Token server-only do Vercel Blob |

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
3. configure `NEXT_PUBLIC_SITE_URL` e `BLOB_READ_WRITE_TOKEN`;
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

O boilerplate inclui headers de segurança (`next.config.ts`) e validação server-side com Zod. O endpoint `POST /api/subscribe` grava cada candidatura como JSON em um Blob **privado**, usando `leads/<submissionId>.json` sem sufixo aleatório e sem sobrescrita. O cliente reutiliza a mesma chave de idempotência em uma tentativa repetida, evitando duplicação; `BLOB_READ_WRITE_TOKEN` permanece somente no servidor.

Ainda são necessários antes de lançamento público:

- rate limiting distribuído e monitoramento de erros para tráfego acima do piloto;
- política de retenção de leads;
- revisão jurídica da política de privacidade;
- teste completo em Preview e Production, incluindo sucesso, payload inválido, corpo excessivo, origem inválida, honeypot e reenvio idempotente.

## Licença

Código proprietário (`UNLICENSED`). As skills de terceiros permanecem sob a licença indicada em `.agents/skills/THIRD_PARTY_LICENSES.md`.

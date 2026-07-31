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
- componentes no padrão shadcn/ui, mantidos no código;
- Zod para validação server-side;
- Route Handler para encaminhamento de leads;
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

| Variável                     | Obrigatória em produção | Finalidade                                         |
| ---------------------------- | ----------------------: | -------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`       |                     Sim | URL canônica, sem barra final                      |
| `NEXT_PUBLIC_CONTACT_EMAIL`  |                     Sim | Canal exibido no site e na política de privacidade |
| `LEADS_WEBHOOK_URL`          |                     Sim | Endpoint HTTPS que receberá as candidaturas        |
| `LEADS_WEBHOOK_BEARER_TOKEN` |             Recomendada | Token enviado como `Authorization: Bearer ...`     |

Em desenvolvimento, quando `LEADS_WEBHOOK_URL` não está configurada, o endpoint valida o formulário e retorna sucesso sem persistir dados. Em produção, a ausência ou invalidade do webhook gera erro `503`.

## Contrato do webhook

O endpoint `POST /api/leads` aceita JSON, limita o corpo a 20 KB, valida os campos, verifica o honeypot e encaminha um payload semelhante a:

```json
{
  "submissionId": "c45a36fa-f197-4c3e-9374-7c1ee5d01ed1",
  "name": "Nome do responsável",
  "email": "responsavel@example.com",
  "whatsapp": "(61) 99999-9999",
  "organization": "Nome da organização",
  "university": "Universidade",
  "city": "Brasília/DF",
  "eventType": "Calourada",
  "eventDate": "2026-09-12",
  "expectedAudience": "701 a 1.200 pessoas",
  "currentPlatform": "Plataforma atual",
  "mainChallenge": "Descrição da dificuldade operacional",
  "consent": {
    "granted": true,
    "recordedAt": "2026-07-30T00:00:00.000Z"
  },
  "metadata": {
    "source": "webingressos-landing-page",
    "submittedAt": "2026-07-30T00:00:00.000Z"
  }
}
```

O webhook recebe também:

- `Authorization: Bearer <token>`, quando configurado;
- `Idempotency-Key: <submissionId>`;
- `X-Webhook-Source: webingressos-landing-page`.

Antes de tráfego pago ou divulgação ampla, adicione rate limiting distribuído e proteção antispam adequada ao risco.

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
    api/leads/route.ts   validação e entrega ao webhook
    obrigado/            confirmação de candidatura
    privacidade/         política inicial
  components/
    landing/             seções da landing
    ui/                  componentes no padrão shadcn/ui
  lib/
    lead-schema.ts       contrato de entrada
    site-config.ts       metadados e configuração pública
```

## Deploy na Vercel

1. importe `prof-ramos/webingressos-page` na Vercel;
2. mantenha o preset Next.js detectado automaticamente;
3. configure as quatro variáveis de ambiente;
4. valide o Preview Deployment e o fluxo completo do formulário;
5. vincule `webingressos.com.br` somente após confirmar a persistência dos leads;
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

O boilerplate inclui headers de segurança, validação server-side, limite de payload, verificação de origem, honeypot, timeout e autenticação opcional do webhook. Ainda são necessários antes de lançamento público:

- rate limiting distribuído;
- proteção antispam adequada ao volume;
- monitoramento de erros;
- política de retenção de leads;
- revisão jurídica da política de privacidade;
- backup e controle de acesso do destino dos leads;
- teste completo em Preview e Production.

## Licença

Código proprietário (`UNLICENSED`). As skills de terceiros permanecem sob a licença indicada em `.agents/skills/THIRD_PARTY_LICENSES.md`.

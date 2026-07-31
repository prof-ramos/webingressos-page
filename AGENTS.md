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

## Regras técnicas

- Next.js com App Router e TypeScript estrito.
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

O endpoint `POST /api/leads`:

- aceita somente JSON e requisições de mesma origem no navegador;
- limita o tamanho do corpo;
- aplica validação com Zod;
- possui honeypot simples;
- encaminha os dados para `LEADS_WEBHOOK_URL`;
- envia bearer token quando configurado;
- envia uma chave de idempotência por candidatura;
- não deve ser tratado como proteção antifraude ou antispam suficiente para tráfego elevado.

## Compatibilidade

Preserve compatibilidade retroativa com:

- estrutura pública de URLs;
- nomes das variáveis de ambiente;
- payload documentado do webhook;
- aliases `@/*`;
- fluxo principal `/#candidatura`.

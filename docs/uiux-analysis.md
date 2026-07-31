# Análise UI/UX — WebIngressos

Data da análise: 2026-07-31  
Escopo: landing page pública e candidatura ao Programa Piloto.

## Resumo executivo

A landing já tinha uma base consistente: Next.js 16, React 19, Tailwind 4, HTML semântico básico, skip link, foco visível, formulário com React Hook Form + Zod, feedback via Sonner e ilustrações SVG leves.

O foco desta rodada foi conversão da candidatura, sem trocar a identidade visual nem adicionar dependências de runtime. A proposta continua usando evergreen/mint e o motivo de ingresso/perfuração como assinatura própria; cinco assets locais foram adicionados de forma pontual como apoio visual.

### Pontos principais corrigidos

1. **Menu mobile sem ciclo de foco previsível** — o primeiro item agora recebe foco ao abrir e `Escape` fecha o menu e devolve foco ao botão.
2. **Erros do formulário pouco anunciados** — mensagens individuais agora usam `role="alert"`; o envio e falhas de rede são anunciados por região viva.
3. **Formulário sem agrupamento semântico** — contato e dados do evento agora são `fieldset`s com `legend` acessível.
4. **Proposta de valor pouco contextualizada acima da dobra** — o hero informa imediatamente que se trata do programa piloto e explicita o prazo de retorno já descrito no FAQ.
5. **Texto de eyebrow em brand-500** — pequenos textos de contexto foram movidos para brand-700, que tem contraste adequado em superfícies claras.

## Evidências técnicas

### Acessibilidade

- O layout mantém `lang="pt-BR"`, skip link, landmarks principais, labels associados e controles com targets de toque adequados.
- O foco global usa anel de 3px com offset de 3px; componentes que já possuem foco customizado continuam preservando seus estilos.
- O `FormControl` mantém `aria-describedby` e `aria-invalid`; `FormMessage` anuncia erros com `role="alert"`.
- A navegação mobile mantém `aria-expanded`, `aria-controls` e labels distintos para navegação principal e móvel.
- O movimento reduzido continua coberto por `prefers-reduced-motion`.

### Contraste calculado

Os valores abaixo foram calculados diretamente a partir dos tokens CSS atuais; não são resultados estimados de uma ferramenta visual.

| Combinação               | Contraste |             Referência WCAG AA |
| ------------------------ | --------: | -----------------------------: |
| brand-500 sobre branco   |    3,38:1 | insuficiente para texto normal |
| brand-700 sobre branco   |    7,30:1 |                       aprovado |
| ink-500 sobre ink-50     |    5,52:1 |                       aprovado |
| destructive sobre branco |    5,06:1 |                       aprovado |

Por isso, brand-500 permanece reservado para detalhes e elementos decorativos, enquanto textos pequenos de contexto usam brand-700.

### Conversão e UX

- O CTA primário continua levando ao formulário do piloto.
- O hero agora explicita o público e o caráter de candidatura sem compromisso.
- O formulário informa que a candidatura não garante vaga e que o retorno ocorre em até 48 horas úteis, conteúdo já presente no FAQ.
- Em validação inválida, o foco é movido para o primeiro campo com erro.
- Em falha de rede/API, a pessoa recebe feedback visual persistente e anúncio para tecnologia assistiva, além do toast existente.

### Performance

- Os cinco PNGs selecionados foram convertidos para WebP, redimensionados e adicionados em `public/assets/landing`; o conjunto servido soma 95.928 bytes.
- O ingresso principal usa carregamento prioritário no hero; as imagens abaixo da dobra usam lazy loading e dimensões explícitas.
- Os PNGs originais chegaram a ser arquivados para curadoria, mas o acervo `docs/uiux-assets` foi removido do repositório (ver Atualização).
- O dashboard decorativo continua sendo SVG/CSS e permanece marcado como ilustrativo.
- Não há métrica Lighthouse registrada nesta rodada; qualquer pontuação futura deve ser medida em ambiente de produção ou preview equivalente.

### Assets adicionados

- `ticket-event.webp`: assinatura visual do hero.
- `mobile-ticket.webp`, `qr-code-ticket.webp` e `checkmark-ticket.webp`: sequência operacional de venda, check-in e confirmação.
- `concert-ticket.webp`: apoio visual da seção de público universitário.

Os arquivos têm licença de produção ainda não confirmada; a publicação comercial depende da validação da licença oficial do Envato.

## Atualização (2026-07-31) — Auditoria de design

Uma auditoria contra o `DESIGN.md` reprovou os cinco `.webp` adicionados nesta rodada:
eram renders 3D glossy multicolor (azul/laranja/verde), violando a regra de ilustração
"traço fino, uma cor, nunca preenchido/multicolor/fotográfico", introduzindo azul e
laranja fora da paleta verde-única (o pior caso no hero, acima da dobra) e mantendo a
licença Envato pendente.

Ações aplicadas:

- Os cinco `.webp` foram removidos de `public/assets/landing/` (diretório eliminado),
  encerrando o risco de licença na aplicação servida.
- **Hero**: o ingresso 3D flutuante foi removido; o `DashboardPreview` passa a ser o
  foco visual único.
- **Fluxo operacional**: deixou de ser uma terceira faixa `brand-900` (que competia com
  a band de fechamento) e virou seção clara com cards brancos e ícones de traço verde
  (`lucide`), preservando a numeração de sequência 01/02/03.
- **Público**: o render 3D foi trocado pela ilustração de traço `TicketLine` em verde; o
  painel de apoio deixou de ser verde (`bg-brand-50`) e passou a neutro (`bg-ink-100`),
  para não criar uma terceira faixa verde entre a band do piloto e o CTA final.

Em seguida, todo o acervo de referência `docs/uiux-assets` (~413 MB de pacotes Envato não referenciados pelo app) foi removido do repositório, encerrando de vez a exposição à licença pendente.

### Performance e dependências

Diferente da primeira rodada (que foi feita sem dependências de runtime), esta etapa de
performance **adicionou duas dependências de runtime deliberadamente**, com necessidade
demonstrada:

- `@vercel/speed-insights` e `@vercel/analytics`, montados em `src/app/layout.tsx`. Como
  não há Google Chrome nesta máquina para rodar Lighthouse, o Speed Insights é o caminho
  para obter Core Web Vitals de campo reais após o deploy.
- O formulário do piloto (abaixo da dobra) passou a ser carregado por `next/dynamic` com
  `ssr: false` + `IntersectionObserver`, tirando a stack de validação (`zod` +
  `react-hook-form` + `radix`) do first-load: **~338 KB → 222 KB gzip** no first-load da
  home (medido no build).

## Validação executada

- `pnpm format:check`: passou.
- `pnpm lint`: passou sem erros; existe um warning preexistente em `.remember/tmp/last-ndc.ts`.
- `pnpm typecheck`: passou.
- `pnpm build`: passou; rotas estáticas e `/api/subscribe` foram compiladas.
- `curl http://localhost:3000/`: respondeu `200` com headers de segurança e HTML contendo o novo contexto do piloto, formulário e menu.
- Contraste dos tokens principais: calculado e registrado acima.

## Limitações e próximos passos

- Ainda é necessário executar Lighthouse em uma URL servida e testar manualmente com teclado/leitor de tela em navegador real; a tentativa automatizada de abrir o navegador local expirou antes de permitir essa inspeção.
- O acervo `docs/uiux-assets` foi removido do repositório; não há mais arquivos de licença pendente versionados.
- Não foram alterados contratos da API, banco de dados ou implantação.

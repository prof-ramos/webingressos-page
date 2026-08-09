# AGENTS.md — WebIngressos Page

Este documento tem três níveis, separados de propósito:

- **Mecanismo** — como o código funciona. Só muda quando o código muda.
- **Decisões** — escolhas de produto vigentes. Reversíveis por quem decide.
- **Abertas** — questões ainda não resolvidas. Vivem no `TODO.md`, não aqui.

Se uma regra parecer imutável quando é reversível (ou o contrário), ela está no
nível errado: conserte a seção antes de segui-la. Deliberação em aberto neste
documento é bug — foi assim que métricas fictícias sobreviveram a três revisões.

## Antes de começar

Antes de alterar posicionamento, copy, público ou CTA:

1. leia `.agents/product-marketing.md`;
2. preserve a distinção entre **recurso existente**, **recurso em validação** e **hipótese futura**;
3. use as skills versionadas em `.agents/skills/product-marketing/` e `.agents/skills/copywriting/`;
4. atualize o contexto do produto e o changelog quando houver mudança substantiva.

Para atualizar as skills a partir do repositório oficial:

```bash
pnpm skills:update
```

---

# Parte 1 — Mecanismo

## Onde o design está documentado

`DESIGN.md` na raiz é a especificação do design system vigente: papéis
tipográficos, escala de raio, anatomia de cada componente e as regras de uso.
Esta seção cobre os tokens e o encanamento; `DESIGN.md` cobre os papéis. Os dois
são obrigatórios antes de alterar UI.

Uma regra de lá que se perde com facilidade: tracking largo pertence só ao
papel _eyebrow_. Títulos de marketing podem usar Anton em caixa alta, mas com
tracking compacto; texto de produto e finanças permanece em Archivo.

## Camada de tokens

- `globals.css` define a paleta em `:root` e a expõe via `@theme inline`: escala
  `brand-50..900`, escala `ink-*` e os tokens semânticos do shadcn
  (`--primary`, `--border`, …).
- Os primitivos em `src/components/ui/` são shadcn **base-nova sobre
  `@base-ui/react`** e leem variáveis _sem prefixo_ (`var(--secondary)`,
  `var(--popover)`). **Consequência prática: `:root` é a autoridade única do
  tema.** Trocar a paleta inteira é reescrever `:root`, sem tocar em componente.
- Os primitivos também trazem variantes `dark:`. O `@custom-variant dark` no
  topo do `globals.css` as redireciona para `.dark`, impedindo que
  `prefers-color-scheme` do visitante as ative sozinho. Essa linha serve à
  decisão de tema vigente (Parte 2), não é restrição permanente.
- `--focus-ring` é a fonte única da cor de foco: o `outline` de 3px e os anéis
  dos componentes leem dela.

## Componentes

- Controles do shadcn vêm dimensionados para dashboard (`h-8`). Em formulários
  de marketing use `h-12`; no `SelectTrigger` o override precisa do mesmo
  prefixo: `data-[size=default]:h-12`.
- Seções da landing são Server Components. Só `header`, `faq`, `pilot-form` e
  `pilot-form-lazy` são `"use client"`.
- Listas de conteúdo e configuração compartilhada vivem em
  `src/lib/constants.ts`; títulos estruturais podem permanecer junto ao
  componente quando não são reutilizados.

## Formulário `POST /api/subscribe`

- valida o corpo com o schema de `src/lib/schemas.ts` (Zod);
- na falha de validação, responde `400` com os erros por campo;
- no sucesso, persiste o lead de forma privada no Vercel Blob usando um pathname
  determinístico por `submissionId`, preservando consentimento, data e origem;
- reenvios do mesmo `submissionId` são idempotentes e não criam outro registro;
- não registra PII em logs; o armazenamento durável depende de
  `BLOB_READ_WRITE_TOKEN` configurado no ambiente de produção;
- limites de payload e proteção contra abuso devem acompanhar o tráfego do piloto;
  para volume elevado, adicionar rate limiting distribuído antes da abertura geral.

## Superfície de compatibilidade

Preserve compatibilidade retroativa com:

- estrutura pública de URLs;
- nomes das variáveis de ambiente;
- aliases `@/*`;
- fluxo principal `/#piloto`.

## Gate de qualidade

Antes de concluir uma alteração:

```bash
pnpm check
```

Não existe suíte de testes: `pnpm check` (format, lint, typecheck, build) é o
gate completo. Também verifique manualmente:

- viewport móvel e desktop;
- estados de foco;
- contraste;
- envio, repetição e falha do formulário;
- ausência de links quebrados;
- ausência de promessas não comprovadas;
- nenhuma regressão em metadados, sitemap e robots.

---

# Parte 2 — Decisões vigentes

## Escopo do repositório

Este repositório contém exclusivamente a landing page de validação comercial.

- Site público: `webingressos.com.br`.
- Produto operacional futuro: repositório separado, preferencialmente em `app.webingressos.com.br`.
- A landing não deve acumular autenticação, checkout, pagamentos, emissão de ingressos ou backoffice.

## Posicionamento

A WebIngressos é apresentada como infraestrutura em validação para venda,
operação e prestação de contas de eventos universitários.

Público inicial: atléticas; repúblicas; centros acadêmicos e diretórios
estudantis; produtores de eventos universitários.

CTA principal:

> Quero participar do piloto

## Tema visual

- **Decisão atual: tema escuro.** `:root` carrega a paleta violeta-noturna e
  `color-scheme: dark`; o `layout.tsx` aplica `.dark` explicitamente para que
  as variantes dos primitivos não dependam da preferência do visitante.
- Marketing usa Anton, magenta, verde ácido e composição inspirada em flyers.
  Produto, dados e finanças usam Archivo, superfícies neutras e destaques mais
  contidos. A mesma página pode mostrar os dois registros, mas não misturá-los
  dentro de um componente financeiro.
- **Não usar cores cruas do Tailwind** (`slate-*`, `emerald-*`) nos
  componentes — sempre os tokens (`bg-primary`, `text-muted-foreground`,
  `border-border`).
- A fonte canônica da identidade pública é a landing `/` e seus tokens em
  `globals.css`. Protótipos externos são referência visual, não rota nem
  dependência deste repositório.

## Estética

Padrão-nega para gradiente decorativo, 3D e sombra pesada. Textura de grão,
grid, blocos planos e tipografia expressiva criam a linguagem de flyer sem
substituir conteúdo por efeito. A exceção é permitida quando o efeito
**codifica informação** — justifique no PR.

O critério é esse, não a técnica: a perfuração de um ingresso codifica algo
verdadeiro (o canhoto fica com quem organiza); um `rotateY` com brilho varrendo
não codifica nada e sai.

Exceção declarada, para não ficar implícita: o briefing de 2026-08-05 pede
explicitamente **glow neon sutil no hover do botão primário**. É sombra, o
critério acima não a salva (hover já é codificado pela cor) e ela existe por
pedido do cliente, não por mérito da regra. Fica registrada aqui como exceção
nomeada — se o briefing mudar, ela cai junto. A segunda exceção é a sombra
deslocada do painel demonstrativo, que o separa do hero como janela de produto.
Nenhuma outra sombra é aceita sem passar pelo critério.

## Copy

- Escreva em português-BR.
- Priorize clareza, especificidade e linguagem do organizador.
- Use uma mensagem central e uma ação principal por página.
- Não invente clientes, números, depoimentos, integrações, disponibilidade ou resultados.
- Não trate hipóteses como gaps confirmados.
- Não apresente o produto como pronto.
- Evite competir apenas por preço ou taxa.
- Evite jargão sem consequência concreta.
- Prefira benefício operacional verificável a listas extensas de funcionalidades.
- Interface demonstrativa precisa de rótulo visível de exemplo ou prévia, no
  próprio bloco — não em nota de rodapé.

## Ética com o comprador final

Persuasão pode organizar a decisão do organizador; não pode obscurecer o
dinheiro de quem compra o ingresso.

- Não ocultar valor, taxa ou total em nenhuma etapa visível ao comprador.
- Não usar escassez, contagem regressiva ou prova social sem fato verificável
  por trás.
- Viés cognitivo é aceitável para **ordenar informação verdadeira** (hierarquia,
  ancoragem em dado real); não para fabricar urgência ou tração inexistente.
- O produto vende prestação de contas auditável. Interface que esconde dinheiro
  contradiz a proposta que está sendo vendida.

## Acessibilidade (pisos)

- Contraste de texto: ≥ 4,5:1 (WCAG AA).
- Contraste de não-texto (WCAG 1.4.11): ≥ 3:1 para o que **delimita ou
  identifica um controle** — borda de botão, de input, estado de foco, ícone
  que carrega significado. Divisor puramente decorativo não entra nessa conta.
  A distinção importa: onde as camadas de superfície diferem pouco, a borda
  passa a ser a única pista da existência do controle, e aí ela é obrigada aos
  3:1 mesmo parecendo "só uma linha".
- Foco sempre visível: `outline` de 3px com `--focus-ring` e offset de 3px.
- `prefers-reduced-motion` respeitado — o guard global em `globals.css` colapsa
  animação e transição; não reintroduza movimento fora dele.
- Navegação completa por teclado, incluindo o skip link do `layout.tsx`.
- Alvo de toque confortável em marketing (`h-12`).

## Técnicas

- Next.js com App Router e TypeScript estrito.
- Design mobile-first.
- Tailwind CSS e componentes no padrão shadcn/ui mantidos no repositório.
- Priorize Server Components; use `"use client"` somente quando houver estado, efeitos ou APIs do navegador.
- Não adicione dependências sem necessidade demonstrável.
- Valide entrada no servidor, mesmo quando houver validação no cliente.
- Não registre PII em logs.
- Nunca versione segredos ou arquivos `.env` reais.
- Consulte Context7 ou documentação oficial atual antes de usar APIs suscetíveis a mudança.

## Riscos estratégicos conhecidos

Contexto para decisões de posicionamento e copy. Levantado em revisão externa
(2026-08-05) e considerado válido:

- **O concorrente real é caseiro, não o Sympla.** O substituto imediato do
  organizador é Google Forms + Pix + planilha: custo zero e já dominado. A copy
  precisa ganhar dessa combinação, não de um concorrente enterprise.
- **Risco de comoditização por incumbente.** Sympla/Eventbrite podem adicionar
  controle de promoter e comissão como feature. Não ancorar a copy em features
  que um incumbente replica rápido; ancorar na operação específica da atlética.
- **Nicho pequeno exige venda direta.** O mercado universitário não sustenta
  aquisição paga em escala; a landing serve a venda consultiva e contato
  próximo, não a self-service de volume.
- **Preço indefinido.** Não há decisão entre mensalidade e percentual do bruto.
  Enquanto isso não estiver resolvido, não prometer previsibilidade de custo
  nem citar valores.

Não confundir com crítica inválida: revisões externas costumam penalizar a
sobriedade da copy e a ausência de números fortes. Isso é consequência
deliberada das regras de copy acima e não deve ser "corrigido" com claims não
comprovadas.

---

# Parte 3 — Abertas

Questões em aberto não moram aqui. Estão no `TODO.md`, com prioridade e critério
de conclusão. A que afeta decisões deste documento hoje é o modelo de preço,
que bloqueia qualquer copy sobre custo.

---
version: beta
name: Campus After Dark
description: >
  Sistema visual escuro e expressivo para a landing de uma infraestrutura em
  validação para eventos universitários. O marketing tem energia de flyer; a
  demonstração de produto mantém legibilidade financeira.
colors:
  background: "#0a0611"
  surface: "#140d20"
  surface-raised: "#1a1229"
  surface-deep: "#070410"
  foreground: "#f7f4ee"
  muted-foreground: "#a394b8"
  border: "#3c2c50"
  control-border: "#806b90"
  hot: "#ff2e7e"
  lime: "#c6ff3d"
  success: "#34e5a0"
  warning: "#ffc857"
  destructive: "#ff6b7d"
typography:
  marketing-display:
    fontFamily: Anton
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: -0.025em
    textTransform: uppercase
  marketing-heading:
    fontFamily: Anton
    fontWeight: 400
    lineHeight: 0.94
    letterSpacing: -0.02em
    textTransform: uppercase
  body:
    fontFamily: Archivo
    fontWeight: 400
    lineHeight: 1.6
  interface:
    fontFamily: Archivo
    fontWeight: 600
    lineHeight: 1.4
  eyebrow:
    fontFamily: Archivo
    fontSize: 0.75rem
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 0.16em
    textTransform: uppercase
rounded:
  control: 0.5rem
  card: 0.75rem
  panel: 1rem
  full: 9999px
motion:
  hover: 200ms
  accordion-open: 220ms
  accordion-close: 200ms
  marquee: 24s
  easing: ease-out
---

# Campus After Dark

## Princípio

A landing deve parecer feita para quem divulga uma calourada e, horas depois,
precisa explicar cada repasse. Essa tensão define o sistema:

- marketing: Anton, títulos grandes, magenta, verde ácido, grid e textura de
  papel impresso;
- produto, dados e finanças: Archivo, superfícies neutras, alinhamento estável,
  números tabulares e cor usada para indicar estado.

Energia não autoriza promessas. A página continua sendo uma candidatura ao
piloto, não uma demonstração de tração ou um produto em produção.

## Tokens e autoridade do tema

`src/app/globals.css` é a fonte única da paleta. Os componentes consomem tokens
semânticos; valores hexadecimais não saem de `:root`.

- `background`: canvas violeta quase preto.
- `surface`: cards e painel demonstrativo.
- `surface-raised`: bandas que precisam separar um momento da página.
- `surface-deep`: header, footer e planos de fundo de alta densidade.
- `foreground` e `muted-foreground`: texto principal e secundário.
- `border`: separação estrutural decorativa.
- `input`/`control-border`: delimitação de controles com contraste mínimo 3:1.
- `primary`/`hot`: ação principal em magenta.
- `accent`/`lime`: eyebrows, indicadores e destaques de leitura.
- `success`, `warning`, `destructive`: apenas estados correspondentes.
- `focus-ring`: única fonte da cor de foco, sempre verde ácido.

O tema é deliberadamente escuro. `layout.tsx` aplica `.dark` no elemento
`html`; `@custom-variant dark` impede que a preferência do sistema operacional
decida o tema da landing.

## Tipografia

### Marketing display

Anton, caixa alta, tracking compacto e line-height entre `0.9` e `0.95`. Usado
em `h1`, títulos de seção e headline do CTA final. Anton não entra em parágrafo,
formulário, números ou textos financeiros.

### Body e interface

Archivo em todo corpo, navegação, formulário, card, FAQ e painel. Dados usam
pesos maiores e `tabular-nums` quando o alinhamento entre valores importa.

### Eyebrow

Archivo, 12 px, bold, caixa alta e tracking `0.16em`. É o único papel que
combina caixa alta com tracking largo. Botões continuam em capitalização
normal; títulos Anton podem usar caixa alta, mas com tracking apertado.

## Cor e contraste

Magenta identifica a ação principal e momentos de marca. Verde ácido identifica
seção, progresso, confirmação e contraste editorial. Nenhuma cor deve ser
usada como única forma de comunicar estado: texto, ícone ou rótulo acompanha.

Pisos obrigatórios:

- texto normal: 4,5:1;
- texto grande: 3:1;
- contorno de controles, foco e ícones funcionais: 3:1;
- foco: outline de 3 px e offset de 3 px.

## Layout

- mobile-first, sem largura mínima implícita;
- shell com máximo de 1200 px e gutters de 20/24/32 px;
- hero em uma coluna no mobile e duas no desktop;
- cards passam de uma para duas e quatro colunas conforme o conteúdo;
- títulos nunca dependem de quebra manual no mobile;
- ornamentos permanecem dentro de containers com `overflow-hidden`;
- nenhum elemento decorativo pode aumentar `scrollWidth`.

## Superfícies e profundidade

Cards são planos: mudança de superfície e borda fazem a separação. Hover pode
subir 2 px e mudar a cor da borda. Sombra pesada, 3D, glassmorphism e gradiente
decorativo continuam proibidos.

Exceções declaradas:

1. o painel demonstrativo pode ter sombra deslocada magenta para se separar do
   hero como uma janela de produto;
2. o botão primário pode ganhar glow magenta sutil somente no hover, conforme o
   briefing aprovado;
3. grão e grid são texturas planas, sem simular volume.

## Componentes

### Header

Sticky, `surface-deep` translúcido e borda inferior. Não contém link para
`/dashboard` nem ação “Entrar” enquanto a aplicação não estiver disponível.
O CTA repete “Quero participar do piloto”. Menu móvel abre com foco no primeiro
link, fecha com Escape e devolve foco ao botão.

### Hero

Comunica público, problema e benefício antes da rolagem. Tem um CTA primário e
um link secundário “Ver por dentro”, que aponta para `#demonstracao`. O painel
fica acompanhado, no próprio bloco, pelos rótulos “Demonstração do produto” e
“Dados fictícios”.

### Faixa de público

Faixa verde ácido com audiência conhecida. Pode usar marquee em CSS; com
`prefers-reduced-motion`, torna-se estática. O conteúdo duplicado para o loop é
`aria-hidden`.

### Cards de problema

Uma dor concreta por card, iconografia magenta e texto Archivo. Não usar
estatística, urgência ou claim de cliente.

### Cards da proposta

Alternam chips magenta e verde ácido. A seção precisa dizer que os fluxos estão
em validação, para que as descrições não pareçam disponibilidade atual.

### Fluxo operacional

Quatro passos: configurar evento, ligar venda e responsável, registrar entrada
e fechar com rastreabilidade. O eyebrow “Fluxo previsto para o piloto” faz parte
do significado do componente e não pode ser removido por motivo cosmético.

### Painel demonstrativo

Superfície financeira neutra, Archivo e cor funcional. Os valores podem ser
fictícios somente porque o bloco é rotulado antes deles. `aria-hidden` evita que
uma sequência de números sem contexto polua a leitura por tecnologia assistiva.

### Formulário

Mantém os primitivos base-nova, altura mínima 48 px, borda de controle 3:1,
erros por campo e erro geral. Sucesso só existe após resposta real de
`POST /api/subscribe`; então ocorre navegação para `/obrigado`. Consentimento
liga para `/privacidade`. Honeypot, Zod e idempotência não são detalhes visuais
e não podem ser removidos em uma revisão de UI.

### FAQ e CTA final

FAQ usa cards planos e accordion acessível. O CTA final pode inverter para
magenta sólido, com botão claro. Nenhum dos dois introduz uma segunda ação de
mesmo peso.

## Movimento

Transições duram até 220 ms. Não usar reveal por scroll, parallax, spring ou
animação em JavaScript. `prefers-reduced-motion` colapsa todas as animações e
transições. A página deve continuar legível e completa sem movimento.

## Checklist de revisão

- Anton aparece apenas em títulos de marketing e marca.
- Archivo aparece em body, interface, dados e finanças.
- Não há hex nem cores cruas do Tailwind nos componentes.
- O único glow está no hover da ação primária.
- Demonstrações estão rotuladas no próprio bloco.
- Recursos em validação não parecem prontos.
- Nenhum link aponta para rota inexistente.
- Não há overflow em 320, 375, 390, 768, 1024 e 1440 px.
- Foco, controles e texto atendem aos pisos de contraste.
- A experiência continua funcional com movimento reduzido e zoom de 200%.

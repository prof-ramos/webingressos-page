# Issue #7 — registro de implementação e validação

Este documento registra as decisões verificáveis da migração visual. Ele não
substitui `DESIGN.md`, `AGENTS.md` nem o contexto de produto.

## Baseline

- Repositório: `prof-ramos/webingressos-page`.
- Commit de partida: `b4d4f752f4efd7dcac10be0a7d813d3942d58abe`
  (`origin/main` em 2026-08-09).
- Instalação: `pnpm install --frozen-lockfile` — concluída.
- Gate: `pnpm check` — Prettier, ESLint, TypeScript e build concluídos.
- Capturas: `screenshots/before-desktop.webp` e
  `screenshots/before-mobile.webp`.

## Inventário anterior à alteração

Ordem narrativa na `main`:

1. `Header` e `Hero`, com `DashboardPreview`;
2. `Problems`;
3. `Pillars`;
4. `OperationalFlow`;
5. `TargetAudience`;
6. `PilotBand`;
7. `PilotFormLazy` / `PilotForm` em `#piloto`;
8. `Faq`, `FinalCta` e `Footer`.

Âncoras e destinos preservados ou corrigidos:

| Origem                                    | Destino                                                           | Decisão                                      |
| ----------------------------------------- | ----------------------------------------------------------------- | -------------------------------------------- |
| CTA principal, header, faixa e fechamento | `#piloto`                                                         | Preservado                                   |
| Ação secundária do hero                   | `#demonstracao`                                                   | Corrigido para a demonstração real           |
| Navegação                                 | `#problemas`, `#pilares`, `#operacao`, `#programa-piloto`, `#faq` | Preservada e revisada                        |
| Consentimento e footer                    | `/privacidade`                                                    | Preservado                                   |
| Confirmação após sucesso real             | `/obrigado`                                                       | Preservado                                   |
| Ação “Entrar”                             | ausente                                                           | Não há ambiente operacional público validado |
| `/dashboard`                              | ausente                                                           | Descartado                                   |

## Tokens

| Papel            | Baseline                      | Direção adotada                               |
| ---------------- | ----------------------------- | --------------------------------------------- |
| Fundo            | off-white `#f9fafc`           | violeta quase preto `#0a0611`                 |
| Superfície       | branco `#ffffff`              | violeta neutro `#140d20`                      |
| Texto            | navy `#1b2740`                | marfim `#f7f4ee`                              |
| Texto secundário | cinza `#5e6677`               | lavanda acinzentada `#a394b8`                 |
| Ação             | verde institucional `#0e6340` | magenta `#ff2e7e`                             |
| Destaque         | verde médio `#2f9e68`         | verde ácido `#c6ff3d`                         |
| Sucesso          | verde de dados                | `#34e5a0`                                     |
| Alerta           | não centralizado              | `#ffc857`                                     |
| Erro             | vermelho rosado               | `#ff6b7d`                                     |
| Foco             | verde                         | verde ácido, outline de 3 px e offset de 3 px |

Os valores ficam centralizados em `src/app/globals.css` e são expostos por
`@theme inline`. Componentes consomem os nomes semânticos.

## Portado, adaptado e descartado

| Referência do protótipo                | Tratamento na base canônica                                                               |
| -------------------------------------- | ----------------------------------------------------------------------------------------- |
| Anton + Archivo                        | Portado por `next/font`, com `display: "swap"`                                            |
| Violeta, magenta e verde ácido         | Portados para tokens semânticos                                                           |
| Grid, grão e ritmo de flyer            | Adaptados como utilitários CSS discretos                                                  |
| Painel do produto no hero              | Adaptado no `DashboardPreview` existente                                                  |
| Estrutura monolítica da página         | Descartada; módulos existentes preservados                                                |
| Formulário local do protótipo          | Descartado; formulário e endpoint reais preservados                                       |
| Atraso e sucesso simulados             | Descartados                                                                               |
| `/dashboard` e botão “Entrar”          | Descartados                                                                               |
| Métricas, urgência e eventos do mockup | Descartados como claims; dados ilustrativos ficam rotulados e ocultos da árvore acessível |
| Biblioteca ou dependência nova         | Nenhuma adicionada                                                                        |

## Matriz de claims

| Promessa relevante                                                    | Classificação                           | Justificativa                                                                                             |
| --------------------------------------------------------------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Infraestrutura para vendas, promoters, check-in e prestação de contas | Reformulada                             | Aparece sempre como proposta “em validação”, não como produto concluído                                   |
| Pix no WhatsApp e planilhas paralelas como alternativa atual          | Mantida                                 | Risco estratégico e problema operacional documentados; a copy não afirma prevalência estatística          |
| Comissão ligada a cada responsável                                    | Reformulada                             | Apresentada como fluxo em validação no piloto                                                             |
| Check-in com registro                                                 | Reformulada                             | Apresentado como fluxo em validação, sem prometer offline ou bloqueio automático                          |
| Fechamento com rastreabilidade                                        | Reformulada                             | Apresentado como fluxo previsto para o piloto, sem afirmar operação real                                  |
| Atendimento em até 48 horas úteis                                     | Mantida                                 | Compromisso já documentado na base canônica                                                               |
| Modo ou sincronização offline                                         | Removida                                | Não há confirmação de disponibilidade                                                                     |
| Estorno conciliado, divisão auditável e histórico auditável           | Removida como funcionalidade disponível | O protótipo não prova disponibilidade; somente a hipótese de fluxo futuro permanece identificada como tal |
| Lotes ou preços automáticos                                           | Removida                                | Não há confirmação de disponibilidade                                                                     |
| Pix ou cartão como meios disponíveis                                  | Removida                                | Não há confirmação de disponibilidade                                                                     |
| Ingresso repetido bloqueado                                           | Removida                                | Não há confirmação de disponibilidade                                                                     |
| Ranking, metas ou acompanhamento em tempo real                        | Removida                                | Não há confirmação de disponibilidade                                                                     |
| Repasses automáticos                                                  | Removida                                | Não há confirmação de disponibilidade                                                                     |
| Eventos, receita, vendas e conversão reais                            | Removida                                | A demonstração usa dados fictícios, com rótulo permanente e `aria-hidden`                                 |
| Preço, taxa ou previsibilidade de custo                               | Removida                                | Modelo comercial continua em aberto                                                                       |
| Escassez ou urgência artificial                                       | Removida                                | Sem evidência verificável                                                                                 |

## Contratos preservados

- Next.js 16, React 19, TypeScript estrito, Tailwind 4, base-nova,
  React Hook Form e Zod, sem atualização de dependências.
- `POST /api/subscribe`, schema, campos, payload, honeypot, limite de 16 KiB,
  validação de origem e idempotência.
- Blob privado em `leads/<submissionId>.json`, sem sufixo aleatório e sem
  sobrescrita.
- `PilotFormLazy` e sua reserva de espaço.
- Skip link, foco visível, menu por teclado, redução de movimento e mensagens
  acessíveis do formulário.
- `/obrigado`, `/privacidade`, 404, sitemap, robots, manifest, Analytics, Speed
  Insights, headers de segurança e variáveis de ambiente.

## Evidências de validação da branch

Resultados executados em 2026-08-09:

- [x] `pnpm install --frozen-lockfile` — sem alteração do lockfile.
- [x] `pnpm check` — Prettier, ESLint, TypeScript e build aprovados.
- [x] rotas públicas — `/`, `/obrigado`, `/privacidade`, `robots`, `sitemap` e
      `manifest` responderam `200`; rota inexistente respondeu `404`.
- [x] links e âncoras — nenhum hash quebrado e nenhuma referência a
      `/dashboard`.
- [x] matriz local do endpoint — JSON malformado `400`, schema inválido `400`,
      chave inválida `400`, origem inválida `403`, payload acima de 16 KiB
      `413`, honeypot `200` e token ausente `503`.
- [x] formulário — oito erros associados, foco no primeiro campo inválido,
      apenas uma tentativa ativa no duplo clique, botão reabilitado após falha
      e mesma `Idempotency-Key` reutilizada no retry do mesmo payload.
- [x] teclado — skip link como primeiro foco; menu move foco ao abrir, fecha por
      `Escape` e devolve foco ao botão.
- [x] foco — outline verde ácido sólido de 3 px, offset de 3 px.
- [x] 320, 375, 390, 768, 1024 e 1440 px — sem overflow horizontal nem corte
      do título, demonstração ou formulário.
- [x] reflow equivalente a zoom de 200% — viewport CSS efetivo de 640 px para
      uma janela de 1280 px, sem overflow ou perda de conteúdo.
- [x] movimento reduzido — guard global localizado no CSS compilado e marquee
      com fallback `motion-reduce:animate-none`; o navegador de QA não expôs
      emulação da preferência para teste visual ativo.
- [x] contraste WCAG AA — texto/fundo 18,27:1; secundário/superfície 6,75:1;
      ação/fundo 5,68:1; borda de controle/controle 4,11:1; foco/fundo 16,97:1;
      erro/superfície 6,90:1.
- [x] Lighthouse local desktop e mobile — acessibilidade 100, boas práticas
      100, SEO 100 e agentic browsing 100; zero falhas em 53 auditorias.
- [x] trace local desktop — LCP 167 ms e CLS 0,00, sem throttling; sem dados de
      campo disponíveis.
- [x] console local — nenhum erro, warning ou issue.
- [x] capturas depois em desktop e mobile.
- [x] comparação de build — `.next/static/chunks` permaneceu em 1.288 KiB; os
      arquivos de fonte em `.next/static/media` passaram de 96 para 156 KiB e
      `.next/server/app` de 1.264 para 1.304 KiB. O acréscimo vem da dupla
      tipográfica Anton + Archivo; não houve aumento no total de chunks JS.
- [ ] Preview Deployment, console e Core Web Vitals
- [ ] persistência real e idempotência no Preview

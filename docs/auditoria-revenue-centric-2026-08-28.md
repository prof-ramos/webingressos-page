# Auditoria Revenue-Centric Design — WebIngressos Page

**Data:** 28 de agosto de 2026

**Escopo:** landing pública, candidatura ao Programa Piloto, operação de captação e sinais de monetização.

**Método:** leitura do código e dos documentos do repositório, análise pelos princípios de Revenue-Centric Design e validação local das superfícies públicas e do endpoint.
**Alterações realizadas:** nenhuma.

## Veredito executivo

A implementação está tecnicamente saudável e é disciplinada quanto à honestidade: a página deixa claro que o produto está em validação, não usa depoimentos ou métricas reais inventadas e marca o dashboard como fictício.

O gargalo atual é comercial, não visual. A landing gera uma candidatura, mas ainda não fecha o ciclo de receita: não mede o funil, não captura a origem do lead, qualifica pouco o ICP prioritário, não demonstra com força o diferencial de governança e promete retorno em 48 horas sem uma operação de follow-up comprovada.

O projeto deve avançar nesta ordem:

1. definir a oferta e o modelo econômico do piloto;
2. atribuir responsável e fluxo de resposta aos leads;
3. instrumentar conversão, qualificação e origem;
4. expor melhor o perfil de evento buscado;
5. trocar a prova genérica de dashboard por um cenário demonstrativo do rateio e fechamento.

## O que está funcionando

- **Mensagem central clara:** “Venda ingressos sem perder o controle do evento” conecta venda e operação ([`hero.tsx:25`](../src/components/landing/hero.tsx#L25)).
- **Alternativa real nomeada:** a página fala de Pix, WhatsApp, comprovantes e planilhas paralelas ([`constants.ts:37`](../src/lib/constants.ts#L37)).
- **CTA único:** “Quero participar do piloto” é repetido sem introduzir uma segunda conversão concorrente ([`constants.ts:24`](../src/lib/constants.ts#L24)).
- **Honestidade de estágio:** hero, proposta, FAQ e formulário dizem que os fluxos estão em validação ([`constants.ts:110`](../src/lib/constants.ts#L110), [`pillars.tsx:10`](../src/components/landing/pillars.tsx#L10)).
- **Prova fictícia identificada:** o painel informa “Demonstração do produto” e “Dados fictícios” ([`hero.tsx:59`](../src/components/landing/hero.tsx#L59), [`dashboard-preview.tsx:34`](../src/components/landing/dashboard-preview.tsx#L34)).
- **Base técnica do lead:** schema server-side, limite de corpo, bloqueio de origem inválida, Blob privado e idempotência estão implementados ([`route.ts:56`](../src/app/api/subscribe/route.ts#L56), [`route.ts:115`](../src/app/api/subscribe/route.ts#L115)).

Esses pontos aplicam bem os princípios de [passar no teste de cinco segundos](https://x.com/richardrx/status/2050280273682510230), [escrever a microcopy do CTA](https://x.com/richardrx/status/2058875777739866490) e não transformar ausência de prova em prova inventada.

## Achados prioritários

### P0 — O preço como filtro ainda não existe

O modelo de preço continua indefinido ([`TODO.md:59`](../TODO.md#L59)). Isso não é um erro de copy: é uma decisão deliberadamente aberta e a página está correta em não publicar um valor inventado. O problema é que o formulário atual valida interesse, não disposição a pagar.

**Risco:** uma lista de candidaturas pode crescer sem demonstrar que existe uma operação economicamente sustentável.

**Ação recomendada:** definir a oferta do piloto — mensalidade, percentual, cobrança por evento ou outra hipótese — e inserir a validação econômica na conversa ou em uma pergunta posterior, sem sobrecarregar o primeiro contato. O princípio aplicável é [preço como filtro](https://x.com/richardrx/status/2051672248348479691).

### P0 — A promessa de 48 horas cria expectativa sem processo operacional

O prazo aparece no hero, no FAQ, no formulário e na página de confirmação ([`hero.tsx:53`](../src/components/landing/hero.tsx#L53), [`constants.ts:122`](../src/lib/constants.ts#L122), [`obrigado/page.tsx:28`](../src/app/obrigado/page.tsx#L28)). Porém, o endpoint somente grava a candidatura no Blob; não há notificação, fila, responsável ou pipeline documentado ([`route.ts:115`](../src/app/api/subscribe/route.ts#L115), [`TODO.md:73`](../TODO.md#L73)).

**Risco:** o primeiro contato pode confiar em uma resposta que a operação ainda não consegue garantir. Isso converte uma promessa persuasiva em dívida de confiança.

**Ação recomendada:** atribuir proprietário, canal de alerta, estado do lead e procedimento de resposta antes de manter o prazo de 48 horas. Se isso não puder ser garantido, remover o prazo e manter apenas uma expectativa honesta de retorno.

### P0 — O funil não produz sinal de decisão

O layout monta apenas Analytics e Speed Insights genéricos ([`layout.tsx:60`](../src/app/layout.tsx#L60)); não foram encontrados eventos próprios para impressão do CTA, clique, início do formulário, erro, envio ou conclusão. O lead também recebe sempre `source: "landing-page"` ([`route.ts:99`](../src/app/api/subscribe/route.ts#L99)).

**Risco:** não é possível saber se o problema está no tráfego, na mensagem, na qualificação, no formulário ou no follow-up. Também não é possível calcular CAC por canal.

**Ação recomendada:** medir pelo menos `cta_click`, `form_start`, `form_error`, `form_submit`, `form_success` e `form_failure`, além de preservar UTM e origem de campanha sem registrar PII em logs. O princípio aplicável é [celebrar qualidade do sinal, não tamanho da lista](https://x.com/richardrx/status/2045094511106220220).

### P1 — O ICP prioritário está escondido fora da landing canônica

A landing pública mostra quatro grupos amplos ([`target-audience.tsx:11`](../src/components/landing/target-audience.tsx#L11)). O perfil mais útil para seleção — 300–2.000 participantes, duas ou mais entidades e cinco ou mais promoters — está em `/prototipo`, uma rota noindex e bloqueada em `robots.txt` ([`prototipo/page.tsx:24`](../src/app/prototipo/page.tsx#L24), [`prototipo/page.tsx:42`](../src/app/prototipo/page.tsx#L42), [`robots.ts:10`](../src/app/robots.ts#L10)).

**Risco:** tráfego frio não consegue se autoqualificar; a página fala com qualquer organizador universitário e o time recebe candidaturas menos comparáveis.

**Ação recomendada:** trazer para a landing um bloco curto de “perfil buscado no piloto”, explicitamente como hipótese de seleção, não como claim de mercado. O princípio aplicável é [escolher um ICP deliberadamente específico](https://x.com/richardrx/status/2056789797646029232).

### P1 — A prova visual é genérica para a hipótese de diferenciação

O dashboard fictício mostra faturamento, eventos, check-ins, canais e liquidação ([`constants.ts:132`](../src/lib/constants.ts#L132)). Isso comunica uma categoria de ticketing, mas não demonstra a hipótese estratégica de governança entre entidades, promoters, despesas, repasses e aprovações.

**Risco:** o visitante pode concluir que a WebIngressos é apenas outra ferramenta de venda de ingressos, justamente a categoria em que incumbentes e soluções caseiras já competem.

**Ação recomendada:** substituir ou complementar o painel com um único cenário demonstrativo rotulado, mostrando a cadeia venda → responsável → entrada → fechamento, com rateio e pendência de conciliação. Não usar números como resultado real. O princípio aplicável é [a promessa ter o tamanho da prova](https://x.com/richardrx/status/2034638793219694734).

### P1 — A qualificação do formulário tem ambiguidades e baixa aderência ao ICP

- “Tipo de evento” apresenta tipos de organização, como atlética e república ([`pilot-form.tsx:230`](../src/components/landing/pilot-form.tsx#L230), [`form-options.ts:16`](../src/lib/form-options.ts#L16)).
- As faixas “Até 300” e “300 a 1.000” se sobrepõem em 300 ([`form-options.ts:24`](../src/lib/form-options.ts#L24)).
- O formulário captura UF, mas não cidade; também não captura data do próximo evento, número de promoters ou existência de múltiplas entidades ([`pilot-form.tsx:275`](../src/components/landing/pilot-form.tsx#L275)).

**Risco:** o lead precisa interpretar o formulário e o time não consegue priorizar claramente os casos mais aderentes.

**Ação recomendada:** renomear o campo para “Quem organiza o evento?”, eliminar a sobreposição e adicionar apenas uma pergunta de alto sinal — por exemplo, janela do próximo evento, cidade ou operação com múltiplos responsáveis. O mecanismo é o filtro de ICP combinado com redução de carga cognitiva.

### P1 — A recuperação de erro não entrega o contato prometido

Em falha de rede ou API, o toast recomenda “entrar em contato diretamente” ([`pilot-form.tsx:102`](../src/components/landing/pilot-form.tsx#L102)), mas o formulário não oferece e-mail ou WhatsApp direto. O e-mail só aparece na política de privacidade ([`privacidade/page.tsx:70`](../src/app/privacidade/page.tsx#L70)).

**Ação recomendada:** adicionar um contato direto no estado de erro ou remover essa orientação. A recuperação deve reduzir, e não aumentar, a incerteza do lead.

### P1 — Privacidade e documentação operacional ainda reduzem confiança

A política é inicial e não define claramente base legal, retenção e fornecedores ([`privacidade/page.tsx:42`](../src/app/privacidade/page.tsx#L42)). O `SECURITY.md` ainda descreve um webhook configurável, enquanto a implementação atual usa Vercel Blob ([`SECURITY.md:14`](../SECURITY.md#L14), [`route.ts:115`](../src/app/api/subscribe/route.ts#L115)).

**Risco:** inconsistência documental antes da candidatura pode reduzir confiança e criar risco de operação ou conformidade.

**Ação recomendada:** concluir revisão jurídica, atualizar o documento de segurança e publicar somente compromissos que a operação realmente sustenta.

## Diagnóstico do funil

| Etapa        | Estado atual                                | Impacto comercial                                  |
| ------------ | ------------------------------------------- | -------------------------------------------------- |
| Aquisição    | Hero claro, alternativa caseira nomeada     | Bom ponto de partida para tráfego problem-aware    |
| Atenção      | CTA dominante e repetido                    | Reduz dispersão                                    |
| Prova        | Dashboard fictício e fluxo textual          | Honestidade alta, diferenciação baixa              |
| Qualificação | Organização, público e UF                   | Sinal insuficiente para o ICP prioritário          |
| Conversão    | Formulário com consentimento e persistência | Tecnicamente funcional, mas sem medição de etapa   |
| Follow-up    | Prazo de 48h declarado                      | Processo de resposta não comprovado                |
| Monetização  | Modelo indefinido                           | Não valida receita nem filtra orçamento            |
| Retenção     | Fora deste repositório                      | A aplicação operacional está corretamente separada |

## Validação técnica executada

- `pnpm check`: passou em formatação, lint, typecheck e build.
- ESLint: um warning preexistente em `.remember/tmp/last-ndc.ts`, sem erros.
- `next start` local: home, privacidade, confirmação e protótipo responderam `200`.
- `robots.txt`: bloqueia `/obrigado` e `/prototipo`.
- `sitemap.xml`: contém apenas home e privacidade.
- `POST /api/subscribe`: JSON malformado e schema inválido retornaram `400`; origem externa retornou `403`; payload válido sem token Blob local retornou `503`, como esperado na configuração sem credencial.
- Não existe suíte de testes automatizados no repositório; `pnpm check` é o gate técnico documentado.

## Limites da auditoria

- Não houve teste manual em navegador real, leitor de tela, viewport móvel ou Lighthouse.
- Não houve validação de produção, Preview, DNS, token Blob ou capacidade de resposta do time.
- Não há dados de tráfego, cliques, candidaturas ou entrevistas; portanto, as recomendações de conversão são hipóteses priorizadas, não resultados de experimento.
- Não foi aplicada A/B testing. Com o volume atual desconhecido, entrevistas e observação qualitativa devem preceder testes estatísticos subdimensionados, conforme o princípio [não apostar em A/B test sem amostra](https://x.com/richardrx/status/2061463480868229189).

## Ordem de execução recomendada

1. Definir modelo e oferta do piloto, critérios de seleção e responsável pelo lead.
2. Corrigir a promessa de 48 horas ou criar o processo que a sustenta.
3. Instrumentar CTA, formulário, resultado e atribuição de origem.
4. Publicar o perfil buscado no piloto e corrigir a semântica do formulário.
5. Exibir um cenário demonstrativo do diferencial de rateio e fechamento.
6. Só então conduzir entrevistas e experimentos com uma métrica primária: candidatura qualificada que chega a uma conversa aceita pelo organizador.

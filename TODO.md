# TODO — WebIngressos Page

Checklist de lançamento do site público `webingressos.com.br`.

- [x] Executar `pnpm install --lockfile-only` e versionar `pnpm-lock.yaml`.
- [x] Após versionar o lockfile, tornar `--frozen-lockfile` obrigatório na CI e avaliar cache do store somente entre jobs confiáveis.
- [x] Persistir candidaturas em Blob privado via `api/subscribe`, com pathname determinístico por `submissionId`.
- [ ] Testar sucesso, recusa, payload inválido, corpo excessivo e reenvio idempotente do endpoint de candidatura em Preview/Production.
- [ ] Submeter a Política de Privacidade à revisão jurídica.
- [ ] Definir a base legal e revisar Vercel Analytics/Speed Insights.
- [x] Validar o domínio no projeto Vercel.
- [x] Executar `pnpm format:check`, `pnpm lint`, `pnpm typecheck` e `pnpm build`.
- [ ] Testar responsividade em iPhone e desktop.
- [ ] Testar navegação por teclado e leitor de tela.

Este repositório continua restrito à landing e à candidatura ao piloto. A
plataforma operacional de `app.webingressos.com.br` deve permanecer em outro
repositório.

## P0 — bloqueadores antes da produção

- [ ] Substituir o armazenamento em `/tmp/webingressos-leads` por banco, KV ou
      webhook com persistência durável.
- [ ] Definir o contrato de recuperação, duplicidade, falha e reprocessamento
      dos leads; não registrar PII nos logs.
- [ ] Testar o `POST /api/subscribe` em produção: sucesso, payload inválido
      (`400`), JSON malformado, falha do armazenamento e repetição do envio.
- [ ] Adicionar rate limiting, honeypot ou outra proteção antispam antes de
      expor o formulário a tráfego público.
- [ ] Revisar juridicamente a Política de Privacidade, a base legal, o texto de
      consentimento, o prazo de retenção, a exclusão e os fornecedores que
      recebem dados.
- [ ] Configurar e validar na Vercel `NEXT_PUBLIC_SITE_URL`, o projeto de
      produção, o domínio customizado, DNS, HTTPS e redirecionamentos canônicos.
- [ ] Executar `pnpm check` no commit de release e guardar o resultado da CI.
- [ ] Fazer smoke test no Preview e em Production, incluindo formulário,
      página de confirmação, política de privacidade, links, sitemap e robots.
- [ ] Revisar todas as claims da landing: mockups e métricas fictícias devem
      estar identificados como prévia/conceito ou ser substituídos por conteúdo
      genérico; remover promessas não comprovadas.

## P1 — operação do piloto

- [ ] Adicionar rate limiting distribuído ao endpoint.
- [ ] Adicionar proteção antispam (honeypot/rate limit) compatível com a
      política de privacidade — ainda não implementada no `route.ts`/schema do
      formulário.
- [x] Restringir o Blob de candidaturas ao modo privado.
- [ ] Definir quem recebe, acompanha e responde cada candidatura.
- [ ] Criar o pipeline de leads com os estados: novo, qualificado, entrevista,
      piloto e descartado.
- [ ] Restringir o acesso ao destino dos leads e registrar responsáveis.
- [ ] Definir retenção, exportação, exclusão e atendimento de solicitações dos
      titulares.
- [ ] Configurar monitoramento de erros, alertas e um procedimento de resposta
      a incidentes.
- [ ] Definir backup e executar um teste documentado de restauração da solução
      escolhida para armazenar os leads.
- [ ] Confirmar a base legal e a configuração dos eventos do Vercel Analytics
      e Speed Insights, sem coletar PII.
- [ ] Definir roteiro de entrevista e critérios objetivos para selecionar os
      primeiros eventos do piloto.
- [ ] Medir o funil: visita, clique no CTA, início, erro e conclusão do
      formulário.

## P1 — qualidade e acessibilidade

- [ ] Validar viewport móvel e desktop em navegadores suportados.
- [ ] Testar teclado, foco visível, leitor de tela, contraste e mensagens de
      erro do formulário.
- [ ] Testar estados de envio, sucesso, repetição, timeout e falha do endpoint.
- [ ] Medir Lighthouse/Core Web Vitals em Preview equivalente à produção e
      corrigir regressões do bundle inicial.
- [ ] Confirmar que as seções permanecem Server Components e que o formulário
      continua carregado de forma preguiçosa abaixo da dobra.
- [ ] Verificar que não há cores fora dos tokens do design system nem controles
      de formulário com dimensão inadequada para marketing.

## P2 — depois do primeiro lançamento

- [ ] Criar testes automatizados para o schema e o endpoint de candidatura.
- [ ] Revisar a copy após as primeiras entrevistas, preservando o status de
      produto em validação e sem inventar resultados.
- [ ] Registrar casos reais, depoimentos ou métricas somente com autorização e
      evidência verificável.
- [ ] Substituir o mockup do hero por uma captura real apenas quando o produto
      operacional existir e puder ser apresentado publicamente.
- [ ] Manter a operação de eventos, autenticação, checkout, pagamentos,
      emissão, check-in e backoffice no repositório separado do app.

## Já atendido no repositório

- [x] `pnpm-lock.yaml` versionado e instalação com lockfile verificável.
- [x] Script `pnpm check` disponível para format, lint, typecheck e build.
- [x] Endpoint `POST /api/subscribe` com validação server-side e resposta `400`
      para dados inválidos.
- [x] Fluxo principal `/#piloto` e carregamento preguiçoso do formulário.

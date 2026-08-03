# TODO — WebIngressos Page

## P0 — antes de publicar

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

## P1 — validação comercial

- [ ] Definir responsável pelo acompanhamento dos leads.
- [ ] Criar pipeline com status: novo, qualificado, entrevista, piloto e descartado.
- [ ] Registrar origem da campanha sem incluir dados sensíveis na URL.
- [ ] Definir roteiro de entrevista e critérios objetivos de seleção.
- [ ] Medir visita, clique no CTA, início e conclusão do formulário.
- [ ] Revisar a copy após as primeiras dez entrevistas.

## P1 — segurança e operação

- [ ] Adicionar rate limiting distribuído ao endpoint.
- [x] Adicionar proteção antispam compatível com a política de privacidade.
- [ ] Configurar monitoramento de erros e alertas.
- [ ] Definir retenção e exclusão de candidaturas.
- [x] Restringir o Blob de candidaturas ao modo privado.
- [ ] Testar backup e restauração do sistema que receberá os dados.

## P2 — evolução

- [ ] Substituir o mockup de dashboard do hero por uma captura real do produto quando existir.
- [ ] Criar testes automatizados do schema e do endpoint.
- [ ] Criar variações de headline somente com hipótese e evento de conversão definidos.
- [ ] Adicionar casos reais apenas mediante autorização e evidência verificável.

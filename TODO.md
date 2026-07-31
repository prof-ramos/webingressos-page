# TODO — WebIngressos Page

## P0 — antes de publicar

- [ ] Executar `pnpm install` e versionar `pnpm-lock.yaml`.
- [ ] Após versionar o lockfile, tornar `--frozen-lockfile` obrigatório na CI e avaliar cache do store somente entre jobs confiáveis.
- [ ] Substituir a persistência de candidaturas em `/tmp` (`api/subscribe`) por um banco, KV ou webhook — hoje os dados não sobrevivem entre invocações na Vercel.
- [ ] Testar sucesso, recusa e payload inválido do endpoint de candidatura após a migração de armazenamento.
- [ ] Submeter a Política de Privacidade à revisão jurídica.
- [ ] Definir a base legal e revisar Vercel Analytics/Speed Insights.
- [ ] Validar o domínio no projeto Vercel.
- [ ] Executar `pnpm check`.
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
- [ ] Adicionar proteção antispam compatível com a política de privacidade.
- [ ] Configurar monitoramento de erros e alertas.
- [ ] Definir retenção e exclusão de candidaturas.
- [ ] Restringir acesso ao destino dos leads.
- [ ] Testar backup e restauração do sistema que receberá os dados.

## P2 — evolução

- [ ] Substituir o mockup de dashboard do hero por uma captura real do produto quando existir.
- [ ] Criar testes automatizados do schema e do endpoint.
- [ ] Criar variações de headline somente com hipótese e evento de conversão definidos.
- [ ] Adicionar casos reais apenas mediante autorização e evidência verificável.

# TODO — WebIngressos Page

## P0 — antes de publicar

- [ ] Executar `pnpm install` e versionar `pnpm-lock.yaml`.
- [ ] Após versionar o lockfile, tornar `--frozen-lockfile` obrigatório na CI e avaliar cache do store somente entre jobs confiáveis.
- [ ] Configurar `LEADS_WEBHOOK_URL` e `LEADS_WEBHOOK_BEARER_TOKEN`.
- [ ] Testar sucesso, recusa, timeout, duplicidade e payload inválido do webhook.
- [ ] Definir e validar `NEXT_PUBLIC_CONTACT_EMAIL`.
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
- [ ] Definir política de rotação do token do webhook.

## P2 — evolução

- [ ] Produzir identidade visual definitiva após validar o posicionamento.
- [ ] Criar testes automatizados do schema e do endpoint.
- [ ] Criar variações de headline somente com hipótese e evento de conversão definidos.
- [ ] Adicionar casos reais apenas mediante autorização e evidência verificável.

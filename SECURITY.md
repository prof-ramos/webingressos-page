# Security Policy

## Relato de vulnerabilidades

Não abra issue pública com credenciais, dados pessoais ou detalhes exploráveis. Use um canal privado definido pelo proprietário do repositório antes da publicação.

## Dados e segredos

- Nunca versione `.env.local`, tokens, segredos de integração ou dados de leads.
- Use variáveis criptografadas na Vercel e GitHub Actions.
- Revogue imediatamente qualquer segredo exposto.
- Não copie dados pessoais reais para fixtures, screenshots ou logs.

## Escopo atual

O formulário valida a candidatura no servidor e persiste os dados em um Blob
privado da Vercel, usando `BLOB_READ_WRITE_TOKEN`. A implementação atual não
encaminha candidaturas para um webhook configurável. Honeypot, validação e
limite de corpo reduzem abuso básico, mas não substituem rate limiting,
antispam, monitoramento, controle de acesso, retenção e resposta a incidentes.

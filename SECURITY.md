# Security Policy

## Relato de vulnerabilidades

Não abra issue pública com credenciais, dados pessoais ou detalhes exploráveis. Use um canal privado definido pelo proprietário do repositório antes da publicação.

## Dados e segredos

- Nunca versione `.env.local`, tokens, segredos de webhook ou dados de leads.
- Use variáveis criptografadas na Vercel e GitHub Actions.
- Revogue imediatamente qualquer segredo exposto.
- Não copie dados pessoais reais para fixtures, screenshots ou logs.

## Escopo atual

O formulário encaminha dados a um webhook configurável. Honeypot, validação e limite de corpo reduzem abuso básico, mas não substituem rate limiting, antispam, monitoramento e controles no destino dos dados.

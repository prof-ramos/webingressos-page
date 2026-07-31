# WebIngressos Landing Page

Landing page comercial e de captação de organizadores parceiros para o programa piloto da WebIngressos. 

O site foca exclusivamente em B2B (organizadores de eventos, atléticas, repúblicas e produtores) para validar o programa piloto.

## Stack
- Next.js (App Router) + React + TypeScript
- Tailwind CSS + shadcn/ui (estética confiável, energética e mobile-first)
- React Hook Form + Zod (validação de formulário)
- Lucide React (ícones)

## Desenvolvimento Local

1. Instale as dependências:
```bash
pnpm install
```

2. Copie o arquivo de variáveis de ambiente:
```bash
cp .env.example .env.local
```

3. Execute o servidor de desenvolvimento:
```bash
pnpm dev
```

Acesse em `http://localhost:3000`.

## Build e Deploy

Para gerar a build de produção:
```bash
pnpm build
```

O repositório já está preparado para deploy automático na Vercel. Basta conectar o branch `main` ao projeto na Vercel.

## Fluxo do Usuário
- `/`: Landing page com formulário de captação.
- `/obrigado`: Página de confirmação após o envio do formulário.
- `/privacidade`: Política de privacidade mínima.

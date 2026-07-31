# Vídeo de apresentação WebIngressos

Composição Remotion horizontal, em 1920×1080 a 30 fps, com aproximadamente 20 segundos.

## Assets locais

Os dois arquivos ProRes usados pela composição ficam em `public/assets/` e são ignorados pelo Git
porque são assets locais fornecidos para esta produção:

- `animated-flat-design-event-ticket-icons.mov`
- `flat-design-ticket-tear-reveal-animation.mov`

Para preparar os assets em uma nova máquina:

```bash
mkdir -p public/assets
cp /caminho/animated-flat-design-event-ticket-icons.mov public/assets/
cp /caminho/flat-design-ticket-tear-reveal-animation.mov public/assets/
```

## Comandos

```bash
npm install
npm run lint
npm run dev
npx remotion render WebIngressosPresentation out/webingressos-apresentacao.mp4
```

O decoder `@mediabunny/prores` é registrado em `src/index.ts` porque os assets são Apple ProRes.

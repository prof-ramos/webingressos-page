import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WebIngressos",
    short_name: "WebIngressos",
    description: "Programa piloto de gestão e venda de ingressos para eventos universitários.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f8fb",
    theme_color: "#6d3df5",
    lang: "pt-BR",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  }
}

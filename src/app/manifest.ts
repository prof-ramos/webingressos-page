import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WebIngressos",
    short_name: "WebIngressos",
    description: "Gestão de vendas, promoters, check-in e prestação de contas para eventos universitários.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#10b981",
  }
}

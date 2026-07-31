import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/obrigado/",
    },
    sitemap: "https://webingressos.com.br/sitemap.xml",
  }
}

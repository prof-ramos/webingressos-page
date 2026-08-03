import { ImageResponse } from "next/og"

export const alt = "WebIngressos — gestão de ingressos para eventos universitários"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#f7fbf8",
        color: "#123126",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        padding: "80px",
        width: "100%",
      }}
    >
      <div style={{ color: "#0e6340", display: "flex", fontSize: 30, fontWeight: 700 }}>
        WEBINGRESSOS
      </div>
      <div
        style={{ display: "flex", fontSize: 72, fontWeight: 800, lineHeight: 1.08, marginTop: 28 }}
      >
        Venda ingressos sem perder o controle do evento.
      </div>
      <div style={{ color: "#557066", display: "flex", fontSize: 30, marginTop: 30 }}>
        Gestão para eventos universitários.
      </div>
    </div>,
    size,
  )
}

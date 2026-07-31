import { ImageResponse } from "next/og"

export const alt = "WebIngressos — gestão para eventos universitários"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "linear-gradient(135deg, #0b1020 0%, #23134f 55%, #0b5361 100%)",
        color: "white",
        padding: "68px 78px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 34, fontWeight: 700 }}
      >
        <div
          style={{
            width: 58,
            height: 58,
            borderRadius: 18,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#7c4dff",
            fontSize: 30,
          }}
        >
          W
        </div>
        WebIngressos
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 980 }}>
        <div style={{ fontSize: 72, lineHeight: 1.05, letterSpacing: "-3px", fontWeight: 750 }}>
          Venda ingressos sem perder o controle do evento.
        </div>
        <div style={{ fontSize: 30, lineHeight: 1.4, color: "#cbd5e1" }}>
          Vendas, promoters, check-in e prestação de contas para eventos universitários.
        </div>
      </div>
    </div>,
    size,
  )
}

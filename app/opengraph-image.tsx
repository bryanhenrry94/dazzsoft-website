import { ImageResponse } from "next/og";

export const alt = "DAZZSOFT - Desarrollo de Software a Medida";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0d1117",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(6,182,212,0.25), transparent 45%), radial-gradient(circle at 80% 75%, rgba(6,182,212,0.15), transparent 40%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div
            style={{
              width: 22,
              height: 22,
              borderRadius: 6,
              backgroundColor: "#22d3ee",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 700,
              letterSpacing: -2,
              color: "#ffffff",
            }}
          >
            <span>DAZZ</span>
            <span style={{ color: "#22d3ee" }}>SOFT</span>
          </div>
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 32,
            color: "#94a3b8",
          }}
        >
          Desarrollo de Software a Medida · Consultoría Tecnológica
        </div>
      </div>
    ),
    { ...size }
  );
}

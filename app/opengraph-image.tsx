import { ImageResponse } from "next/og";

// Imagen Open Graph generada por la propia web (1200x630)
// Se sirve en /opengraph-image y Next añade las etiquetas og:image

export const alt =
  "Jorge Calleja — Arreglo webs del Kit Digital que no funcionan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #150d26 0%, #2a1a4a 60%, #1e1b4b 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Cohete */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <svg width="88" height="88" viewBox="0 0 48 48" fill="none">
            <path d="M21.5 34 L24 45 L26.5 34 Z" fill="#22d3ee" />
            <path
              d="M17 25 C13.5 27 11 31 10.5 35 C13.5 33.5 16 31.5 17.5 29.5 Z"
              fill="#9333ea"
            />
            <path
              d="M31 25 C34.5 27 37 31 37.5 35 C34.5 33.5 32 31.5 30.5 29.5 Z"
              fill="#9333ea"
            />
            <path
              d="M24 3 C29.5 7.5 32 15 32 21.5 C32 26.5 30 30.5 28 33 L20 33 C18 30.5 16 26.5 16 21.5 C16 15 18.5 7.5 24 3 Z"
              fill="#6d5bd0"
            />
            <circle cx="24" cy="17" r="4.2" fill="#0f0a1e" />
            <circle cx="24" cy="17" r="2.8" fill="#22d3ee" />
          </svg>
          <div
            style={{
              display: "flex",
              fontSize: "36px",
              fontWeight: 700,
              color: "#c4b5fd",
            }}
          >
            jorgecalleja.dev
          </div>
        </div>

        {/* Titular */}
        <div
          style={{
            display: "flex",
            fontSize: "64px",
            fontWeight: 800,
            lineHeight: 1.15,
            marginTop: "48px",
            maxWidth: "1000px",
          }}
        >
          ¿Tu web del Kit Digital no te trae clientes?
        </div>

        {/* Subtítulo */}
        <div
          style={{
            display: "flex",
            fontSize: "32px",
            marginTop: "32px",
            color: "#a5b4fc",
          }}
        >
          Auditoría gratuita en 48h · Webs rápidas 99/100 · Málaga
        </div>
      </div>
    ),
    { ...size }
  );
}

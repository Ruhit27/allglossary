import { ImageResponse } from "next/og";
import { LISTED_GLOSSARIES } from "@/lib/glossaries";

export const dynamic = "force-static";

// The 1200×630 social card every page shares. Rendered once at build time.
const NODES = [
  { x: 32, y: 13, color: "#2563eb" },
  { x: 15, y: 51, color: "#dc2626" },
  { x: 49, y: 51, color: "#059669" },
];

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#ecebe8",
          color: "#1a1a1a",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg width={96} height={96} viewBox="0 0 64 64">
            <g stroke="#1a1a1a" strokeWidth={5} strokeLinecap="round">
              <line x1={32} y1={13} x2={15} y2={51} />
              <line x1={32} y1={13} x2={49} y2={51} />
              <line x1={21.8} y1={35.8} x2={42.2} y2={35.8} />
            </g>
            {NODES.map((n) => (
              <circle key={n.color} cx={n.x} cy={n.y} r={7} fill={n.color} stroke="#ecebe8" strokeWidth={2} />
            ))}
          </svg>
          <div style={{ display: "flex", fontSize: 44, fontWeight: 700 }}>
            allglossary<span style={{ color: "rgba(0,0,0,0.45)" }}>.xyz</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 800, letterSpacing: -3, lineHeight: 1 }}>
            Glossaries in plain English
          </div>
          <div style={{ marginTop: 28, fontSize: 34, color: "rgba(0,0,0,0.65)" }}>
            {LISTED_GLOSSARIES.map((g) => g.card.title).join(" · ")}
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}

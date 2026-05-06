import { ImageResponse } from "next/og";

export const alt = "Tarun Singh — Full Stack Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
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
          background: "#0b0d12",
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 30% 0%, rgba(99,102,241,0.35), transparent), radial-gradient(ellipse 60% 50% at 100% 100%, rgba(244,114,182,0.25), transparent)",
          color: "#e8eaee",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: brand mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 28,
            fontFamily: "monospace",
            color: "#9aa0aa",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 12,
              background:
                "linear-gradient(135deg, #6366f1 0%, #c084fc 50%, #f472b6 100%)",
              color: "white",
              fontSize: 36,
              fontWeight: 800,
            }}
          >
            T
          </div>
          <div style={{ display: "flex" }}>
            <span
              style={{
                background:
                  "linear-gradient(135deg, #818cf8 0%, #c084fc 50%, #f472b6 100%)",
                backgroundClip: "text",
                color: "transparent",
                fontWeight: 700,
              }}
            >
              tarun
            </span>
            <span style={{ color: "#9aa0aa" }}>.dev</span>
          </div>
        </div>

        {/* Middle: name + title */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1,
              color: "#e8eaee",
              display: "flex",
            }}
          >
            Tarun Singh
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              display: "flex",
              background:
                "linear-gradient(135deg, #818cf8 0%, #c084fc 50%, #f472b6 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Full Stack Web Developer
          </div>
        </div>

        {/* Bottom: tech stack pills */}
        <div
          style={{
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            fontSize: 24,
          }}
        >
          {[
            "Next.js",
            "React",
            "TypeScript",
            "Django",
            "PostgreSQL",
            "AWS",
          ].map((tech) => (
            <div
              key={tech}
              style={{
                padding: "10px 22px",
                borderRadius: 10,
                background: "#11141b",
                border: "1px solid #1f2330",
                color: "#e8eaee",
                fontFamily: "monospace",
                display: "flex",
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}

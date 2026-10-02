import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

function OgCard({ forTwitter = false }: { forTwitter?: boolean }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "72px 80px",
        background: "#121212",
        backgroundImage:
          "radial-gradient(circle, rgba(220,220,230,0.14) 1.5px, transparent 1.5px)",
        backgroundSize: "28px 28px",
        border: "6px solid #a78bfa",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 34, color: "#a78bfa" }}>
        Hey, I&apos;m
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 108,
          fontWeight: 800,
          color: "#f3f3f3",
          lineHeight: 1,
          margin: "8px 0 12px",
        }}
      >
        Atishay Jain
      </div>
      <div style={{ display: "flex", fontSize: 38, color: "#c8c8c8" }}>
        Freelance Website Builder &amp; MERN Developer
      </div>
      <div style={{ display: "flex", marginTop: 28, gap: 16 }}>
        {["React", "Next.js", "Node.js", "MongoDB"].map((s) => (
          <div
            key={s}
            style={{
              display: "flex",
              fontSize: 28,
              color: "#f3f3f3",
              border: "2px solid #787884",
              borderRadius: 999,
              padding: "8px 22px",
              background: "#232329",
            }}
          >
            {s}
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 28,
          fontSize: 28,
          color: "#9a9aa2",
        }}
      >
        {forTwitter ? "atishayjain.engineer" : "atishayjain.engineer • open to freelance + internships"}
      </div>
    </div>
  );
}

export default function OpengraphImage() {
  return new ImageResponse(<OgCard />, { ...size });
}

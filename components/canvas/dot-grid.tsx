"use client";

export function DotGrid({ x, y }: { x: number; y: number }) {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        backgroundImage: "radial-gradient(circle, var(--grid-dot) 1.3px, transparent 1.3px)",
        backgroundSize: "36px 36px",
        backgroundPosition: `${x * 0.08}px ${y * 0.08}px`,
      }}
    />
  );
}

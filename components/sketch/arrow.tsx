"use client";

import { useEffect, useRef } from "react";
import rough from "roughjs";
import { createSketchPathOptions, strokeForTone } from "@/lib/sketch/rough";
import { cn } from "@/lib/utils";

type SketchArrowProps = {
  width?: number;
  height?: number;
  path?: string;
  label?: string;
  className?: string;
  stroke?: "accent" | "ink" | "muted";
};

const strokeMap = {
  accent: "var(--sketch-accent)",
  ink: "var(--sketch-ink)",
  muted: "var(--sketch-border-soft)",
} as const;

export function SketchArrow({
  width = 320,
  height = 120,
  path = "M 8 80 C 90 8, 210 8, 300 55 L 288 36 M 300 55 L 274 66",
  label,
  className,
  stroke = "accent",
}: SketchArrowProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    svg.replaceChildren();
    const rc = rough.svg(svg);
    const node = rc.path(path, {
      ...createSketchPathOptions({ strokeTone: "default" }),
      stroke: strokeMap[stroke] ?? strokeForTone("default"),
      strokeWidth: 2.75,
      roughness: 1.6,
      bowing: 1.6,
    });
    svg.appendChild(node);
  }, [path, stroke]);

  return (
    <span className={cn("pointer-events-none inline-flex items-end gap-3 font-hand text-2xl text-[var(--sketch-accent)]", className)}>
      <svg ref={svgRef} width={width} height={height} aria-hidden="true" />
      {label ? <span className="rotate-[-3deg] whitespace-nowrap">{label}</span> : null}
    </span>
  );
}

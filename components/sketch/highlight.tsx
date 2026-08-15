"use client";

import { useEffect, useRef } from "react";
import rough from "roughjs";
import { createSketchPathOptions } from "@/lib/sketch/rough";
import { cn } from "@/lib/utils";

type SketchHighlightProps = {
  children: React.ReactNode;
  tone?: "accent" | "yellow";
  className?: string;
};

const toneStroke = {
  accent: "var(--sketch-accent)",
  yellow: "#f4c542",
} as const;

export function SketchHighlight({ children, tone = "accent", className }: SketchHighlightProps) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const svg = svgRef.current;
    if (!wrap || !svg) return;

    const draw = () => {
      const width = wrap.offsetWidth;
      if (width === 0) return;
      svg.setAttribute("width", String(width));
      svg.replaceChildren();
      const rc = rough.svg(svg);
      const node = rc.path(`M 2 10 C ${width * 0.3} 2, ${width * 0.65} 14, ${width - 2} 8`, {
        ...createSketchPathOptions({ strokeTone: "accent" }),
        stroke: toneStroke[tone],
        strokeWidth: 4,
        roughness: 1.5,
      });
      svg.appendChild(node);
    };

    draw();
    const observer = new ResizeObserver(draw);
    observer.observe(wrap);
    return () => observer.disconnect();
  }, [tone]);

  return (
    <span ref={wrapRef} className={cn("relative inline-block", className)}>
      {children}
      <svg
        ref={svgRef}
        height={18}
        className="pointer-events-none absolute -bottom-1 left-0"
        aria-hidden="true"
      />
    </span>
  );
}

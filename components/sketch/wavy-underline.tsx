"use client";

import { useEffect, useRef } from "react";
import rough from "roughjs";
import { createSketchPathOptions } from "@/lib/sketch/rough";
import { cn } from "@/lib/utils";

type SketchWavyUnderlineProps = {
  children: React.ReactNode;
  stroke?: string;
  strokeWidth?: number;
  className?: string;
};

export function SketchWavyUnderline({
  children,
  stroke = "var(--sketch-accent)",
  strokeWidth = 5,
  className,
}: SketchWavyUnderlineProps) {
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

      const node = rc.path(
        `M 2 10 C ${width * 0.15} 4, ${width * 0.25} 16, ${width * 0.4} 8 C ${width * 0.55} 0, ${width * 0.65} 18, ${width * 0.8} 6 C ${width * 0.9} 0, ${width * 0.95} 14, ${width - 2} 10`,
        {
          ...createSketchPathOptions({ strokeTone: "accent" }),
          stroke,
          strokeWidth,
          roughness: 1.6,
          bowing: 1.8,
        },
      );
      svg.appendChild(node);
    };

    draw();
    const observer = new ResizeObserver(draw);
    observer.observe(wrap);
    return () => observer.disconnect();
  }, [stroke, strokeWidth]);

  return (
    <span ref={wrapRef} className={cn("relative inline-block", className)}>
      {children}
      <svg
        ref={svgRef}
        height={22}
        className="pointer-events-none absolute -bottom-1 left-0"
        aria-hidden="true"
      />
    </span>
  );
}

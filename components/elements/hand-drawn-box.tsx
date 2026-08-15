"use client";

import { useEffect, useRef } from "react";
import rough from "roughjs";
import { cn } from "@/lib/utils";

type HandDrawnBoxProps = {
  width: number;
  height: number;
  stroke?: string;
  fill?: string;
  roughness?: number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export function HandDrawnBox({
  width,
  height,
  stroke = "var(--stroke)",
  fill = "transparent",
  roughness = 1.25,
  className,
  style,
  children,
}: HandDrawnBoxProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    svg.replaceChildren();
    const rc = rough.svg(svg);
    const node = rc.rectangle(8, 8, width - 16, height - 16, {
      stroke,
      strokeWidth: 4,
      fill,
      fillStyle: fill === "transparent" ? "solid" : "hachure",
      fillWeight: 1.2,
      hachureGap: 18,
      roughness,
      bowing: 1.1,
    });
    svg.appendChild(node);
  }, [fill, height, roughness, stroke, width]);

  return (
    <div className={cn("relative", className)} style={{ width, height, ...style }}>
      <svg
        ref={svgRef}
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        width={width}
        height={height}
        aria-hidden="true"
      />
      <div className="relative z-[1] h-full w-full">{children}</div>
    </div>
  );
}

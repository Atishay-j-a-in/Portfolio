"use client";

import { useEffect, useRef } from "react";
import rough from "roughjs";
import { cn } from "@/lib/utils";

type ArrowProps = {
  width?: number;
  height?: number;
  path?: string;
  label?: string;
  className?: string;
  stroke?: string;
};

export function HandDrawnArrow({
  width = 760,
  height = 280,
  path = "M 20 190 C 210 20, 510 20, 710 130 L 680 82 M 710 130 L 650 150",
  label,
  className,
  stroke = "var(--accent)",
}: ArrowProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    svg.replaceChildren();
    const rc = rough.svg(svg);
    const node = rc.path(path, {
      stroke,
      strokeWidth: 5,
      roughness: 1.9,
      bowing: 2,
      fill: "none",
    });
    svg.appendChild(node);
  }, [path, stroke]);

  return (
    <div className={cn("pointer-events-none absolute font-hand text-[130px] text-accent", className)}>
      <svg ref={svgRef} width={width} height={height} aria-hidden="true" />
      {label ? <span className="absolute left-16 top-0 rotate-[-4deg] whitespace-nowrap">{label}</span> : null}
    </div>
  );
}

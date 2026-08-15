"use client";

import { useEffect, useRef } from "react";
import rough from "roughjs";
import { createSketchEllipseOptions, createSketchPathOptions, createSketchRectangleOptions } from "@/lib/sketch/rough";
import { cn } from "@/lib/utils";

type DoodleType = "star" | "coffee" | "rocket" | "laptop" | "cat" | "circle" | "cross" | "heart" | "lightning" | "checkmark" | "arrow-up" | "sparkle" | "diamond";

type SketchDoodleProps = {
  type: DoodleType;
  className?: string;
  interactive?: boolean;
  stroke?: string;
};

function drawDoodle(svg: SVGSVGElement, type: DoodleType, stroke: string) {
  const rc = rough.svg(svg);
  const strokePath = { ...createSketchPathOptions({ strokeTone: "default" }), stroke, strokeWidth: 2.25 };
  const strokeRect = { ...createSketchRectangleOptions({ strokeTone: "default" }), stroke, strokeWidth: 2.25 };
  const strokeEllipse = { ...createSketchEllipseOptions({ strokeTone: "default" }), stroke, strokeWidth: 2.25 };

  switch (type) {
    case "star":
      svg.appendChild(rc.path("M 50 8 L 61 39 L 94 40 L 67 60 L 77 92 L 50 71 L 23 92 L 33 60 L 6 40 L 39 39 Z", strokePath));
      break;
    case "coffee":
      svg.appendChild(rc.rectangle(18, 30, 46, 42, strokeRect));
      svg.appendChild(rc.path("M 64 38 C 84 36, 84 62, 64 60", strokePath));
      svg.appendChild(rc.path("M 30 20 C 28 12, 36 10, 34 4 M 44 20 C 42 12, 50 10, 48 4", strokePath));
      svg.appendChild(rc.line(8, 78, 92, 78, strokePath));
      break;
    case "rocket":
      svg.appendChild(rc.path("M 50 6 C 70 24, 74 52, 62 76 L 38 76 C 26 52, 30 24, 50 6 Z", strokePath));
      svg.appendChild(rc.circle(50, 38, 16, strokeEllipse));
      svg.appendChild(rc.path("M 38 76 L 30 92 M 62 76 L 70 92 M 50 76 L 50 96", strokePath));
      break;
    case "laptop":
      svg.appendChild(rc.rectangle(20, 22, 60, 40, strokeRect));
      svg.appendChild(rc.path("M 12 74 L 24 62 L 76 62 L 88 74 Z", strokePath));
      break;
    case "cat":
      svg.appendChild(rc.path("M 24 30 L 34 12 L 44 28 M 56 28 L 66 12 L 76 30", strokePath));
      svg.appendChild(rc.rectangle(20, 26, 60, 50, { ...strokeRect, roughness: 1.3 }));
      svg.appendChild(rc.circle(38, 48, 4, { ...strokeEllipse, fill: stroke }));
      svg.appendChild(rc.circle(62, 48, 4, { ...strokeEllipse, fill: stroke }));
      svg.appendChild(rc.path("M 46 58 L 50 62 L 54 58 M 12 46 L 24 50 M 12 58 L 24 58 M 88 46 L 76 50 M 88 58 L 76 58", strokePath));
      break;
    case "circle":
      svg.appendChild(rc.circle(50, 50, 76, { ...strokeEllipse, roughness: 1.6 }));
      break;
    case "cross":
      svg.appendChild(rc.path("M 20 20 L 80 80 M 80 20 L 20 80", { ...strokePath, roughness: 1.6 }));
      break;
    case "heart":
      svg.appendChild(rc.path("M 50 88 C 20 60, 4 40, 20 24 C 32 12, 44 16, 50 30 C 56 16, 68 12, 80 24 C 96 40, 80 60, 50 88 Z", strokePath));
      break;
    case "lightning":
      svg.appendChild(rc.path("M 55 6 L 30 50 L 48 50 L 42 94 L 75 44 L 55 44 Z", strokePath));
      break;
    case "checkmark":
      svg.appendChild(rc.path("M 18 52 L 40 76 L 84 20", { ...strokePath, strokeWidth: 3.5 }));
      break;
    case "arrow-up":
      svg.appendChild(rc.path("M 50 80 L 50 20 M 50 20 L 30 40 M 50 20 L 70 40", strokePath));
      break;
    case "sparkle":
      svg.appendChild(rc.path("M 50 8 L 56 38 L 86 44 L 56 50 L 50 80 L 44 50 L 14 44 L 44 38 Z", strokePath));
      break;
    case "diamond":
      svg.appendChild(rc.path("M 50 8 L 82 50 L 50 92 L 18 50 Z", strokePath));
      break;
  }
}

export function SketchDoodle({ type, className, interactive = false, stroke = "var(--sketch-ink)" }: SketchDoodleProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    svg.replaceChildren();
    drawDoodle(svg, type, stroke);
  }, [type, stroke]);

  const svg = <svg ref={svgRef} width={100} height={100} viewBox="0 0 100 100" aria-hidden="true" className="overflow-visible" />;

  if (!interactive) {
    return <span className={cn("pointer-events-none inline-block text-[var(--sketch-ink)]", className)}>{svg}</span>;
  }

  return (
    <button
      type="button"
      aria-label={`${type} doodle`}
      className={cn(
        "inline-block text-[var(--sketch-ink)] transition-transform duration-300 ease-out hover:-rotate-6 hover:scale-110 hover:text-[var(--sketch-accent)]",
        className,
      )}
    >
      {svg}
    </button>
  );
}

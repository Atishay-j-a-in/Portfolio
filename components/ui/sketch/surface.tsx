"use client";

import { cva, type VariantProps } from "class-variance-authority";
import rough from "roughjs";
import { useEffect, useRef, useState } from "react";
import { createSketchRectangleOptions, strokeForTone, type SketchStrokeTone } from "@/lib/sketch/rough";
import { sketchInteractiveLift, sketchShadow } from "@/lib/sketch/variants";
import { cn } from "@/lib/utils";

type SketchSurfaceTone =
  | "paper"
  | "surface"
  | "card"
  | "accent"
  | "note-yellow"
  | "note-blue"
  | "note-green"
  | "note-red"
  | "note-lilac";

const surfaceToneStyles: Record<SketchSurfaceTone, React.CSSProperties> = {
  paper: { backgroundColor: "var(--sketch-paper)", color: "var(--sketch-ink)" },
  surface: { backgroundColor: "var(--sketch-surface)", color: "var(--sketch-ink)" },
  card: { backgroundColor: "var(--sketch-card)", color: "var(--sketch-ink)" },
  accent: { backgroundColor: "var(--sketch-accent)", color: "#ffffff" },
  "note-yellow": { backgroundColor: "var(--sketch-note-yellow)", color: "var(--sketch-ink)" },
  "note-blue": { backgroundColor: "var(--sketch-note-blue)", color: "var(--sketch-ink)" },
  "note-green": { backgroundColor: "var(--sketch-note-green)", color: "var(--sketch-ink)" },
  "note-red": { backgroundColor: "var(--sketch-note-red)", color: "var(--sketch-ink)" },
  "note-lilac": { backgroundColor: "var(--sketch-note-lilac)", color: "var(--sketch-ink)" },
};

const surfaceVariants = cva(
  [
    "relative border",
    sketchShadow,
    "transition-[transform,box-shadow,background-color,border-color] duration-200 ease-out",
  ],
  {
    variants: {
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
      radius: {
        sm: "rounded-[var(--sketch-radius-sm)]",
        md: "rounded-[var(--sketch-radius-md)]",
        lg: "rounded-[var(--sketch-radius-lg)]",
      },
      interactive: {
        true: sketchInteractiveLift,
        false: "",
      },
    },
    defaultVariants: {
      padding: "md",
      radius: "md",
      interactive: false,
    },
  },
);

export type SketchSurfaceProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof surfaceVariants> & {
    tone?: SketchSurfaceTone;
    stroke?: SketchStrokeTone;
    rough?: boolean;
    strokeWidth?: number;
  };

export function SketchSurface({
  className,
  children,
  tone = "surface",
  padding,
  radius,
  interactive,
  rough: withRough = true,
  stroke = "default",
  strokeWidth,
  style,
  ...props
}: SketchSurfaceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;

      setSize({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
    });

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const svg = svgRef.current;
    if (!withRough || !svg || size.width === 0 || size.height === 0) return;

    svg.setAttribute("width", String(size.width));
    svg.setAttribute("height", String(size.height));
    svg.setAttribute("viewBox", `0 0 ${size.width} ${size.height}`);

    svg.replaceChildren();
    const rc = rough.svg(svg);
    const inset = 6;
    const node = rc.rectangle(
      inset,
      inset,
      Math.max(size.width - inset * 2, 0),
      Math.max(size.height - inset * 2, 0),
      createSketchRectangleOptions({ strokeTone: stroke, ...(strokeWidth !== undefined && { strokeWidth }) }),
    );

    svg.appendChild(node);
  }, [size.height, size.width, stroke, withRough]);

  return (
    <div
      ref={containerRef}
      className={cn(surfaceVariants({ padding, radius, interactive }), className)}
      style={{
        ...surfaceToneStyles[tone],
        borderColor: withRough ? "transparent" : strokeForTone(stroke),
        boxShadow: "0 18px 48px var(--sketch-shadow)",
        ...style,
      }}
      {...props}
    >
      {withRough ? (
        <svg
          ref={svgRef}
          className="pointer-events-none absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
          aria-hidden="true"
        />
      ) : null}
      <div className="relative z-[1]">{children}</div>
   </div>
  );
}

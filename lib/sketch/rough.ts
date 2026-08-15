import type { Options } from "roughjs/bin/core";

export type SketchStrokeTone = "soft" | "default" | "accent";

const strokeToneMap: Record<SketchStrokeTone, string> = {
  soft: "var(--sketch-border-soft)",
  default: "var(--sketch-border)",
  accent: "var(--sketch-accent)",
};

export function strokeForTone(tone: SketchStrokeTone = "default") {
  return strokeToneMap[tone];
}

export function createSketchRectangleOptions({
  strokeTone = "default",
  fill = "transparent",
  fillStyle = "solid",
  roughness = 1.05,
  bowing = 0.9,
  strokeWidth = 2.25,
}: {
  strokeTone?: SketchStrokeTone;
  fill?: string;
  fillStyle?: Options["fillStyle"];
  roughness?: number;
  bowing?: number;
  strokeWidth?: number;
} = {}): Options {
  return {
    stroke: strokeForTone(strokeTone),
    strokeWidth,
    fill,
    fillStyle,
    roughness,
    bowing,
    preserveVertices: true,
  };
}

export function createSketchPathOptions({
  strokeTone = "default",
  roughness = 1.3,
  bowing = 1.15,
  strokeWidth = 3,
}: {
  strokeTone?: SketchStrokeTone;
  roughness?: number;
  bowing?: number;
  strokeWidth?: number;
} = {}): Options {
  return {
    stroke: strokeForTone(strokeTone),
    strokeWidth,
    roughness,
    bowing,
    fill: "none",
    preserveVertices: true,
  };
}

export function createSketchEllipseOptions({
  strokeTone = "default",
  fill = "transparent",
  fillStyle = "solid",
  roughness = 1.05,
  bowing = 0.9,
  strokeWidth = 2.25,
}: {
  strokeTone?: SketchStrokeTone;
  fill?: string;
  fillStyle?: Options["fillStyle"];
  roughness?: number;
  bowing?: number;
  strokeWidth?: number;
} = {}): Options {
  return {
    stroke: strokeForTone(strokeTone),
    strokeWidth,
    fill,
    fillStyle,
    roughness,
    bowing,
    preserveVertices: true,
  };
}

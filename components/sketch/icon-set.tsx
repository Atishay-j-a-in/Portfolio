import { cn } from "@/lib/utils";

type SketchIconProps = {
  size?: number;
  className?: string;
};

const baseProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  strokeWidth: 2.5,
};

export function SketchPointerIcon({ size = 20, className }: SketchIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={cn("shrink-0", className)} {...baseProps}>
      <path d="M4 4l7.5 16 1.7-6.5L20 12z" />
    </svg>
  );
}

export function SketchHandIcon({ size = 20, className }: SketchIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={cn("shrink-0", className)} {...baseProps}>
      <path d="M8 11.5V6a1.5 1.5 0 0 1 3 0v5" />
      <path d="M11 11.5V4.8a1.5 1.5 0 0 1 3 0v6.2" />
      <path d="M14 11.5V6.7a1.5 1.5 0 0 1 3 0v6.8l-1 3.4c-.4 1.3-1.6 2.1-3 2.1H9.5c-1 0-1.9-.5-2.4-1.4l-1.5-2.8c-.4-.8 0-1.9.9-2.3.5-.2 1-.1 1.5.2l1 1.2V11.5z" />
    </svg>
  );
}

export function SketchRectangleIcon({ size = 20, className }: SketchIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={cn("shrink-0", className)} {...baseProps}>
      <path d="M5 7h14v10H5z" />
    </svg>
  );
}

export function SketchDiamondIcon({ size = 20, className }: SketchIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={cn("shrink-0", className)} {...baseProps}>
      <path d="M12 3.5l8.5 8.5-8.5 8.5L3.5 12z" />
    </svg>
  );
}

export function SketchEllipseIcon({ size = 20, className }: SketchIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={cn("shrink-0", className)} {...baseProps}>
      <ellipse cx="12" cy="12" rx="7.5" ry="4.8" />
    </svg>
  );
}

export function SketchArrowIcon({ size = 20, className }: SketchIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={cn("shrink-0", className)} {...baseProps}>
      <path d="M5 12h12" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function SketchLineIcon({ size = 20, className }: SketchIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={cn("shrink-0", className)} {...baseProps}>
      <path d="M5 19L19 5" />
    </svg>
  );
}

export function SketchPencilIcon({ size = 20, className }: SketchIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={cn("shrink-0", className)} {...baseProps}>
      <path d="M5 19l8.8-2.2L18 10.8 13.2 6 9.2 10.2 7 19z" />
    </svg>
  );
}

export function SketchTextIcon({ size = 20, className }: SketchIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={cn("shrink-0", className)} {...baseProps}>
      <path d="M6 7h12" />
      <path d="M12 7v10" />
    </svg>
  );
}

export function SketchImageIcon({ size = 20, className }: SketchIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={cn("shrink-0", className)} {...baseProps}>
      <rect x="4" y="6" width="16" height="12" rx="1.5" />
      <path d="M7 13l3-3 3 3 3-3 2 2v6H6v-3z" />
      <circle cx="9" cy="9" r="1.4" />
    </svg>
  );
}

export function SketchEraserIcon({ size = 20, className }: SketchIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={cn("shrink-0", className)} {...baseProps}>
      <path d="M10 16L18 8l3 3-8 8H9" />
      <path d="M9 19l8.8-8.8" />
    </svg>
  );
}

export function SketchSelectionIcon({ size = 20, className }: SketchIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={cn("shrink-0", className)} {...baseProps}>
      <rect x="5" y="6" width="14" height="12" rx="1.2" />
      <path d="M9 9h6v6H9z" strokeDasharray="2 2" />
    </svg>
  );
}

export function SketchDotsIcon({ size = 20, className }: SketchIconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className={cn("shrink-0", className)} {...baseProps}>
      <circle cx="6" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="18" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

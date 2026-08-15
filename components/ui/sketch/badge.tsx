import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva("inline-flex items-center rounded-full border px-3 py-1 font-hand text-base leading-none", {
  variants: {
    tone: {
      accent: "text-white",
      success: "",
      warning: "",
      muted: "",
    },
  },
  defaultVariants: {
    tone: "accent",
  },
});

const badgeStyles = {
  accent: {
    backgroundColor: "var(--sketch-accent)",
    color: "#ffffff",
    borderColor: "var(--sketch-border)",
  },
  success: {
    backgroundColor: "var(--sketch-note-green)",
    color: "var(--sketch-ink)",
    borderColor: "var(--sketch-border)",
  },
  warning: {
    backgroundColor: "var(--sketch-note-yellow)",
    color: "var(--sketch-ink)",
    borderColor: "var(--sketch-border)",
  },
  muted: {
    backgroundColor: "transparent",
    color: "var(--sketch-muted)",
    borderColor: "color-mix(in srgb, var(--sketch-border-soft), transparent 36%)",
  },
} as const;

type SketchBadgeProps = React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>;

export function SketchBadge({ className, tone = "accent", style, ...props }: SketchBadgeProps) {
  const resolvedTone = tone ?? "accent";

  return <span className={cn(badgeVariants({ tone: resolvedTone }), className)} style={{ ...badgeStyles[resolvedTone], ...style }} {...props} />;
}

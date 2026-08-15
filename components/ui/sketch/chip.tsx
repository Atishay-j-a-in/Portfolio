import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const chipVariants = cva("inline-flex items-center rounded-full border font-hand leading-none", {
  variants: {
    tone: {
      surface: "",
      accent: "text-white",
      muted: "",
    },
    size: {
      sm: "px-3 py-2 text-base",
      md: "px-4 py-2.5 text-lg",
    },
  },
  defaultVariants: {
    tone: "surface",
    size: "md",
  },
});

const chipStyles = {
  surface: {
    backgroundColor: "color-mix(in srgb, var(--sketch-paper), transparent 3%)",
    color: "var(--sketch-ink)",
    borderColor: "color-mix(in srgb, var(--sketch-border-soft), transparent 36%)",
  },
  accent: {
    backgroundColor: "var(--sketch-accent)",
    color: "#ffffff",
    borderColor: "var(--sketch-border)",
  },
  muted: {
    backgroundColor: "transparent",
    color: "var(--sketch-muted)",
    borderColor: "color-mix(in srgb, var(--sketch-border-soft), transparent 42%)",
  },
} as const;

type SketchChipProps = React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof chipVariants>;

export function SketchChip({ className, tone = "surface", size, style, ...props }: SketchChipProps) {
  const resolvedTone = tone ?? "surface";

  return <span className={cn(chipVariants({ tone: resolvedTone, size }), className)} style={{ ...chipStyles[resolvedTone], ...style }} {...props} />;
}

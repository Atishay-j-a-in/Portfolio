import { cva, type VariantProps } from "class-variance-authority";
import { sketchFocusRing, sketchInteractiveLift } from "@/lib/sketch/variants";
import { cn } from "@/lib/utils";

const iconButtonVariants = cva(
  [
    "inline-flex size-12 items-center justify-center rounded-[14px] border",
    sketchFocusRing,
    sketchInteractiveLift,
  ],
  {
    variants: {
      variant: {
        chrome: "",
        ghost: "bg-transparent",
        accent: "",
      },
      active: {
        true: "text-white",
        false: "",
      },
    },
    defaultVariants: {
      variant: "chrome",
      active: false,
    },
  },
);

const iconButtonStyles = {
  chrome: {
    backgroundColor: "var(--panel)",
    color: "var(--sketch-ink)",
    borderColor: "color-mix(in srgb, var(--sketch-border-soft), transparent 38%)",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "var(--sketch-ink)",
    borderColor: "transparent",
  },
  accent: {
    backgroundColor: "var(--sketch-accent)",
    color: "#ffffff",
    borderColor: "var(--sketch-border)",
  },
} as const;

type SketchIconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof iconButtonVariants> & {
    label: string;
  };

export function SketchIconButton({ className, children, label, variant = "chrome", active, style, ...props }: SketchIconButtonProps) {
  const resolvedVariant = variant ?? "chrome";

  return (
    <button
      type="button"
      aria-label={label}
      className={cn(iconButtonVariants({ variant: resolvedVariant, active }), className)}
      style={{
        ...iconButtonStyles[resolvedVariant],
        ...(active ? { backgroundColor: "color-mix(in srgb, var(--sketch-accent), transparent 10%)" } : null),
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
}

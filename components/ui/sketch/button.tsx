import { cva, type VariantProps } from "class-variance-authority";
import { sketchFocusRing, sketchInteractiveLift } from "@/lib/sketch/variants";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center whitespace-nowrap border font-hand leading-none",
    "disabled:pointer-events-none disabled:opacity-55",
    sketchFocusRing,
    sketchInteractiveLift,
  ],
  {
    variants: {
      variant: {
        primary: "rounded-[18px]",
        secondary: "rounded-[18px]",
        ghost: "rounded-[18px]",
        toolbar: "rounded-[14px]",
      },
      size: {
        sm: "px-4 py-2 text-lg",
        md: "px-5 py-3 text-xl",
        lg: "px-7 py-4 text-2xl",
        hero: "px-8 py-4 text-2xl rounded-[24px]",
      },
    },
    defaultVariants: {
      variant: "secondary",
      size: "md",
    },
  },
);

const buttonStyles = {
  primary: {
    backgroundColor: "var(--sketch-accent)",
    color: "#ffffff",
    borderColor: "var(--sketch-border)",
    boxShadow: "10px 12px 0 color-mix(in srgb, var(--sketch-border), transparent 88%)",
  },
  secondary: {
    backgroundColor: "var(--sketch-paper)",
    color: "var(--sketch-ink)",
    borderColor: "var(--sketch-border)",
    boxShadow: "10px 12px 0 color-mix(in srgb, var(--sketch-border), transparent 90%)",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "var(--sketch-ink)",
    borderColor: "var(--sketch-border-soft)",
  },
  toolbar: {
    backgroundColor: "var(--sketch-paper)",
    color: "var(--sketch-ink)",
    borderColor: "color-mix(in srgb, var(--sketch-border-soft), transparent 38%)",
  },
} as const;

const heroButtonStyles = {
  primary: {
    backgroundColor: "var(--sketch-accent)",
    color: "#ffffff",
    borderColor: "var(--sketch-border)",
    boxShadow: "24px 28px 0 color-mix(in srgb, var(--sketch-border), transparent 82%)",
  },
  secondary: {
    backgroundColor: "var(--sketch-paper)",
    color: "var(--sketch-ink)",
    borderColor: "var(--sketch-border)",
    boxShadow: "24px 28px 0 color-mix(in srgb, var(--sketch-border), transparent 85%)",
  },
} as const;

export type SketchButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function SketchButton({ className, variant = "secondary", size, style, ...props }: SketchButtonProps) {
  const resolvedVariant = variant ?? "secondary";
  const isHero = size === "hero";
  const styles = isHero && (resolvedVariant === "primary" || resolvedVariant === "secondary")
    ? heroButtonStyles[resolvedVariant]
    : buttonStyles[resolvedVariant];

  return (
    <button
      className={cn(buttonVariants({ variant: resolvedVariant, size }), className)}
      style={{ ...styles, ...style }}
      {...props}
    />
  );
}

export { buttonVariants as sketchButtonVariants };

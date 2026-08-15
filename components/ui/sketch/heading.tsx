import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const headingVariants = cva("font-hand tracking-[-0.03em]", {
  variants: {
    size: {
      sm: "text-3xl",
      md: "text-4xl",
      lg: "text-5xl",
      xl: "text-6xl",
    },
    ink: {
      default: "text-sketch-ink",
      muted: "text-sketch-muted",
      accent: "text-sketch-accent",
    },
  },
  defaultVariants: {
    size: "lg",
    ink: "default",
  },
});

type SketchHeadingProps = React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants> & {
    level?: 1 | 2 | 3 | 4;
  };

export function SketchHeading({ className, level = 2, size, ink, ...props }: SketchHeadingProps) {
  const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4";
  return <Tag className={cn(headingVariants({ size, ink }), className)} {...props} />;
}

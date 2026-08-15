import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const bodyVariants = cva("font-sans", {
  variants: {
    size: {
      sm: "text-sm leading-6",
      md: "text-base leading-7",
      lg: "text-lg leading-8",
    },
    tone: {
      default: "text-sketch-body",
      muted: "text-sketch-muted",
    },
  },
  defaultVariants: {
    size: "md",
    tone: "default",
  },
});

type SketchBodyProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof bodyVariants> & {
    as?: "p" | "span" | "div";
  };

export function SketchBody({ as = "p", className, size, tone, ...props }: SketchBodyProps) {
  const Tag = as;
  return <Tag className={cn(bodyVariants({ size, tone }), className)} {...props} />;
}

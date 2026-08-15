import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const annotationVariants = cva("font-hand leading-none", {
  variants: {
    tone: {
      muted: "text-sketch-muted",
      accent: "text-sketch-accent",
      ink: "text-sketch-ink",
    },
  },
  defaultVariants: {
    tone: "muted",
  },
});

type SketchAnnotationProps = React.HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof annotationVariants> & {
    rotation?: number;
  };

export function SketchAnnotation({ className, rotation = -2, tone, style, ...props }: SketchAnnotationProps) {
  return (
    <p
      className={cn(annotationVariants({ tone }), className)}
      style={{ transform: `rotate(${rotation}deg)`, ...style }}
      {...props}
    />
  );
}

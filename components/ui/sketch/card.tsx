import { cva, type VariantProps } from "class-variance-authority";
import { SketchSurface, type SketchSurfaceProps } from "@/components/ui/sketch/surface";
import { cn } from "@/lib/utils";

const cardVariants = cva("", {
  variants: {
    size: {
      sm: "gap-3",
      md: "gap-4",
      lg: "gap-6",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type SketchCardProps = Omit<SketchSurfaceProps, "padding"> & VariantProps<typeof cardVariants>;

export function SketchCard({ className, size, tone = "card", interactive = true, ...props }: SketchCardProps) {
  return (
    <SketchSurface
      tone={tone}
      padding="lg"
      radius="lg"
      interactive={interactive}
      className={cn(cardVariants({ size }), className)}
      {...props}
    />
  );
}

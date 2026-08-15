import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { sketchFocusRing } from "@/lib/sketch/variants";
import { cn } from "@/lib/utils";

const textareaVariants = cva(
  [
    "w-full border bg-transparent font-sans leading-7 text-sketch-ink",
    "placeholder:text-sketch-muted resize-y",
    sketchFocusRing,
  ],
  {
    variants: {
      sketchSize: {
        sm: "min-h-[96px] rounded-[12px] px-3 py-2 text-base",
        md: "min-h-[120px] rounded-[14px] px-4 py-3 text-lg",
        lg: "min-h-[160px] rounded-[16px] px-5 py-4 text-xl",
      },
    },
    defaultVariants: {
      sketchSize: "md",
    },
  },
);

type SketchTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & VariantProps<typeof textareaVariants>;

export const SketchTextarea = forwardRef<HTMLTextAreaElement, SketchTextareaProps>(function SketchTextarea(props, ref) {
  const { className, sketchSize, style, ...rest } = props;
  return (
    <textarea
      ref={ref}
      className={cn(textareaVariants({ sketchSize }), className)}
      style={{
        borderColor: "color-mix(in srgb, var(--sketch-border-soft), transparent 28%)",
        boxShadow: "inset 0 1px 0 color-mix(in srgb, var(--sketch-border-soft), transparent 70%)",
        ...style,
      }}
      {...rest}
    />
  );
});

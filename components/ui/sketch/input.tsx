import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { sketchFocusRing } from "@/lib/sketch/variants";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  [
    "w-full border bg-transparent font-sans leading-7 text-sketch-ink",
    "placeholder:text-sketch-muted",
    sketchFocusRing,
  ],
  {
    variants: {
      sketchSize: {
        sm: "h-9 rounded-[12px] px-3 text-base",
        md: "h-11 rounded-[14px] px-4 text-lg",
        lg: "h-12 rounded-[16px] px-5 text-xl",
      },
    },
    defaultVariants: {
      sketchSize: "md",
    },
  },
);

type SketchInputProps = React.InputHTMLAttributes<HTMLInputElement> & VariantProps<typeof inputVariants>;

export const SketchInput = forwardRef<HTMLInputElement, SketchInputProps>(function SketchInput(props, ref) {
  const { className, sketchSize, style, ...rest } = props;
  return (
    <input
      ref={ref}
      className={cn(inputVariants({ sketchSize }), className)}
      style={{
        borderColor: "color-mix(in srgb, var(--sketch-border-soft), transparent 28%)",
        boxShadow: "inset 0 1px 0 color-mix(in srgb, var(--sketch-border-soft), transparent 70%)",
        ...style,
      }}
      {...rest}
    />
  );
});

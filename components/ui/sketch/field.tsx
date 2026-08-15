import { cn } from "@/lib/utils";
import { SketchAnnotation } from "@/components/ui/sketch/annotation";

type SketchFieldProps = {
  label?: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
  required?: boolean;
};

export function SketchField({ label, hint, error, children, className, required }: SketchFieldProps) {
  return (
    <label className={cn("flex flex-col gap-2", className)}>
      {label ? (
        <span className="font-hand text-2xl text-sketch-ink">
          {label}
          {required ? <span className="ml-1 text-sketch-accent">*</span> : null}
       </span>
      ) : null}
      {children}
      {error ? (
        <SketchAnnotation tone="accent" rotation={-2} className="text-base">
          {error}
       </SketchAnnotation>
      ) : hint ? (
        <SketchAnnotation tone="muted" rotation={-1} className="text-base">
          {hint}
       </SketchAnnotation>
      ) : null}
   </label>
  );
}

import { cn } from "@/lib/utils";

export function SketchDivider({
  orientation = "horizontal",
  className,
}: {
  orientation?: "horizontal" | "vertical";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "shrink-0 bg-[color-mix(in_srgb,var(--sketch-border-soft),transparent_52%)]",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className,
      )}
      aria-hidden="true"
    />
  );
}

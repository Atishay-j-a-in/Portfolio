import { sketchFocusRing, sketchInteractiveLift } from "@/lib/sketch/variants";
import { cn } from "@/lib/utils";

export function SketchToolButton({
  icon,
  label,
  active = false,
  decorative = true,
  className,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  decorative?: boolean;
  className?: string;
}) {
  return (
    <button
      type="button"
      title={label}
      aria-label={decorative ? undefined : label}
      aria-hidden={decorative ? true : undefined}
      tabIndex={decorative ? -1 : undefined}
      className={cn(
        "grid size-11 place-items-center rounded-[12px] text-[var(--sketch-ink)]",
        sketchFocusRing,
        sketchInteractiveLift,
        active && "bg-[var(--sketch-accent)] text-white",
        className,
      )}
    >
      {icon}
    </button>
  );
}

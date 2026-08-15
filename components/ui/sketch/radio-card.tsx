import { cn } from "@/lib/utils";
import { SketchBadge } from "@/components/ui/sketch/badge";
import { SketchBody } from "@/components/ui/sketch/body";
import { SketchHeading } from "@/components/ui/sketch/heading";

type SketchRadioCardProps = {
  title: string;
  description?: string;
  checked: boolean;
  recommended?: boolean;
  onSelect: () => void;
  className?: string;
};

export function SketchRadioCard({
  title,
  description,
  checked,
  recommended = false,
  onSelect,
  className,
}: SketchRadioCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "group relative flex w-full items-start gap-3 rounded-[16px] border bg-sketch-paper px-4 py-3 text-left transition-[box-shadow,transform,border-color] hover:-translate-y-1",
        className,
      )}
      style={{
        borderColor: checked ? "var(--sketch-accent)" : "color-mix(in srgb, var(--sketch-border-soft), transparent 32%)",
        boxShadow: checked ? "8px 10px 0 color-mix(in srgb, var(--sketch-accent), transparent 78%)" : "none",
      }}
    >
      <span
        className="mt-1 grid size-5 place-items-center rounded-full border"
        style={{
          borderColor: "var(--sketch-border-soft)",
          backgroundColor: checked ? "var(--sketch-accent)" : "transparent",
        }}
      >
        <span
          aria-hidden="true"
          className="size-2 rounded-full bg-white transition-opacity"
          style={{ opacity: checked ? 1 : 0 }}
        />
     </span>
      <span className="flex flex-1 flex-col gap-1">
        <span className="flex items-center gap-2">
          <SketchHeading level={3} size="sm">
            {title}
         </SketchHeading>
          {recommended ? <SketchBadge tone="accent">recommended</SketchBadge> : null}
       </span>
        {description ? (
          <SketchBody size="sm" tone="muted">
            {description}
         </SketchBody>
        ) : null}
     </span>
   </button>
  );
}

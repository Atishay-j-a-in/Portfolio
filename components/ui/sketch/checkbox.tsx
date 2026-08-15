import { cn } from "@/lib/utils";
import { sketchFocusRing } from "@/lib/sketch/variants";

type SketchCheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: string;
};

export function SketchCheckbox({ className, label, checked, ...props }: SketchCheckboxProps) {
  return (
    <label className={cn("inline-flex cursor-pointer items-center gap-3", className)}>
      <span
        className={cn(
          "relative grid size-5 place-items-center rounded-md border bg-transparent transition-colors",
          sketchFocusRing,
        )}
        style={{
          borderColor: "var(--sketch-border-soft)",
          backgroundColor: checked ? "var(--sketch-accent)" : "transparent",
          borderRadius: "6px",
        }}
      >
        <input
          type="checkbox"
          className="peer absolute inset-0 cursor-pointer opacity-0"
          checked={checked}
          {...props}
        />
        <svg
          viewBox="0 0 12 12"
          width={12}
          height={12}
          className="pointer-events-none text-white"
          style={{ opacity: checked ? 1 : 0, transition: "opacity 160ms" }}
          aria-hidden="true"
        >
          <path
            d="M2 6.5L4.8 9 10 3"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
       </svg>
     </span>
      {label ? <span className="font-sans text-base text-sketch-ink">{label}</span> : null}
   </label>
  );
}

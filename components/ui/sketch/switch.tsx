import { cn } from "@/lib/utils";
import { sketchFocusRing } from "@/lib/sketch/variants";

type SketchSwitchProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: string;
};

export function SketchSwitch({ className, label, checked, defaultChecked, onChange, ...props }: SketchSwitchProps) {
  return (
    <label className={cn("inline-flex cursor-pointer items-center gap-3", className)}>
      <span
        className={cn(
          "relative inline-flex h-6 w-11 items-center rounded-full border transition-colors",
          sketchFocusRing,
        )}
        style={{
          borderColor: "var(--sketch-border-soft)",
          backgroundColor: "color-mix(in srgb, var(--sketch-accent), transparent 35%)",
        }}
      >
        <input
          type="checkbox"
          role="switch"
          className="peer absolute inset-0 cursor-pointer opacity-0"
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
          {...props}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none ml-[2px] size-5 rounded-full transition-transform"
          style={{
            backgroundColor: "var(--sketch-paper)",
            border: "1px solid color-mix(in srgb, var(--sketch-border-soft), transparent 40%)",
            transform: checked ? "translateX(20px)" : "translateX(0)",
          }}
        />
     </span>
      {label ? <span className="font-sans text-base text-sketch-ink">{label}</span> : null}
   </label>
  );
}

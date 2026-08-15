import { cn } from "@/lib/utils";

export function SketchToolbar({
  children,
  className,
  floating = true,
}: {
  children: React.ReactNode;
  className?: string;
  floating?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-[14px] border px-3 py-2",
        floating && "shadow-[0_18px_48px_var(--sketch-shadow)] backdrop-blur-md",
        className,
      )}
      style={{
        backgroundColor: "color-mix(in srgb, var(--sketch-paper), transparent 6%)",
        borderColor: "color-mix(in srgb, var(--sketch-border-soft), transparent 48%)",
      }}
    >
      {children}
    </div>
  );
}

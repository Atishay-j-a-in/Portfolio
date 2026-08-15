import { SketchSurface, type SketchSurfaceProps } from "@/components/ui/sketch/surface";
import { cn } from "@/lib/utils";

type NoteTone = "yellow" | "blue" | "green" | "red" | "lilac";

const toneMap: Record<NoteTone, SketchSurfaceProps["tone"]> = {
  yellow: "note-yellow",
  blue: "note-blue",
  green: "note-green",
  red: "note-red",
  lilac: "note-lilac",
};

type SketchNoteProps = Omit<SketchSurfaceProps, "tone"> & {
  tone?: NoteTone;
  rotation?: -3 | -2 | -1 | 0 | 1 | 2 | 3;
  tape?: boolean;
  pin?: boolean;
};

export function SketchNote({
  className,
  children,
  tone = "yellow",
  rotation = -1,
  tape = true,
  pin = false,
  style,
  ...props
}: SketchNoteProps) {
  return (
    <div
      className={cn("relative", className)}
      style={{ transform: `rotate(${rotation}deg)`, ...style }}
    >
      {tape ? (
        <span
          className="pointer-events-none absolute left-1/2 top-0 z-[10] h-10 w-44 -translate-x-1/2 -translate-y-1/2 rotate-[-3deg] rounded-sm opacity-90 border border-white/40 shadow-sm"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(240,235,220,0.75) 100%)",
            boxShadow: "0 3px 8px rgba(0, 0, 0, 0.15)",
          }}
          aria-hidden="true"
        />
      ) : null}
      {pin ? (
        <span
          className="pointer-events-none absolute left-1/2 top-0 z-[11] size-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 shadow-md"
          style={{
            backgroundColor: "var(--sketch-accent)",
            borderColor: "var(--sketch-border)",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.35)",
          }}
          aria-hidden="true"
        >
          <span className="absolute inset-1 rounded-full bg-white/40" />
        </span>
      ) : null}
      <SketchSurface
        tone={toneMap[tone]}
        padding="lg"
        radius="lg"
        interactive
        className="h-full w-full overflow-hidden"
        {...props}
      >
        {children}
      </SketchSurface>
    </div>
  );
}






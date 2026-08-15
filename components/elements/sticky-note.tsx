import { cn, rotateStyle } from "@/lib/utils";

type StickyNoteProps = {
  children: React.ReactNode;
  className?: string;
  rotation?: number;
  color?: string;
  style?: React.CSSProperties;
};

export function StickyNote({ children, className, rotation = -2, color = "var(--note-yellow)", style }: StickyNoteProps) {
  return (
    <div
      className={cn("sticky-note relative rounded-[18px] p-16 shadow-sketch transition-transform duration-300 hover:-translate-y-3", className)}
      style={{ ...rotateStyle(rotation), background: color, ...style }}
    >
      <span className="tape-strip" aria-hidden="true" />
      {children}
    </div>
  );
}

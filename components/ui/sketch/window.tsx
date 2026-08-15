import { SketchPanel } from "@/components/ui/sketch/panel";
import { SketchBody } from "@/components/ui/sketch/body";
import { SketchDivider } from "@/components/ui/sketch/divider";
import type { SketchSurfaceProps } from "@/components/ui/sketch/surface";
import { cn } from "@/lib/utils";

type SketchWindowProps = Omit<SketchSurfaceProps, "tone"> & {
  title?: string;
  dots?: boolean;
  tone?: "terminal" | "paper";
};

export function SketchWindow({ className, children, title, dots = true, tone = "terminal", style, ...props }: SketchWindowProps) {
  return (
    <SketchPanel
      className={cn("overflow-hidden", className)}
      style={{
        backgroundColor: tone === "terminal" ? "var(--terminal-bg)" : "var(--sketch-paper)",
        color: tone === "terminal" ? "var(--code)" : "var(--sketch-ink)",
        ...style,
      }}
      {...props}
    >
      <div className="flex items-center gap-3">
        {dots ? (
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="size-3 rounded-full bg-[#ff5f57]" />
            <span className="size-3 rounded-full bg-[#febc2e]" />
            <span className="size-3 rounded-full bg-[#28c840]" />
          </div>
        ) : null}
        {title ? <SketchBody as="span" size="sm" tone="muted" className="font-mono uppercase tracking-[0.14em]">{title}</SketchBody> : null}
      </div>
      <SketchDivider className="my-4" />
      <div>{children}</div>
    </SketchPanel>
  );
}

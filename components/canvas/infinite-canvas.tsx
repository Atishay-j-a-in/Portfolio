"use client";

import { DotGrid } from "@/components/canvas/dot-grid";
import { useCanvasPan } from "@/hooks/use-canvas-pan";

export function InfiniteCanvas({ children }: { children: React.ReactNode }) {
  const { view, bind } = useCanvasPan();

  return (
    <div className="canvas-viewport" {...bind}>
      <DotGrid x={view.x} y={view.y} />
      <div
        className="canvas-plane"
        style={{
          transform: `translate3d(${view.x}px, ${view.y}px, 0) scale(${view.scale})`,
          transformOrigin: "0 0",
        }}
      >
        {children}
      </div>
    </div>
  );
}

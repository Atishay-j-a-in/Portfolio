"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type SketchTabsItem = {
  id: string;
  label: string;
  content: React.ReactNode;
};

type SketchTabsProps = {
  items: SketchTabsItem[];
  defaultId?: string;
  className?: string;
};

export function SketchTabs({ items, defaultId, className }: SketchTabsProps) {
  const firstId = items[0]?.id ?? "";
  const [active, setActive] = useState<string>(defaultId ?? firstId);

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <div className="flex flex-wrap items-center gap-2 border-b border-[color-mix(in_srgb,var(--sketch-border-soft),transparent_60%)] pb-2">
        {items.map((item) => {
          const isActive = item.id === active;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item.id)}
              className="rounded-[12px] px-4 py-2 font-hand text-xl transition-colors"
              style={{
                color: isActive ? "var(--sketch-bg)" : "var(--sketch-ink)",
                backgroundColor: isActive ? "var(--sketch-accent)" : "transparent",
                border: isActive ? "1px solid var(--sketch-border)" : "1px solid transparent",
              }}
            >
              {item.label}
           </button>
          );
        })}
     </div>
      <div>{items.find((item) => item.id === active)?.content}</div>
   </div>
  );
}

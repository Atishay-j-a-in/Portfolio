"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type DoodleProps = {
  type: "star" | "coffee" | "rocket" | "laptop" | "cat" | "circle" | "cross";
  className?: string;
};

export function Doodle({ type, className }: DoodleProps) {
  const [active, setActive] = useState(false);

  return (
    <button
      type="button"
      aria-label={`${type} doodle`}
      onClick={() => setActive((value) => !value)}
      className={cn("doodle absolute font-hand text-[170px] leading-none text-ink", active && `doodle-${type}-active`, className)}
    >
      {type === "star" ? "☆" : null}
      {type === "coffee" ? "☕" : null}
      {type === "rocket" ? "↟" : null}
      {type === "laptop" ? "▭" : null}
      {type === "cat" ? "=^.^=" : null}
      {type === "circle" ? "○" : null}
      {type === "cross" ? "×" : null}
    </button>
  );
}

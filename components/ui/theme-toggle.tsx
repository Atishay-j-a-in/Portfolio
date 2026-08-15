"use client";

import { Moon, Sun } from "@phosphor-icons/react";

export function ThemeToggle({ theme, onToggle }: { theme: "light" | "dark"; onToggle: () => void }) {
  return (
    <button type="button" className="chrome-button real-control" onClick={onToggle} aria-label="Toggle theme">
      {theme === "dark" ? <Sun size={22} weight="regular" /> : <Moon size={22} weight="regular" />}
    </button>
  );
}

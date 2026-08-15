"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Moon, Sun } from "@phosphor-icons/react";
import { useSketchTheme } from "@/lib/sketch/theme";
import { SketchIconButton } from "@/components/ui/sketch/icon-button";

export function UIDemoShell({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useSketchTheme();

  useEffect(() => {
    document.body.classList.add("has-sketch-demo");
    return () => {
      document.body.classList.remove("has-sketch-demo");
    };
  }, []);

  return (
    <main className="sketch-demo-shell" data-theme={theme}>
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-10 lg:py-10">
        <header className="sketch-demo-header">
          <div className="flex items-center gap-4">
            <Link href="/" className="font-hand text-2xl text-sketch-ink">
              ← Portfolio
            </Link>
            <span className="sketch-demo-label">Sketch UI demo</span>
          </div>
          <SketchIconButton label="Toggle theme" variant="chrome" onClick={toggleTheme}>
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </SketchIconButton>
        </header>
        {children}
      </div>
    </main>
  );
}

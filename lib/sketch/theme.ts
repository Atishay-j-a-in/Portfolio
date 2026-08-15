"use client";

import { createContext, createElement, useContext, useEffect, useMemo, useState } from "react";

export type SketchTheme = "light" | "dark";

type SketchThemeContextValue = {
  theme: SketchTheme;
  setTheme: (theme: SketchTheme) => void;
  toggleTheme: () => void;
};

const STORAGE_KEY = "portfolio-sketch-theme";

const SketchThemeContext = createContext<SketchThemeContextValue | null>(null);

export function SketchThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<SketchTheme>("dark");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const frame = window.requestAnimationFrame(() => {
      const stored = window.localStorage.getItem(STORAGE_KEY);

      if (stored === "light" || stored === "dark") {
        setTheme(stored);
        return;
      }

      setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, theme);
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme: () => setTheme((current) => (current === "dark" ? "light" : "dark")),
    }),
    [theme],
  );

  return createElement(SketchThemeContext.Provider, { value }, children);
}

export function useSketchTheme() {
  const context = useContext(SketchThemeContext);

  if (!context) {
    throw new Error("useSketchTheme must be used within SketchThemeProvider");
  }

  return context;
}

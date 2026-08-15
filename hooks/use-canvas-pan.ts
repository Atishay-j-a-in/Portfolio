"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const HERO_CENTER = { x: 612, y: 300 };
const INITIAL_SCALE = 0.85;
const MIN_SCALE = 0.25;
const MAX_SCALE = 2.0;

type View = {
  x: number;
  y: number;
  scale: number;
};

function isInteractive(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  return Boolean(target.closest("a, button, input, textarea, select, label, [contenteditable]"));
}

export function useCanvasPan() {
  const [view, setView] = useState<View>({ x: 0, y: 0, scale: INITIAL_SCALE });
  const drag = useRef({ active: false, x: 0, y: 0 });

  useEffect(() => {
    const centerHero = () => {
      setView({
        scale: INITIAL_SCALE,
        x: window.innerWidth / 2 - HERO_CENTER.x * INITIAL_SCALE,
        y: window.innerHeight / 2 - HERO_CENTER.y * INITIAL_SCALE,
      });
    };

    centerHero();
    window.addEventListener("resize", centerHero);
    return () => window.removeEventListener("resize", centerHero);
  }, []);

  const onPointerDown = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    if (isInteractive(event.target)) return;

    event.preventDefault();
    drag.current = { active: true, x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);

    if (typeof document !== "undefined") {
      document.body.style.userSelect = "none";
      document.body.style.webkitUserSelect = "none";
    }
  }, []);

  const onPointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active) return;
    const dx = event.clientX - drag.current.x;
    const dy = event.clientY - drag.current.y;
    drag.current = { active: true, x: event.clientX, y: event.clientY };
    setView((current) => ({ ...current, x: current.x + dx, y: current.y + dy }));
  }, []);

  const stopDrag = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    drag.current.active = false;

    if (typeof document !== "undefined") {
      document.body.style.userSelect = "";
      document.body.style.webkitUserSelect = "";
    }

    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      // Pointer capture can already be released by the browser.
    }
  }, []);

  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      event.preventDefault();

      setView((current) => {
        if (event.ctrlKey || event.metaKey) {
          const nextScale = Math.min(
            MAX_SCALE,
            Math.max(MIN_SCALE, current.scale * (event.deltaY > 0 ? 0.92 : 1.08)),
          );
          const worldX = (event.clientX - current.x) / current.scale;
          const worldY = (event.clientY - current.y) / current.scale;
          return {
            scale: nextScale,
            x: event.clientX - worldX * nextScale,
            y: event.clientY - worldY * nextScale,
          };
        }

        return {
          ...current,
          x: current.x - event.deltaX,
          y: current.y - event.deltaY,
        };
      });
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  return {
    view,
    bind: { onPointerDown, onPointerMove, onPointerUp: stopDrag, onPointerCancel: stopDrag },
  };
}

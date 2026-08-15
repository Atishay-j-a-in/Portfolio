"use client";

import { useEffect, useRef } from "react";
import rough from "roughjs";
import {
  createSketchEllipseOptions,
  createSketchPathOptions,
  createSketchRectangleOptions,
  strokeForTone,
} from "@/lib/sketch/rough";
import { cn } from "@/lib/utils";

type SkeletonCoderProps = {
  className?: string;
  ariaLabel?: string;
};

export function SkeletonCoder({ className, ariaLabel = "Animated skeleton figure sitting and coding" }: SkeletonCoderProps) {
  const shadowRef = useRef<SVGGElement>(null);
  const bodyRef = useRef<SVGGElement>(null);
  const eyesRef = useRef<SVGGElement>(null);
  const armLeftRef = useRef<SVGGElement>(null);
  const armRightRef = useRef<SVGGElement>(null);
  const laptopRef = useRef<SVGGElement>(null);
  const code1Ref = useRef<SVGGElement>(null);
  const code2Ref = useRef<SVGGElement>(null);
  const code3Ref = useRef<SVGGElement>(null);
  const code4Ref = useRef<SVGGElement>(null);
  const code5Ref = useRef<SVGGElement>(null);
  const cursorRef = useRef<SVGGElement>(null);
  const mugRef = useRef<SVGGElement>(null);
  const steam1Ref = useRef<SVGGElement>(null);
  const steam2Ref = useRef<SVGGElement>(null);
  const steam3Ref = useRef<SVGGElement>(null);
  const particle1Ref = useRef<SVGGElement>(null);
  const particle2Ref = useRef<SVGGElement>(null);
  const particle3Ref = useRef<SVGGElement>(null);
  const particle4Ref = useRef<SVGGElement>(null);

  useEffect(() => {
    const NS = "http://www.w3.org/2000/svg";
    const host = document.createElementNS(NS, "svg");
    const rc = rough.svg(host);
    const ink = strokeForTone("default");
    const soft = strokeForTone("soft");
    const accent = strokeForTone("accent");

    const path = (d: string, color = ink, roughness = 1.6, bowing = 1.2, strokeWidth = 5) =>
      rc.path(d, { ...createSketchPathOptions({ roughness, bowing, strokeWidth }), stroke: color });

    const line = (x1: number, y1: number, x2: number, y2: number, color = ink, roughness = 1.6, bowing = 1.2, strokeWidth = 5) =>
      rc.line(x1, y1, x2, y2, { ...createSketchPathOptions({ roughness, bowing, strokeWidth }), stroke: color });

    const ellipse = (cx: number, cy: number, rx: number, ry: number, color = ink, roughness = 1.4, bowing = 1, strokeWidth = 5, fill = "transparent") =>
      rc.ellipse(cx, cy, rx, ry, { ...createSketchEllipseOptions({ roughness, bowing, strokeWidth, fill }), stroke: color });

    const circle = (cx: number, cy: number, diameter: number, color = ink, roughness = 1.5, bowing = 1, strokeWidth = 5, fill = "transparent") =>
      rc.circle(cx, cy, diameter, { ...createSketchEllipseOptions({ roughness, bowing, strokeWidth, fill }), stroke: color });

    const rect = (x: number, y: number, w: number, h: number, color = ink, roughness = 1.3, bowing = 1, strokeWidth = 5, fill = "transparent") =>
      rc.rectangle(x, y, w, h, { ...createSketchRectangleOptions({ roughness, bowing, strokeWidth, fill }), stroke: color });

    const fillInto = (g: SVGGElement | null, ...nodes: SVGElement[]) => {
      if (!g) return;
      for (const n of nodes) g.appendChild(n);
    };

    const fillSvg = (g: SVGGElement | null, ...nodes: SVGElement[]) => {
      if (!g) return;
      for (const n of nodes) g.appendChild(n);
    };
    void fillSvg;

    // Ground shadow
    fillInto(shadowRef.current, ellipse(400, 700, 240, 14, ink, 1.8, 1, 3, ink));

    // Body
    fillInto(
      bodyRef.current,
      // Pelvis
      path("M 340 450 Q 400 470 460 450"),
      path("M 335 465 Q 400 485 465 465"),
      // Spine
      line(400, 320, 400, 440),
      // Ribs
      path("M 345 340 Q 400 355 455 340"),
      path("M 348 370 Q 400 385 452 370"),
      path("M 352 400 Q 400 412 448 400"),
      // Shoulders
      path("M 345 320 Q 335 315 325 322"),
      path("M 455 320 Q 465 315 475 322"),
      // Collarbone
      path("M 345 320 Q 400 335 455 320"),
      // Crossed legs
      path("M 345 470 Q 270 530 210 600 Q 205 630 230 650"),
      path("M 455 470 Q 530 530 590 600 Q 595 630 570 650"),
      path("M 310 600 Q 400 590 490 600"),
      // Feet
      path("M 215 655 Q 200 670 220 680"),
      path("M 585 655 Q 600 670 580 680"),
      // Neck
      path("M 385 295 Q 400 285 415 295"),
      // Skull
      ellipse(400, 200, 92, 102),
      // Jaw
      path("M 335 245 Q 400 285 465 245"),
      // Teeth
      path("M 362 278 L 372 278 M 382 278 L 392 278 M 402 278 L 412 278 M 422 278 L 432 278", ink, 1.8, 1.5, 3),
      // Nose
      path("M 400 210 L 392 235 L 408 235 Z", ink, 1.6, 1.4, 4),
      // Headphones band
      path("M 310 165 Q 400 80 490 165"),
      path("M 310 165 Q 295 170 300 200 Q 305 215 318 212"),
      path("M 490 165 Q 505 170 500 200 Q 495 215 482 212"),
      ellipse(300, 205, 11, 11),
      ellipse(500, 205, 11, 11),
      circle(300, 205, 5, ink, 1.5, 1, 2, ink),
      circle(500, 205, 5, ink, 1.5, 1, 2, ink),
    );

    // Eyes
    fillInto(
      eyesRef.current,
      ellipse(368, 195, 26, 22, ink, 1.6, 1, 3),
      ellipse(432, 195, 26, 22, ink, 1.6, 1, 3),
      circle(368, 195, 28, ink, 1.2, 1, 1, ink),
      circle(432, 195, 28, ink, 1.2, 1, 1, ink),
    );

    // Arms (typing)
    fillInto(
      armLeftRef.current,
      path("M 325 322 Q 280 360 245 405"),
      path("M 245 405 Q 235 425 245 445"),
      circle(247, 450, 9, ink, 1.4, 1, 3, ink),
    );
    fillInto(
      armRightRef.current,
      path("M 475 322 Q 520 360 555 405"),
      path("M 555 405 Q 565 425 555 445"),
      circle(553, 450, 9, ink, 1.4, 1, 3, ink),
    );

    // Laptop
    fillInto(
      laptopRef.current,
      // Base
      path("M 170 470 L 630 470 L 660 510 L 140 510 Z"),
      line(150, 510, 650, 510),
      // Screen back
      path("M 195 470 L 605 470 L 585 320 L 215 320 Z"),
      // Screen background (dark fill)
      rect(225, 335, 350, 120, ink, 1.2, 1, 5, "var(--sketch-bg)"),
      // Hinge
      line(195, 470, 605, 470),
    );

    // Code lines
    fillInto(code1Ref.current, line(240, 355, 330, 355, accent, 1.6, 1.2, 6));
    fillInto(code2Ref.current, line(245, 375, 420, 375, soft, 1.6, 1.2, 6));
    fillInto(code3Ref.current, line(255, 395, 370, 395, accent, 1.6, 1.2, 6));
    fillInto(code4Ref.current, line(245, 415, 460, 415, soft, 1.6, 1.2, 6));
    fillInto(code5Ref.current, line(255, 435, 350, 435, accent, 1.6, 1.2, 6));

    // Cursor
    fillInto(cursorRef.current, line(355, 430, 355, 445, ink, 1.4, 1, 5));

    // Mug
    fillInto(
      mugRef.current,
      path("M 650 420 L 720 420 L 715 495 L 655 495 Z"),
      path("M 720 435 Q 745 435 745 460 Q 745 480 720 480"),
      ellipse(685, 425, 32, 6, accent, 1.4, 1, 4, accent),
      line(665, 440, 665, 475, ink, 1.4, 1, 3),
    );

    // Steam
    fillInto(steam1Ref.current, path("M 670 405 Q 662 385 672 365 Q 682 345 672 325", ink, 2, 1.6, 3));
    fillInto(steam2Ref.current, path("M 690 405 Q 698 385 688 365 Q 678 345 688 325", ink, 2, 1.6, 3));
    fillInto(steam3Ref.current, path("M 710 405 Q 702 385 712 365 Q 722 345 712 325", ink, 2, 1.6, 3));

    // Particles (text)
    const makeText = (ref: SVGGElement | null, content: string, x: number, y: number, size: number) => {
      if (!ref) return;
      const t = document.createElementNS(NS, "text");
      t.setAttribute("x", String(x));
      t.setAttribute("y", String(y));
      t.setAttribute("font-size", String(size));
      t.setAttribute("fill", ink);
      t.setAttribute("font-family", "monospace");
      t.setAttribute("stroke", "none");
      t.textContent = content;
      ref.appendChild(t);
    };
    makeText(particle1Ref.current, "{ }", 640, 280, 28);
    makeText(particle2Ref.current, "\u003c/\u003e", 140, 320, 22);
    makeText(particle3Ref.current, "=>", 100, 440, 20);
    makeText(particle4Ref.current, "()", 680, 560, 24);
  }, []);

  return (
    <svg
      viewBox="0 0 800 760"
      role="img"
      aria-label={ariaLabel}
      className={cn("text-sketch-ink", className)}
    >
      <g ref={shadowRef} />

      <g ref={bodyRef} className="sk-body origin-center">
        {/* drawn by rough.js */}
     </g>

      <g ref={eyesRef} className="sk-eyes">
        {/* drawn by rough.js */}
     </g>

      <g ref={armLeftRef} className="sk-arm-left">
        {/* drawn by rough.js */}
     </g>

      <g ref={armRightRef} className="sk-arm-right">
        {/* drawn by rough.js */}
     </g>

      <g ref={laptopRef}>
        {/* drawn by rough.js */}
     </g>

      <g ref={code1Ref} className="sk-code-line-1" />
      <g ref={code2Ref} className="sk-code-line-2" />
      <g ref={code3Ref} className="sk-code-line-3" />
      <g ref={code4Ref} className="sk-code-line-4" />
      <g ref={code5Ref} className="sk-code-line-5" />

      <g ref={cursorRef} className="sk-cursor" />

      <g ref={mugRef} />

      <g ref={steam1Ref} className="sk-steam-1" />
      <g ref={steam2Ref} className="sk-steam-2" />
      <g ref={steam3Ref} className="sk-steam-3" />

      <g ref={particle1Ref} className="sk-particle-1" />
      <g ref={particle2Ref} className="sk-particle-2" />
      <g ref={particle3Ref} className="sk-particle-3" />
      <g ref={particle4Ref} className="sk-particle-4" />
   </svg>
  );
}

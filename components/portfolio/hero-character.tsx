"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type HeroCharacterProps = {
  className?: string;
  ariaLabel?: string;
};

export function HeroCharacter({
  className,
  ariaLabel = "Hand-drawn illustration of a modern developer coding behind a laptop screen on an Excalidraw whiteboard",
}: HeroCharacterProps) {
  const [isWinking, setIsWinking] = useState(false);
  const [mugClicks, setMugClicks] = useState(0);

  return (
    <div className={cn("relative select-none", className)}>
      <svg
        viewBox="0 0 800 720"
        role="img"
        aria-label={ariaLabel}
        className="w-full h-auto text-sketch-ink overflow-visible"
        fill="none"
      >
        {/* 1. Ground Shadow */}
        <ellipse
          cx="400"
          cy="670"
          rx="180"
          ry="12"
          fill="currentColor"
          fillOpacity="0.12"
          className="char-ground-shadow"
        />

        {/* 2. Floating Code Tokens (Clean & Uncluttered, from reference) */}
        {/* </ > on left */}
        <text
          x="80"
          y="290"
          fontSize="26"
          fontWeight="bold"
          fill="var(--sketch-ink)"
          fontFamily="var(--font-mono)"
          className="char-badge-1 opacity-70"
          aria-hidden="true"
        >
          &lt;/&gt;
        </text>

        {/* { } on top-right */}
        <text
          x="690"
          y="235"
          fontSize="28"
          fontWeight="bold"
          fill="var(--sketch-ink)"
          fontFamily="var(--font-mono)"
          className="char-badge-2 opacity-75"
          aria-hidden="true"
        >
          &#123; &#125;
        </text>

        {/* () on bottom-right */}
        <text
          x="700"
          y="600"
          fontSize="26"
          fontWeight="bold"
          fill="var(--sketch-ink)"
          fontFamily="var(--font-mono)"
          className="char-badge-3 opacity-60"
          aria-hidden="true"
        >
          ( )
        </text>

        {/* => on lower-left */}
        <text
          x="85"
          y="480"
          fontSize="22"
          fontWeight="bold"
          fill="var(--sketch-accent)"
          fontFamily="var(--font-mono)"
          className="char-sparkle-1 opacity-70"
          aria-hidden="true"
        >
          =&gt;
        </text>

        {/* 3. The Character (Behind the Laptop) */}
        <g id="developer-character" className="char-sway origin-[400px_480px]">
          {/* Lower Body: Relaxed Crossed Legs (sitting like in reference) */}
          <g id="legs" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
            {/* Left crossed leg & foot */}
            <path d="M 330 510 Q 240 545 200 600 Q 185 635 220 648 Q 280 655 350 646" />
            <path d="M 198 642 Q 184 656 204 664" />

            {/* Right crossed leg & foot */}
            <path d="M 470 510 Q 560 545 600 600 Q 615 635 580 648 Q 520 655 450 646" />
            <path d="M 602 642 Q 616 656 596 664" />

            {/* Center lap fold */}
            <path d="M 310 595 Q 400 585 490 595" strokeWidth="4" />
          </g>

          {/* Torso & Shoulders (Emerging behind laptop screen) */}
          <g id="torso">
            {/* Shoulders line connecting to neck */}
            <path
              d="M 315 290 Q 345 260 400 258 Q 455 260 485 290"
              fill="none"
              stroke="currentColor"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
            {/* Hoodie Collar Accent */}
            <path
              d="M 368 266 Q 400 282 432 266"
              fill="none"
              stroke="var(--sketch-border-soft)"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            {/* Drawstrings just peeking over screen */}
            <path d="M 384 274 L 384 288" stroke="var(--sketch-accent)" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 416 274 L 416 288" stroke="var(--sketch-accent)" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* Head & Expression (Head Groove Animation) */}
          <g
            id="head-group"
            className="char-head origin-[400px_255px] cursor-pointer"
            onClick={() => setIsWinking((prev) => !prev)}
            aria-label="Click character to wink!"
          >
            {/* Neck */}
            <path d="M 388 238 L 388 262 M 412 238 L 412 262" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />

            {/* Face Shape */}
            <path
              d="M 358 178 C 358 236, 374 254, 400 256 C 426 254, 442 236, 442 178 C 442 140, 358 140, 358 178 Z"
              fill="var(--sketch-bg)"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinejoin="round"
            />

            {/* Stylish Modern Hair */}
            <path
              d="M 344 172 C 334 120, 360 92, 405 92 C 455 92, 472 120, 462 170 C 452 144, 434 134, 412 138 C 390 138, 375 150, 362 172 C 354 162, 348 164, 344 172 Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            {/* Hair texture strands */}
            <path d="M 380 106 Q 396 94 420 100" stroke="var(--sketch-card)" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 358 126 Q 380 112 406 118" stroke="var(--sketch-card)" strokeWidth="2" strokeLinecap="round" />

            {/* Over-Ear Headphones */}
            {/* Arch */}
            <path
              d="M 334 165 C 334 78, 466 78, 466 165"
              fill="none"
              stroke="currentColor"
              strokeWidth="6.5"
              strokeLinecap="round"
            />
            <path
              d="M 346 160 C 346 90, 454 90, 454 160"
              fill="none"
              stroke="var(--sketch-accent)"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            {/* Left Earcup */}
            <rect
              x="320"
              y="155"
              width="24"
              height="38"
              rx="10"
              fill="var(--sketch-card)"
              stroke="currentColor"
              strokeWidth="3.2"
            />
            <circle cx="332" cy="174" r="5.5" fill="var(--sketch-accent)" />
            {/* Right Earcup */}
            <rect
              x="456"
              y="155"
              width="24"
              height="38"
              rx="10"
              fill="var(--sketch-card)"
              stroke="currentColor"
              strokeWidth="3.2"
            />
            <circle cx="468" cy="174" r="5.5" fill="var(--sketch-accent)" />

            {/* Eyebrows */}
            <path d="M 370 180 Q 382 174 392 181" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
            <path d="M 408 181 Q 418 174 430 180" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />

            {/* Glasses */}
            <circle
              cx="381"
              cy="198"
              r="14.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
            />
            <circle
              cx="419"
              cy="198"
              r="14.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
            />
            <path d="M 395.5 197 Q 400 193 404.5 197" fill="none" stroke="currentColor" strokeWidth="2.8" />
            {/* Glint */}
            <line x1="374" y1="192" x2="380" y2="188" stroke="var(--sketch-accent)" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="412" y1="192" x2="418" y2="188" stroke="var(--sketch-accent)" strokeWidth="1.8" strokeLinecap="round" />

            {/* Eyes (Blinking Animation + Click-to-wink) */}
            <g className={cn("origin-[400px_198px]", !isWinking && "char-eyes")}>
              <circle cx="381" cy="198" r="4.2" fill="currentColor" />
              <circle cx="383" cy="196" r="1.4" fill="var(--sketch-bg)" />
              {isWinking ? (
                <path d="M 412 198 Q 419 203 426 198" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
              ) : (
                <>
                  <circle cx="419" cy="198" r="4.2" fill="currentColor" />
                  <circle cx="421" cy="196" r="1.4" fill="var(--sketch-bg)" />
                </>
              )}
            </g>

            {/* Nose */}
            <path
              d="M 400 206 L 398 216 L 404 217"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Smile */}
            <path
              d="M 390 230 Q 400 238 410 230"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
          </g>

          {/* Arms coming down to the keyboard */}
          {/* Left Arm */}
          <path
            d="M 315 290 Q 255 350 270 410 Q 280 440 330 460"
            fill="none"
            stroke="currentColor"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 315 290 Q 255 350 270 410 Q 280 440 330 460"
            fill="none"
            stroke="var(--sketch-bg)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Right Arm */}
          <path
            d="M 485 290 Q 545 350 530 410 Q 520 440 470 460"
            fill="none"
            stroke="currentColor"
            strokeWidth="16"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 485 290 Q 545 350 530 410 Q 520 440 470 460"
            fill="none"
            stroke="var(--sketch-bg)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* 4. THE LAPTOP (Opaque screen blocking the body, perfectly proportioned) */}
        <g id="laptop-setup">
          {/* A. Screen Frame Outer Bevel (Tilted back trapezoid, width ~330px) */}
          <polygon
            points="242,286 558,286 572,464 228,464"
            fill="var(--sketch-card)"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinejoin="round"
          />

          {/* B. Screen Inner Display — OPAQUE SOLID FILL (Hides character's body behind it!) */}
          <polygon
            points="252,296 548,296 560,452 240,452"
            fill="var(--sketch-bg)"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* C. Code Lines Typed on Screen (Directly from reference screenshot!) */}
          {/* Line 1: Darker purple / muted header bar */}
          <line
            x1="266"
            y1="324"
            x2="350"
            y2="324"
            stroke="var(--sketch-border-soft)"
            strokeWidth="6"
            strokeLinecap="round"
            className="char-code-1"
          />

          {/* Line 2: Soft gray code line */}
          <line
            x1="274"
            y1="352"
            x2="456"
            y2="352"
            stroke="currentColor"
            strokeWidth="4.5"
            strokeLinecap="round"
            className="char-code-2"
          />

          {/* Line 3: Violet / Accent code line */}
          <line
            x1="282"
            y1="380"
            x2="400"
            y2="380"
            stroke="var(--sketch-accent)"
            strokeWidth="5"
            strokeLinecap="round"
            className="char-code-3"
          />

          {/* Line 4: Soft code line */}
          <line
            x1="274"
            y1="408"
            x2="495"
            y2="408"
            stroke="currentColor"
            strokeWidth="4.5"
            strokeLinecap="round"
            className="char-code-4"
          />

          {/* Line 5: Violet / Accent line + Blinking cursor */}
          <g className="char-code-5">
            <line
              x1="282"
              y1="436"
              x2="378"
              y2="436"
              stroke="var(--sketch-accent)"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </g>
          {/* Cursor */}
          <line
            x1="386"
            y1="428"
            x2="386"
            y2="444"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            className="char-cursor"
          />

          {/* D. Laptop Base / Keyboard Deck */}
          <polygon
            points="180,464 620,464 646,512 154,512"
            fill="var(--sketch-bg)"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinejoin="round"
          />

          {/* Keyboard / Trackpad Cutout Lines */}
          <path
            d="M 330 464 L 350 495 L 450 495 L 470 464"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinejoin="round"
          />

          {/* E. Hand Movements (Fluid keystroke tapping animation, no clunky palms) */}
          {/* Left Hand typing motion */}
          <g className="char-hand-left origin-[340px_478px]">
            <path
              d="M 326 462 Q 338 472 352 478"
              stroke="currentColor"
              strokeWidth="3.6"
              strokeLinecap="round"
            />
            <path
              d="M 334 466 Q 346 478 356 484"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
          </g>

          {/* Right Hand typing motion */}
          <g className="char-hand-right origin-[460px_478px]">
            <path
              d="M 474 462 Q 462 472 448 478"
              stroke="currentColor"
              strokeWidth="3.6"
              strokeLinecap="round"
            />
            <path
              d="M 466 466 Q 454 478 444 484"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
          </g>
        </g>

        {/* 5. TABLE / DESK (Extended to the right so cup of tea rests solidly on it) */}
        <g id="table-surface">
          {/* Main Table Line extending from left (80) across under laptop and well past the cup of tea on right (760) */}
          <line
            x1="80"
            y1="512"
            x2="760"
            y2="512"
            stroke="currentColor"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          {/* Front table bevel edge */}
          <polygon
            points="80,512 760,512 752,526 88,526"
            fill="var(--sketch-card)"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        </g>

        {/* 6. CUP OF TEA / COFFEE MUG (Grounded on the table surface) */}
        <g
          id="coffee-mug"
          className="cursor-pointer"
          onClick={() => setMugClicks((c) => c + 1)}
          aria-label="Click the cup of tea for fresh brew!"
        >
          {/* Mug Body resting solidly on table at y=512 */}
          <path
            d="M 648 448 L 702 448 L 698 510 C 698 512, 652 512, 652 510 Z"
            fill="var(--sketch-bg)"
            stroke="currentColor"
            strokeWidth="3.8"
            strokeLinejoin="round"
          />

          {/* Mug Inner Accent Stroke */}
          <line x1="662" y1="462" x2="662" y2="496" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />

          {/* Mug Handle */}
          <path
            d="M 702 460 C 728 460, 728 496, 700 498"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.8"
            strokeLinecap="round"
          />

          {/* Purple / Accent Tea Surface */}
          <ellipse
            cx="675"
            cy="450"
            rx="21"
            ry="6"
            fill="var(--sketch-accent)"
            stroke="currentColor"
            strokeWidth="2.2"
          />

          {/* Wavy Steam Plumes */}
          <g key={mugClicks}>
            <path
              d="M 664 432 Q 654 402 668 375 Q 682 349 668 323"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
              className="char-steam-1"
            />
            <path
              d="M 686 432 Q 698 402 684 373 Q 672 345 686 317"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.8"
              strokeLinecap="round"
              className="char-steam-2"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

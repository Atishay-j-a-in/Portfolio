export const sketchTransition =
  "transition-[transform,box-shadow,background-color,border-color,color,opacity] duration-200 ease-out";

export const sketchInteractiveLift = `${sketchTransition} hover:-translate-y-1 hover:-rotate-[0.35deg] active:translate-y-px`;

export const sketchFocusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sketch-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--sketch-bg)]";

export const sketchShadow = "shadow-[0_18px_48px_var(--sketch-shadow)]";

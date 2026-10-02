"use client";

import { HeroCharacter } from "./hero-character";

export { HeroCharacter };

export function SkeletonCoder(props: React.ComponentProps<typeof HeroCharacter>) {
  return <HeroCharacter {...props} />;
}

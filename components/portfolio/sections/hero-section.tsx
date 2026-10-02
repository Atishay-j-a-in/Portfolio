import { SketchAnnotation } from "@/components/ui/sketch/annotation";
import { SketchBody } from "@/components/ui/sketch/body";
import { SketchHeading } from "@/components/ui/sketch/heading";
import { SketchHighlight } from "@/components/sketch/highlight";
import { HeroCharacter } from "@/components/portfolio/hero-character";
import { profile } from "@/data/content";

export function HeroSection() {
  return (
    <section className="relative w-full max-w-5xl">
      <div className="grid items-center gap-8 md:grid-cols-12">
        <div className="flex flex-col justify-center space-y-6 md:col-span-7">
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <SketchAnnotation className="text-2xl" tone="accent" rotation={-6}>
                Hey, I&apos;m
              </SketchAnnotation>
              <SketchArrowMark />
            </div>

            <SketchHeading level={1} className="text-6xl md:text-7xl leading-none">
              {profile.name}
            </SketchHeading>

            <div
              className="mt-2 h-2 w-32 -skew-x-6 rounded-full"
              style={{ backgroundColor: "color-mix(in srgb, var(--sketch-accent), transparent 25%)" }}
            />
          </div>

          <SketchBody as="p" size="lg" className="text-xl md:text-2xl leading-relaxed">
            <span className="font-bold text-sketch-ink font-hand text-2xl md:text-3xl block mb-2">
              Full Stack Developer (MERN)
            </span>
            with expertise in <SketchHighlight>React</SketchHighlight>, <SketchHighlight>Node.js</SketchHighlight>, <SketchHighlight>Express</SketchHighlight>, and <SketchHighlight>MongoDB</SketchHighlight>, REST APIs, authentication, and responsive UI development.
          </SketchBody>

          <p className="font-hand text-lg md:text-xl text-sketch-accent flex items-center gap-2">
            <span>•</span> {profile.seeking}
          </p>
        </div>

        <div className="flex items-center justify-center md:col-span-5">
          <div className="w-full p-2">
            <HeroCharacter className="h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SketchArrowMark() {
  return (
    <svg
      viewBox="0 0 220 80"
      width={120}
      height={44}
      className="text-sketch-accent"
      aria-hidden="true"
    >
      <path
        d="M5 60 C 60 10, 140 6, 200 38"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M180 18 L 210 40 L 180 60"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

import { SketchAnnotation } from "@/components/ui/sketch/annotation";
import { SketchBody } from "@/components/ui/sketch/body";
import { SketchHeading } from "@/components/ui/sketch/heading";
import { SketchSurface } from "@/components/ui/sketch/surface";
import { architecture } from "@/data/content";

export function SkillsSection() {
  return (
    <section className="relative w-full max-w-5xl space-y-6">
      <div className="space-y-2">
        <SketchHeading level={2} size="xl">
          System sketch
        </SketchHeading>
        <SketchBody size="md" tone="muted">
          how the pieces usually talk to each other
        </SketchBody>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {architecture.map((item, index) => (
          <SketchSurface
            key={item}
            tone={index % 2 === 0 ? "note-green" : "note-blue"}
            padding="md"
            radius="lg"
            className="text-center"
          >
            <span className="font-hand text-xl text-sketch-ink">{item}</span>
          </SketchSurface>
        ))}
      </div>

      <SketchAnnotation className="text-right text-base" tone="muted" rotation={-3}>
        typed once, scaled cleanly
      </SketchAnnotation>
    </section>
  );
}

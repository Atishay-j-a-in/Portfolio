import { SketchAnnotation } from "@/components/ui/sketch/annotation";
import { SketchBody } from "@/components/ui/sketch/body";
import { SketchCard } from "@/components/ui/sketch/card";
import { SketchHeading } from "@/components/ui/sketch/heading";
import { timeline } from "@/data/content";

export function TimelineSection() {
  return (
    <section className="relative w-full max-w-5xl space-y-6">
      <SketchHeading level={2} size="xl">
        Roadmap / Experience
      </SketchHeading>

      <div className="grid gap-6 md:grid-cols-3">
        {timeline.map((item, index) => (
          <SketchCard
            key={item.title}
            size="md"
            tone="card"
            style={{ transform: `rotate(${index === 1 ? 1.5 : -1.5}deg)` }}
          >
            <div className="space-y-3">
              <p className="font-mono text-sm font-bold text-sketch-accent">{item.year}</p>
              <SketchHeading level={3} size="sm">
                {item.title}
              </SketchHeading>
              <SketchBody size="sm" tone="muted">
                {item.body}
              </SketchBody>
            </div>
          </SketchCard>
        ))}
      </div>

      <SketchAnnotation className="text-right text-base" tone="muted" rotation={-2}>
        This architecture survived production.
      </SketchAnnotation>
    </section>
  );
}

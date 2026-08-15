import { SketchAnnotation } from "@/components/ui/sketch/annotation";
import { SketchHeading } from "@/components/ui/sketch/heading";
import { SketchSurface } from "@/components/ui/sketch/surface";
import { repositories } from "@/data/content";

export function GitHubSection() {
  return (
    <section className="relative w-full max-w-5xl space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <SketchHeading level={2} size="xl">
          GitHub activity
        </SketchHeading>
        <SketchAnnotation tone="muted" rotation={-2} className="text-base">
          commits, experiments, and late-night fixes
        </SketchAnnotation>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {repositories.map((repo, index) => (
          <SketchSurface
            key={repo}
            tone="card"
            padding="md"
            radius="lg"
            className={index % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"}
          >
            <div className="flex h-24 items-center justify-center font-mono text-lg text-sketch-ink">
              {repo}
            </div>
          </SketchSurface>
        ))}
      </div>
    </section>
  );
}

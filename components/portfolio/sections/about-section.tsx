import { SketchAnnotation } from "@/components/ui/sketch/annotation";
import { SketchBody } from "@/components/ui/sketch/body";
import { SketchHeading } from "@/components/ui/sketch/heading";
import { SketchNote } from "@/components/ui/sketch/note";

export function AboutSection() {
  return (
    <section className="relative w-full max-w-2xl space-y-4">
      <SketchNote tone="yellow" rotation={-2} tape>
        <div className="space-y-4">
          <SketchHeading level={2} size="lg">
            About me
          </SketchHeading>
          <SketchBody size="md" tone="muted">
            I build full-stack products with an engineer&apos;s obsession for clean interfaces, resilient backends, and diagrams that make complex systems easier to reason about.
          </SketchBody>
          <SketchBody size="md" className="font-hand text-xl text-sketch-ink">
            This portfolio is intentionally messy. The real work is organized.
          </SketchBody>
        </div>
      </SketchNote>
      <SketchAnnotation className="text-right text-base" tone="muted" rotation={-2}>
        Still improving.
      </SketchAnnotation>
    </section>
  );
}

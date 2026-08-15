import { SketchAnnotation } from "@/components/ui/sketch/annotation";
import { SketchBadge } from "@/components/ui/sketch/badge";
import { SketchBody } from "@/components/ui/sketch/body";
import { SketchCard } from "@/components/ui/sketch/card";
import { SketchChip } from "@/components/ui/sketch/chip";
import { SketchHeading } from "@/components/ui/sketch/heading";

type ProjectCardProps = {
  name: string;
  description: string;
  stack: string[];
  tint: string;
  url?: string;
  featured?: boolean;
  rotation?: number;
};

export function ProjectCard({
  name,
  description,
  stack,
  tint,
  url,
  featured = false,
  rotation = 0,
}: ProjectCardProps) {
  const cardContent = (
    <SketchCard
      tone="card"
      className="h-full w-full transition-transform group-hover:scale-[1.01]"
      style={{ backgroundColor: tint }}
    >
      <article className="flex h-full flex-col justify-between p-6" style={{ transform: `rotate(${rotation}deg)` }}>
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <SketchBadge tone={featured ? "accent" : "muted"}>
                {featured ? "featured" : "experiment"}
              </SketchBadge>
              <SketchAnnotation tone="muted" rotation={2} className="text-xs sm:text-sm">
                sketching to shipped
              </SketchAnnotation>
            </div>
            <span className="font-hand text-2xl text-sketch-ink opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" aria-hidden="true">
              ↗
            </span>
          </div>

          <SketchHeading level={3} size="md" className="text-sketch-ink group-hover:text-sketch-accent transition-colors">
            {name}
          </SketchHeading>

          <SketchBody size="sm" tone="muted" className="leading-relaxed">
            {description}
          </SketchBody>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {stack.map((chip) => (
            <SketchChip key={chip} size="sm">
              {chip}
            </SketchChip>
          ))}
        </div>
      </article>
    </SketchCard>
  );

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full group focus:outline-none"
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
}


import { ProjectCard } from "@/components/portfolio/project-card";
import { SketchWavyUnderline } from "@/components/sketch/wavy-underline";
import { SketchAnnotation } from "@/components/ui/sketch/annotation";
import { SketchHeading } from "@/components/ui/sketch/heading";
import { projects } from "@/data/content";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative w-full max-w-5xl space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <SketchWavyUnderline strokeWidth={3}>
          <SketchHeading level={2} size="xl" className="pb-2 text-sketch-ink">
            Featured Projects
          </SketchHeading>
        </SketchWavyUnderline>
        <SketchAnnotation className="max-w-md text-right text-lg" tone="accent" rotation={3}>
          selected experiments, tools, and systems that moved from whiteboard to working software
        </SketchAnnotation>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            stack={project.stack}
            tint={project.tint}
            url={project.url}
            featured={index === 0}
            rotation={index % 2 === 0 ? -0.8 : 1.1}
          />
        ))}
      </div>
    </section>
  );
}


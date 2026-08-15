import { SketchAnnotation } from "@/components/ui/sketch/annotation";
import { SketchHeading } from "@/components/ui/sketch/heading";
import { SketchNote } from "@/components/ui/sketch/note";
import { SketchTechIcon, type SketchTechIconType } from "@/components/sketch/tech-icons";

type TechItem = {
  type: SketchTechIconType;
  label: string;
};

type Category = {
  title: string;
  items: TechItem[];
  tone: "yellow" | "blue" | "green" | "red" | "lilac";
  tape?: boolean;
  pin?: boolean;
  rotation: -3 | -2 | -1 | 0 | 1 | 2 | 3;
};

const categories: Category[] = [
  {
    title: "Languages",
    tone: "yellow",
    tape: true,
    rotation: -2,
    items: [
      { type: "html", label: "HTML5" },
      { type: "css", label: "CSS3" },
      { type: "javascript", label: "JavaScript" },
      { type: "typescript", label: "TypeScript" },
      { type: "java", label: "Java" },
      { type: "python", label: "Python" },
    ],
  },
  {
    title: "Frontend",
    tone: "blue",
    pin: true,
    rotation: 2,
    items: [
      { type: "react", label: "React" },
      { type: "tailwind", label: "Tailwind CSS" },
      { type: "nextjs", label: "Next.js" },
      { type: "vite", label: "Vite" },
    ],
  },
  {
    title: "Backend",
    tone: "green",
    tape: true,
    rotation: -1,
    items: [
      { type: "node", label: "Node.js" },
      { type: "express", label: "Express.js" },
      { type: "restapi", label: "REST APIs" },
      { type: "jwtauth", label: "JWT Auth" },
    ],
  },
  {
    title: "Framework",
    tone: "lilac",
    pin: true,
    rotation: 1,
    items: [
      { type: "trpc", label: "tRPC" },
      { type: "turborepo", label: "turborepo" },
      { type: "nextjs", label: "Next.js" },
    ],
  },
  {
    title: "Databases",
    tone: "red",
    tape: true,
    rotation: -2,
    items: [
      { type: "mongodb", label: "MongoDB" },
      { type: "postgresql", label: "PostgreSQL" },
      { type: "mysql", label: "MySQL" },
      { type: "supabase", label: "Supabase" },
      { type: "redis", label: "Redis" },
    ],
  },
  {
    title: "Tools & Cloud",
    tone: "blue",
    pin: true,
    rotation: 2,
    items: [
      { type: "git", label: "Git" },
      { type: "postman", label: "Postman" },
      { type: "docker", label: "Docker" },
      { type: "aws", label: "AWS" },
      { type: "render", label: "Render" },
      { type: "railway", label: "Railway" },
      { type: "vercel", label: "Vercel" },
    ],
  },
];

export function TechStackSection() {
  return (
    <section className="relative w-full max-w-5xl space-y-6">
      <div className="flex flex-wrap items-start gap-4">
        <SketchHeading level={2} size="xl">
          Tech stack
        </SketchHeading>
        <SketchAnnotation className="mt-2 text-xl" tone="accent" rotation={-4}>
          what I reach for ↘
        </SketchAnnotation>
      </div>

      <div className="h-2 w-full max-w-2xl -skew-x-3 rounded-full" style={{ backgroundColor: "color-mix(in srgb, var(--sketch-accent), transparent 22%)" }} />

      <div className="mt-28 grid gap-8 md:grid-cols-2">
        {categories.map((cat) => (
          <SketchNote
            key={cat.title}
            tone={cat.tone}
            rotation={cat.rotation}
            tape={cat.tape}
            pin={cat.pin}
          >
            <div className="flex flex-col gap-4">
              <SketchHeading level={3} size="md">
                {cat.title}
              </SketchHeading>
              <div className="flex flex-wrap items-center gap-4">
                {cat.items.map((item) => (
                  <span key={item.label} className="inline-flex items-center gap-2">
                    <SketchTechIcon type={item.type} size={36} />
                    <span className="font-hand text-base text-sketch-ink">{item.label}</span>
                  </span>
                ))}
              </div>
            </div>
          </SketchNote>
        ))}
      </div>

      <SketchAnnotation className="text-right text-lg" tone="muted" rotation={-2}>
        glued to my workflow ↗
      </SketchAnnotation>
    </section>
  );
}



import { SketchBadge } from "@/components/ui/sketch/badge";
import { SketchBody } from "@/components/ui/sketch/body";
import { SketchHeading } from "@/components/ui/sketch/heading";
import { SketchNote } from "@/components/ui/sketch/note";
import { blogs } from "@/data/content";

const tones = ["yellow", "blue", "green", "red"] as const;

export function BlogSection() {
  return (
    <section className="relative w-full max-w-5xl space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <SketchHeading level={2} size="xl">
          Blog notes
        </SketchHeading>

        <a
  href="https://toddlerstech.hashnode.dev"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-block font-hand text-xl md:text-2xl font-normal !text-[#A78BFA] rotate-[-1.5deg] hover:rotate-[0deg] transition-transform"
>
  toddlerstech.hashnode.dev ↗
</a>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {blogs.map((blog, index) => (
          <a
            key={blog.title}
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group focus:outline-none"
          >
            <SketchNote
              tone={tones[index % tones.length]}
              rotation={index % 2 === 0 ? -2 : 2}
              tape={false}
              pin={true}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <SketchBadge tone="accent" className="text-xs">
                    {blog.readTime}
                  </SketchBadge>
                  <span className="font-hand text-xl text-sketch-ink opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <SketchHeading level={3} size="sm" className="group-hover:text-sketch-accent transition-colors">
                  {blog.title}
                </SketchHeading>
                <SketchBody size="sm" tone="muted" className="line-clamp-2">
                  {blog.desc}
                </SketchBody>
              </div>
            </SketchNote>
          </a>
        ))}
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { UIDemoShell } from "./demo-shell";
import { SketchAnnotation } from "@/components/ui/sketch/annotation";
import { SketchBadge } from "@/components/ui/sketch/badge";
import { SketchBody } from "@/components/ui/sketch/body";
import { SketchButton } from "@/components/ui/sketch/button";
import { SketchCard } from "@/components/ui/sketch/card";
import { SketchCheckbox } from "@/components/ui/sketch/checkbox";
import { SketchChip } from "@/components/ui/sketch/chip";
import { SketchDivider } from "@/components/ui/sketch/divider";
import {
  SketchDiamondIcon,
  SketchEllipseIcon,
  SketchEraserIcon,
  SketchHandIcon,
  SketchImageIcon,
  SketchLineIcon,
  SketchPointerIcon,
  SketchRectangleIcon,
  SketchTextIcon,
} from "@/components/sketch/icon-set";
import { SketchField } from "@/components/ui/sketch/field";
import { SketchHeading } from "@/components/ui/sketch/heading";
import { SketchIconButton } from "@/components/ui/sketch/icon-button";
import { SketchInput } from "@/components/ui/sketch/input";
import { SketchNote } from "@/components/ui/sketch/note";
import { SketchRadioCard } from "@/components/ui/sketch/radio-card";
import { SketchSurface } from "@/components/ui/sketch/surface";
import { SketchSwitch } from "@/components/ui/sketch/switch";
import { SketchTabs } from "@/components/ui/sketch/tabs";
import { SketchTextarea } from "@/components/ui/sketch/textarea";
import { SketchToolbar } from "@/components/ui/sketch/toolbar";
import { SketchToolButton } from "@/components/ui/sketch/tool-button";
import { SketchWindow } from "@/components/ui/sketch/window";
import { SketchArrow } from "@/components/sketch/arrow";
import { SketchDoodle } from "@/components/sketch/doodle";
import { SketchHighlight } from "@/components/sketch/highlight";
import { SketchTechIcon } from "@/components/sketch/tech-icons";
import { HeroSection } from "@/components/portfolio/sections/hero-section";
import { TechStackSection } from "@/components/portfolio/sections/tech-stack-section";
import { ProjectsSection } from "@/components/portfolio/sections/projects-section";
import { BlogSection } from "@/components/portfolio/sections/blog-section";
import { CertificatesSection } from "@/components/portfolio/sections/certificates-section";
import { ContactSection } from "@/components/portfolio/sections/contact-section";
import { TerminalCard } from "@/components/portfolio/terminal-card";

const stackTones = ["surface", "accent", "muted"] as const;
const tones = ["yellow", "blue", "green", "red"] as const;

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="sketch-demo-group border border-[color-mix(in_srgb,var(--sketch-border-soft),transparent_60%)] bg-[color-mix(in_srgb,var(--sketch-paper),transparent_18%)]">
      <p className="sketch-demo-label">{label}</p>
      <div className="mt-6">{children}</div>
   </section>
  );
}

function SectionFrame({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="sketch-demo-group border border-[color-mix(in_srgb,var(--sketch-border-soft),transparent_60%)] bg-[color-mix(in_srgb,var(--sketch-paper),transparent_16%)]">
      <p className="sketch-demo-label">{label}</p>
      <div className="mt-6 overflow-auto rounded-2xl border border-[color-mix(in_srgb,var(--sketch-border-soft),transparent_60%)] bg-[var(--sketch-bg)] p-6 md:p-10">
        {children}
     </div>
   </section>
  );
}

export default function UI() {
  const [visibility, setVisibility] = useState<"public" | "unlisted">("public");
  const [comments, setComments] = useState(true);
  const [emailMe, setEmailMe] = useState(true);
  const [name, setName] = useState("");

  return (
    <UIDemoShell>
      <div className="space-y-10 py-10">
        <Group label="Typography">
          <div className="space-y-4">
            <SketchHeading level={1} size="xl">Sketch UI primitives</SketchHeading>
            <SketchHeading level={2} size="lg" ink="accent">Building interfaces like a notebook</SketchHeading>
            <SketchBody size="lg">Reusable, source-owned, hand-drawn component library for the Excalidraw-style portfolio</SketchBody>
            <SketchBody size="md" tone="muted">Body copy in muted tone should remain readable at standard reading sizes</SketchBody>
            <SketchAnnotation rotation={-2} tone="muted">a handwritten aside should feel like a margin note</SketchAnnotation>
            <SketchAnnotation tone="accent" rotation={2}>accent annotations can act as callouts</SketchAnnotation>
            <SketchDivider />
            <SketchBody size="sm" tone="muted">Dividers separate concepts without losing the notebook feel</SketchBody>
         </div>
       </Group>

        <Group label="Buttons">
          <div className="flex flex-wrap items-center gap-4">
            <SketchButton variant="primary">Primary action</SketchButton>
            <SketchButton variant="secondary">Secondary action</SketchButton>
            <SketchButton variant="ghost">Ghost action</SketchButton>
            <SketchIconButton label="Download" variant="chrome">{"\u2B07"}</SketchIconButton>
            <SketchIconButton label="Selected tool" variant="accent" active>
              {"\u2713"}
           </SketchIconButton>
         </div>
       </Group>

        <Group label="Surfaces">
          <div className="grid gap-6 md:grid-cols-3">
            <SketchSurface tone="paper" padding="lg" radius="lg">
              <SketchHeading level={3} size="md">Paper surface</SketchHeading>
              <SketchBody size="sm" tone="muted">Base surface for most content blocks</SketchBody>
           </SketchSurface>
            <SketchSurface tone="surface" padding="lg" radius="lg">
              <SketchHeading level={3} size="md">Sketch surface</SketchHeading>
              <SketchBody size="sm" tone="muted">Slightly elevated panel feel</SketchBody>
           </SketchSurface>
            <SketchCard size="md" tone="note-lilac">
              <SketchHeading level={3} size="md">Card tone</SketchHeading>
              <SketchBody size="sm" tone="muted">Soft accent surface reuse</SketchBody>
           </SketchCard>
         </div>
       </Group>

        <Group label="Chips and badges">
          <div className="flex flex-wrap items-center gap-4">
            {["Next.js", "TypeScript", "Rough.js", "Tailwind"].map((chip, index) => (
              <SketchChip key={chip} tone={stackTones[index % stackTones.length]}>{chip}</SketchChip>
            ))}
            <SketchBadge tone="accent">featured</SketchBadge>
            <SketchBadge tone="muted">draft</SketchBadge>
         </div>
       </Group>

        <Group label="Notes">
          <div className="grid gap-6 md:grid-cols-2">
            <SketchNote tone="yellow" rotation={-2} tape>
              <SketchHeading level={3} size="sm">Sticky note</SketchHeading>
              <SketchBody size="sm" tone="muted">Short annotations and playful callouts</SketchBody>
           </SketchNote>
            <SketchNote tone="blue" rotation={2} pin>
              <SketchHeading level={3} size="sm">Pinned note</SketchHeading>
              <SketchBody size="sm" tone="muted">One-off highlights that still belong to the same visual system</SketchBody>
           </SketchNote>
         </div>
       </Group>

        <Group label="Toolbar + window">
          <div className="space-y-6">
            <SketchToolbar>
              <SketchToolButton icon={<SketchHandIcon size={20} />} label="Hand" />
              <SketchToolButton icon={<SketchPointerIcon size={20} />} label="Pointer" active />
              <SketchToolButton icon={<SketchRectangleIcon size={20} />} label="Rectangle" />
              <SketchToolButton icon={<SketchDiamondIcon size={20} />} label="Diamond" />
              <SketchToolButton icon={<SketchEllipseIcon size={20} />} label="Ellipse" />
              <SketchToolButton icon={<SketchLineIcon size={20} />} label="Line" />
              <SketchToolButton icon={<SketchTextIcon size={20} />} label="Text" />
              <SketchToolButton icon={<SketchImageIcon size={20} />} label="Image" />
              <SketchToolButton icon={<SketchEraserIcon size={20} />} label="Eraser" />
           </SketchToolbar>
            <TerminalCard role="Full Stack Developer" loves={["AI", "Systems", "Clean APIs"]} status="sketching ideas into production" />
            <SketchWindow title="notes.md" dots tone="paper">
              <SketchBody size="sm" tone="muted">
                A paper-toned window works for inline docs, prompts, or copy blocks.
             </SketchBody>
           </SketchWindow>
         </div>
       </Group>

        <Group label="Forms">
          <div className="grid gap-6 md:grid-cols-2">
            <SketchField label="Your name" hint="How should I greet you?" required>
              <SketchInput value={name} onChange={(event) => setName(event.target.value)} placeholder="Ada Lovelace" />
           </SketchField>
            <SketchField label="A short note">
              <SketchInput placeholder="A line about your project" />
           </SketchField>
            <SketchField label="Tell me more">
              <SketchTextarea placeholder="A few sentences, a link, or just a vibe." />
           </SketchField>
            <div className="flex flex-col gap-4">
              <SketchRadioCard
                title="Public"
                description="Anyone with the link can view and respond."
                checked={visibility === "public"}
                recommended
                onSelect={() => setVisibility("public")}
              />
              <SketchRadioCard
                title="Unlisted"
                description="Only people with the link can view and respond."
                checked={visibility === "unlisted"}
                onSelect={() => setVisibility("unlisted")}
              />
              <SketchCheckbox label="Allow comments" checked={comments} onChange={(event) => setComments(event.target.checked)} />
              <SketchSwitch label="Email me about replies" checked={emailMe} onChange={(event) => setEmailMe(event.target.checked)} />
           </div>
         </div>
       </Group>

        <Group label="Tabs">
          <SketchTabs
            items={[
              { id: "design", label: "Design", content: <SketchBody>Sketch tokens, paper surfaces, restrained accents</SketchBody> },
              { id: "code", label: "Code", content: <SketchBody>TypeScript-first primitives with tokenized styling</SketchBody> },
              { id: "accessibility", label: "Accessibility", content: <SketchBody>Focus rings, real labels, and reduced motion</SketchBody> },
            ]}
          />
       </Group>

        <Group label="Sketch marks">
          <div className="flex flex-wrap items-center gap-6">
            <SketchArrow label="explore" />
            <SketchHighlight>highlighted copy</SketchHighlight>
            <SketchDoodle type="rocket" />
            <SketchDoodle type="coffee" />
            <SketchDoodle type="star" />
            <SketchDoodle type="cat" />
            <SketchDoodle type="cross" />
            <SketchDoodle type="circle" />
            <SketchDoodle type="heart" />
            <SketchDoodle type="lightning" />
            <SketchDoodle type="checkmark" />
            <SketchDoodle type="arrow-up" />
            <SketchDoodle type="sparkle" />
            <SketchDoodle type="diamond" />
          </div>
        </Group>

        <Group label="Markers for decoration">
          <div className="grid gap-6 md:grid-cols-3">
            <SketchSurface tone="note-yellow" padding="md" radius="lg">
              <div className="flex items-center gap-3">
                <SketchDoodle type="sparkle" className="scale-75" />
                <span className="font-hand text-xl text-sketch-ink">Highlight markers</span>
              </div>
              <SketchBody size="sm" tone="muted" className="mt-2">Use sparkles and stars to draw attention to key features</SketchBody>
            </SketchSurface>
            <SketchSurface tone="note-blue" padding="md" radius="lg">
              <div className="flex items-center gap-3">
                <SketchDoodle type="checkmark" className="scale-75" />
                <span className="font-hand text-xl text-sketch-ink">Status markers</span>
              </div>
              <SketchBody size="sm" tone="muted" className="mt-2">Checkmarks and crosses for completed or pending items</SketchBody>
            </SketchSurface>
            <SketchSurface tone="note-green" padding="md" radius="lg">
              <div className="flex items-center gap-3">
                <SketchDoodle type="lightning" className="scale-75" />
                <span className="font-hand text-xl text-sketch-ink">Action markers</span>
              </div>
              <SketchBody size="sm" tone="muted" className="mt-2">Lightning bolts and arrows for CTAs and navigation</SketchBody>
            </SketchSurface>
            <SketchSurface tone="note-lilac" padding="md" radius="lg">
              <div className="flex items-center gap-3">
                <SketchDoodle type="heart" className="scale-75" />
                <span className="font-hand text-xl text-sketch-ink">Passion markers</span>
              </div>
              <SketchBody size="sm" tone="muted" className="mt-2">Hearts and diamonds for things you love or value</SketchBody>
            </SketchSurface>
            <SketchSurface tone="note-red" padding="md" radius="lg">
              <div className="flex items-center gap-3">
                <SketchDoodle type="diamond" className="scale-75" />
                <span className="font-hand text-xl text-sketch-ink">Gem markers</span>
              </div>
              <SketchBody size="sm" tone="muted" className="mt-2">Diamonds for premium or special content</SketchBody>
            </SketchSurface>
            <SketchSurface tone="card" padding="md" radius="lg">
              <div className="flex items-center gap-3">
                <SketchArrow label="point here" className="scale-90" />
             </div>
              <SketchBody size="sm" tone="muted" className="mt-2">Arrows with labels for directing attention</SketchBody>
           </SketchSurface>
         </div>
       </Group>

        <Group label="Tech icons (excalidraw style scribbles)">
          <div className="space-y-6">
            <div>
              <p className="sketch-demo-label">Languages</p>
              <div className="mt-3 flex flex-wrap items-center gap-6">
                {([
                  { type: "html", label: "HTML5" },
                  { type: "css", label: "CSS3" },
                  { type: "javascript", label: "JavaScript" },
                  { type: "typescript", label: "TypeScript" },
                  { type: "java", label: "Java" },
                ] as const).map(({ type, label }) => (
                  <span key={type} className="inline-flex items-center gap-2">
                    <SketchTechIcon type={type} size={44} />
                    <span className="font-hand text-base text-sketch-ink">{label}</span>
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="sketch-demo-label">Frontend</p>
              <div className="mt-3 flex flex-wrap items-center gap-6">
                {([
                  { type: "react", label: "React" },
                  { type: "tailwind", label: "Tailwind CSS" },

                  { type: "nextjs", label: "Next.js" },
                  { type: "vite", label: "Vite" },
                  { type: "clerk", label: "Clerk (Auth)" },
                ] as const).map(({ type, label }) => (
                  <span key={type} className="inline-flex items-center gap-2">
                    <SketchTechIcon type={type} size={44} />
                    <span className="font-hand text-base text-sketch-ink">{label}</span>
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="sketch-demo-label">Backend</p>
              <div className="mt-3 flex flex-wrap items-center gap-6">
                {([
                  { type: "node", label: "Node.js" },
                  { type: "express", label: "Express.js" },
                  { type: "restapi", label: "REST APIs" },
                  { type: "jwtauth", label: "JWT Auth" },
                ] as const).map(({ type, label }) => (
                  <span key={type} className="inline-flex items-center gap-2">
                    <SketchTechIcon type={type} size={44} />
                    <span className="font-hand text-base text-sketch-ink">{label}</span>
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="sketch-demo-label">Framework</p>
              <div className="mt-3 flex flex-wrap items-center gap-6">
                {([
                  { type: "trpc", label: "tRPC" },
                  { type: "turborepo", label: "turborepo" },
                  { type: "nextjs", label: "Next.js" },
                  { type: "drizzle", label: "Drizzle ORM" },
                  { type: "zod", label: "Zod" },
                ] as const).map(({ type, label }) => (
                  <span key={type} className="inline-flex items-center gap-2">
                    <SketchTechIcon type={type} size={44} />
                    <span className="font-hand text-base text-sketch-ink">{label}</span>
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="sketch-demo-label">Databases</p>
              <div className="mt-3 flex flex-wrap items-center gap-6">
                {([
                  { type: "mongodb", label: "MongoDB" },
                  { type: "postgresql", label: "PostgreSQL" },
                  { type: "mysql", label: "MySQL" },
                  { type: "supabase", label: "Supabase" },
                  { type: "redis", label: "Redis" },
                ] as const).map(({ type, label }) => (
                  <span key={type} className="inline-flex items-center gap-2">
                    <SketchTechIcon type={type} size={44} />
                    <span className="font-hand text-base text-sketch-ink">{label}</span>
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="sketch-demo-label">Tools & Cloud</p>
              <div className="mt-3 flex flex-wrap items-center gap-6">
                {([
                  { type: "git", label: "Git" },
                  { type: "postman", label: "Postman" },
                  { type: "docker", label: "Docker" },
                  { type: "aws", label: "AWS" },
                  { type: "render", label: "Render" },
                  { type: "railway", label: "Railway" },
                  { type: "vercel", label: "Vercel" },
                ] as const).map(({ type, label }) => (
                  <span key={type} className="inline-flex items-center gap-2">
                    <SketchTechIcon type={type} size={44} />
                    <span className="font-hand text-base text-sketch-ink">{label}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Group>

        <SectionFrame label="Hero">
          <HeroSection />
        </SectionFrame>

        <SectionFrame label="Tech Stack">
          <TechStackSection />
        </SectionFrame>

        <SectionFrame label="Projects">
          <ProjectsSection />
        </SectionFrame>

        <SectionFrame label="Blog">
          <BlogSection />
        </SectionFrame>

        <SectionFrame label="Certificates">
          <CertificatesSection />
        </SectionFrame>

        <SectionFrame label="Contact">
          <ContactSection />
        </SectionFrame>
      </div>
    </UIDemoShell>
  );
}

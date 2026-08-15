"use client";

import { InfiniteCanvas } from "@/components/canvas/infinite-canvas";
import { HeroSection } from "@/components/portfolio/sections/hero-section";
import { TechStackSection } from "@/components/portfolio/sections/tech-stack-section";
import { ProjectsSection } from "@/components/portfolio/sections/projects-section";
import { BlogSection } from "@/components/portfolio/sections/blog-section";
import { CertificatesSection } from "@/components/portfolio/sections/certificates-section";
import { ContactSection } from "@/components/portfolio/sections/contact-section";
import { LeftToolbar } from "@/components/toolbar/left-toolbar";
import { TopToolbar } from "@/components/toolbar/top-toolbar";
import { blogs, certificates, profile, projects, repositories } from "@/data/content";
import { useSketchTheme } from "@/lib/sketch/theme";

function CanvasItem({
  x,
  y,
  width = 1024,
  id,
  children,
}: {
  x: number;
  y: number;
  width?: number;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} data-canvas-section={id} className="absolute" style={{ left: x, top: y, width }}>
      {children}
    </div>
  );
}

export function ExcalidrawPortfolio() {
  const { theme, toggleTheme } = useSketchTheme();

  return (
    <main className="portfolio-shell" data-theme={theme}>
      <div className="desktop-canvas">
        <InfiniteCanvas>
          {/* Single Column Infinite Canvas Workspace */}
          <CanvasItem id="hero" x={100} y={100}><HeroSection /></CanvasItem>
          <CanvasItem id="tech-stack" x={100} y={720}><TechStackSection /></CanvasItem>
          <CanvasItem id="projects" x={100} y={1900}><ProjectsSection /></CanvasItem>
          <CanvasItem id="blog" x={100} y={2850}><BlogSection /></CanvasItem>
          <CanvasItem id="certificates" x={100} y={3590}><CertificatesSection /></CanvasItem>
          <CanvasItem id="contact" x={100} y={4260}><ContactSection /></CanvasItem>
        </InfiniteCanvas>
        <TopToolbar theme={theme} onToggleTheme={toggleTheme} />
        <LeftToolbar />
        <p className="canvas-hint font-mono">Drag to pan. Wheel scrolls the canvas. Ctrl/⌘ + wheel zooms.</p>
      </div>

      <MobileWhiteboard theme={theme} onToggleTheme={toggleTheme} />
    </main>
  );
}

function MobileWhiteboard({ theme, onToggleTheme }: { theme: "light" | "dark"; onToggleTheme: () => void }) {
  return (
    <div className="mobile-whiteboard">
      <header className="mobile-chrome">
        <span className="font-hand text-3xl">Portfolio</span>
        <button type="button" onClick={onToggleTheme}>{theme === "dark" ? "Light" : "Dark"}</button>
      </header>
      <section className="mobile-hero sketch-mobile-card">
        <p className="font-hand text-2xl text-accent">Hey, I&apos;m</p>
        <h1 className="font-hand text-7xl leading-none text-ink">{profile.name}</h1>
        <p className="mt-5 text-lg leading-8 text-body">{profile.headline}</p>
        <p className="mt-3 font-hand text-xl text-accent">• {profile.seeking}</p>
      </section>

      <section id="mobile-projects" className="grid gap-5">
        <h2 className="font-hand text-5xl text-ink">Featured Projects ↓</h2>
        {projects.map((project, index) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <article className="sketch-mobile-card" style={{ transform: `rotate(${index % 2 ? 1 : -1}deg)` }}>
              <div className="flex items-center justify-between">
                <h3 className="font-hand text-4xl text-ink group-hover:text-accent transition-colors">{project.name}</h3>
                <span className="font-hand text-2xl">↗</span>
              </div>
              <p className="mt-3 leading-7 text-body">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((chip) => <span key={chip} className="mobile-chip">{chip}</span>)}
              </div>
            </article>
          </a>
        ))}
      </section>

      <section className="sketch-mobile-card rotate-[-1deg]">
        <h2 className="font-hand text-5xl text-ink">Last note</h2>
        <div className="mt-5 grid gap-3 font-hand text-2xl text-ink">
          <a href={`mailto:${profile.email}`}>email → {profile.email}</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">github → @Atishay-j-a-in ↗</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">linkedin → /in/atishay-jain-920326324 ↗</a>
        </div>
        <div className="mt-6">
          <a
            href={profile.resume}
            download="Atishay_Jain_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-button filled inline-block"
          >
            Download Resume ▧
          </a>
        </div>
      </section>
    </div>
  );
}

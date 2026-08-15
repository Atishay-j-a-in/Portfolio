import { SketchAnnotation } from "@/components/ui/sketch/annotation";
import { SketchBody } from "@/components/ui/sketch/body";
import { SketchButton } from "@/components/ui/sketch/button";
import { SketchHeading } from "@/components/ui/sketch/heading";
import { SketchSurface } from "@/components/ui/sketch/surface";
import { profile } from "@/data/content";

export function ContactSection() {
  return (
    <section className="relative w-full max-w-2xl space-y-4">
      <SketchSurface tone="surface" padding="lg" radius="lg">
        <div className="space-y-6">
          <SketchHeading level={2} size="xl">
            Last note
          </SketchHeading>
          <SketchBody size="md" tone="muted">
            If this canvas felt familiar, we should probably build something together.
          </SketchBody>
          <div className="grid gap-3 font-hand text-2xl text-sketch-ink">
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-sketch-accent transition-colors inline-flex items-center gap-2"
            >
              email {`>`} {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sketch-accent transition-colors inline-flex items-center gap-2"
            >
              linkedin {`>`} /in/atishay-jain-920326324 ↗
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sketch-accent transition-colors inline-flex items-center gap-2"
            >
              github {`>`} @Atishay-j-a-in ↗
            </a>
          </div>
          <div className="pt-2">
            <a
              href={profile.resume}
              download="Atishay_Jain_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <SketchButton variant="primary" size="md">
                Download Resume ▧
              </SketchButton>
            </a>
          </div>
        </div>
      </SketchSurface>
      <SketchAnnotation className="text-right text-base" tone="accent" rotation={4}>
        Let&apos;s build.
      </SketchAnnotation>
    </section>
  );
}

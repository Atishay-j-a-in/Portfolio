import Image from "next/image";
import { SketchHeading } from "@/components/ui/sketch/heading";
import { SketchNote } from "@/components/ui/sketch/note";

export function CertificatesSection() {
  return (
    <section className="relative w-full max-w-5xl space-y-6">
      <SketchHeading level={2} size="xl">
        Pinned certificates
      </SketchHeading>

      <div className="max-w-xl">
        <a
          href="/certificate.png"
          target="_blank"
          rel="noopener noreferrer"
          className="block group focus:outline-none"
        >
          <SketchNote
            tone="yellow"
            pin={true}
            rotation={-2}
            className="transition-transform group-hover:scale-[1.01]"
          >
            <div className="space-y-4 p-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-[var(--sketch-border-soft)] shadow-sm">
                <Image
                  src="/certificate.png"
                  alt="Certificate"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
              <div className="flex items-center justify-between font-hand text-lg text-sketch-ink">
                <span>Verified Certificate</span>
                <span className="text-sketch-accent group-hover:translate-x-0.5 transition-transform">
                  View full ↗
                </span>
              </div>
            </div>
          </SketchNote>
        </a>
      </div>
    </section>
  );
}


import { SketchSurface, type SketchSurfaceProps } from "@/components/ui/sketch/surface";

export function SketchPanel(props: SketchSurfaceProps) {
  return <SketchSurface tone="paper" padding="md" radius="lg" rough={false} {...props} />;
}

import { HandDrawnArrow } from "@/components/elements/hand-drawn-arrow";

export function ExplorationArrows() {
  return (
    <>
      <HandDrawnArrow label="Projects →" className="left-[12450px] top-[9550px] rotate-[-2deg]" />
      <HandDrawnArrow label="← Github Activity" className="left-[7550px] top-[9700px] rotate-[182deg]" />
      <HandDrawnArrow label="↗ Certificates" className="left-[11650px] top-[7850px] rotate-[-34deg]" />
      <HandDrawnArrow label="Open Source Experiments ↓" className="left-[8200px] top-[11900px] rotate-[96deg]" />
      <HandDrawnArrow label="Experience ↓" className="left-[9700px] top-[12150px] rotate-[88deg]" />
      <HandDrawnArrow label="Blog notes ↘" className="left-[11900px] top-[11800px] rotate-[42deg]" />
    </>
  );
}

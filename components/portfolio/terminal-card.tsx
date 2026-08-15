import { SketchBody } from "@/components/ui/sketch/body";
import { SketchWindow } from "@/components/ui/sketch/window";

type TerminalCardProps = {
  role: string;
  loves: string[];
  status: string;
  title?: string;
  prompt?: string;
};

export function TerminalCard({ role, loves, status, title = "yourname@portfolio", prompt = "yourname@portfolio ~" }: TerminalCardProps) {
  const loveLine = JSON.stringify(loves);
  return (
    <SketchWindow title={prompt} dots>
      <pre className="font-mono text-base leading-7 text-code">
{`> ${title}
const me = {
  role: "${role}",
  loves: ${loveLine},
  status: "${status}"
};`}
    </pre>
      <SketchBody size="sm" tone="muted" className="mt-3 font-mono text-sm">
        {"// Available for interesting problems, kind teams, and shared demos."}
   </SketchBody>
  </SketchWindow>
  );
}

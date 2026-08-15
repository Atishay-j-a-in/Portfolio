import { cn, rotateStyle } from "@/lib/utils";

export function CommentTag({ children, className, rotation = -3 }: { children: React.ReactNode; className?: string; rotation?: number }) {
  return (
    <p className={cn("font-hand text-[108px] leading-none text-muted", className)} style={rotateStyle(rotation)}>
      {children}
    </p>
  );
}

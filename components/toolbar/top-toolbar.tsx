"use client";

import { DownloadSimple, Moon, Sun } from "@phosphor-icons/react";
import {
  SketchArrowIcon,
  SketchDotsIcon,
  SketchEllipseIcon,
  SketchEraserIcon,
  SketchHandIcon,
  SketchImageIcon,
  SketchLineIcon,
  SketchPencilIcon,
  SketchPointerIcon,
  SketchRectangleIcon,
  SketchSelectionIcon,
  SketchTextIcon,
} from "@/components/sketch/icon-set";
import { SketchDivider } from "@/components/ui/sketch/divider";
import { SketchIconButton } from "@/components/ui/sketch/icon-button";
import { SketchToolbar } from "@/components/ui/sketch/toolbar";
import { SketchToolButton } from "@/components/ui/sketch/tool-button";
import { profile } from "@/data/content";

const fakeTools: Array<{ icon: typeof SketchHandIcon; label: string; active?: boolean }> = [
  { icon: SketchHandIcon, label: "Hand" },
  { icon: SketchPointerIcon, label: "Pointer", active: true },
  { icon: SketchRectangleIcon, label: "Rectangle" },
  { icon: SketchEllipseIcon, label: "Ellipse" },
  { icon: SketchArrowIcon, label: "Arrow" },
  { icon: SketchLineIcon, label: "Line" },
  { icon: SketchPencilIcon, label: "Pen" },
  { icon: SketchTextIcon, label: "Text" },
  { icon: SketchImageIcon, label: "Image" },
  { icon: SketchSelectionIcon, label: "Selection" },
  { icon: SketchEraserIcon, label: "Eraser" },
];

type TopToolbarProps = {
  theme: "light" | "dark";
  onToggleTheme: () => void;
};

export function TopToolbar({ theme, onToggleTheme }: TopToolbarProps) {
  return (
    <>
      <div className="hamburger chrome-panel" aria-hidden="true">
        <SketchDotsIcon size={28} />
     </div>

      <div className="top-toolbar-wrap">
        <SketchToolbar className="!h-[68px] !min-w-[720px] !gap-3" floating>
          <span aria-hidden="true" className="grid size-11 place-items-center font-hand text-2xl text-sketch-muted">
            {"\u{1F512}"}
         </span>
          <SketchDivider orientation="vertical" className="!h-9" />
          {fakeTools.map(({ icon: Icon, label, active }) => (
            <SketchToolButton key={label} icon={<Icon size={22} />} label={label} active={!!active} />
          ))}
          <SketchDivider orientation="vertical" className="!h-9" />
          <span aria-hidden="true" className="grid size-11 place-items-center text-sketch-muted">
            <SketchSelectionIcon size={22} />
         </span>
       </SketchToolbar>
     </div>

      <div className="right-actions">
        <SketchIconButton label="Toggle theme" variant="chrome" onClick={onToggleTheme}>
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
     </SketchIconButton>
        <a href={profile.resume} aria-label="Download resume" className="chrome-button real-control">
          <DownloadSimple size={22} />
     </a>
   </div>
    </>
  );
}

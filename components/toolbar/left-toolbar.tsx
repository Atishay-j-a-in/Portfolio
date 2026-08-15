"use client";

import {
  SketchArrowIcon,
  SketchDotsIcon,
  SketchEllipseIcon,
  SketchEraserIcon,
  SketchHandIcon,
  SketchImageIcon,
  SketchLineIcon,
  SketchPointerIcon,
  SketchRectangleIcon,
  SketchSelectionIcon,
  SketchTextIcon,
} from "@/components/sketch/icon-set";
import { SketchToolbar } from "@/components/ui/sketch/toolbar";
import { SketchToolButton } from "@/components/ui/sketch/tool-button";

const tools = [
  SketchPointerIcon,
  SketchRectangleIcon,
  SketchEllipseIcon,
  SketchArrowIcon,
  SketchLineIcon,
  SketchTextIcon,
  SketchSelectionIcon,
  SketchImageIcon,
  SketchEraserIcon,
  SketchHandIcon,
] as const;

export function LeftToolbar() {
  return (
    <aside className="left-toolbar-wrap" aria-hidden="true">
      <SketchToolbar className="!flex-col !gap-2 !p-2" floating>
        {tools.map((Icon, index) => (
          <SketchToolButton key={index} icon={<Icon size={22} />} label={Icon.name?.replace("Icon", "") ?? "Tool"} active={index === 0} />
        ))}
        <SketchToolButton icon={<SketchDotsIcon size={22} />} label="More" />
     </SketchToolbar>
   </aside>
  );
}

# Excalidraw Portfolio — Build Plan

## Design Read

**Reading this as:** a developer portfolio for technical recruiters and engineering peers, with an Excalidraw / infinite-canvas / sketch language, leaning toward Tailwind v4 utilities + Rough.js + custom pan/zoom with no heavy framework.

**Dials:** `VARIANCE: 9` / `MOTION: 6` / `DENSITY: 3`

---

## Stack & Dependencies

- **Next.js 16** (already set up via pnpm)
- **Tailwind CSS v4** (already configured)
- **Rough.js** (`roughjs`) — for hand-drawn SVG borders, arrows, shapes
- **Motion** (`motion/react`) — for lightweight animations
- **Fonts:** Excalifont (hand-drawn headings), Inter (body), JetBrains Mono (code) — all self-hosted via `next/font`
- **Icons:** `@phosphor-icons/react` (sparingly)

---

## File Structure

```
app/
  layout.tsx              ← fonts, theme provider, metadata
  page.tsx                ← single canvas page (client component)
  globals.css             ← Tailwind + custom CSS vars + grid pattern
components/
  canvas/
    infinite-canvas.tsx   ← main pan/zoom wrapper (client)
    dot-grid.tsx          ← SVG dot pattern background
  toolbar/
    top-toolbar.tsx       ← decorative Excalidraw top bar
    left-toolbar.tsx      ← decorative Excalidraw left tools
    bottom-controls.tsx   ← zoom %, undo/redo, zoom in/out
  sections/
    hero.tsx              ← "Your Name" title + arrows
    about.tsx             ← sticky note with tape
    projects.tsx          ← hand-drawn project cards
    skills.tsx            ← system architecture diagram
    timeline.tsx          ← roadmap experience
    blog.tsx              ← scattered sticky notes
    certificates.tsx      ← pinned certificates
    github.tsx            ← hand-drawn commit graph
    contact.tsx           ← notebook page
  elements/
    hand-drawn-box.tsx    ← rough.js rectangle wrapper
    hand-drawn-arrow.tsx  ← rough.js arrow
    sticky-note.tsx       ← note + tape + shadow
    doodle.tsx            ← decorative SVG doodle
    comment-tag.tsx       ← tiny handwritten annotation
  decorative/
    exploration-arrows.tsx ← arrows pointing off-screen
  ui/
    theme-toggle.tsx      ← light/dark switch
  easter-eggs/
    index.tsx             ← clickable doodle animations
data/
  content.ts              ← all portfolio data
hooks/
  use-canvas-pan.ts       ← pan + zoom + drag logic
lib/
  utils.ts                ← random rotation helper etc.
```

---

## Canvas Implementation

- Viewport: `overflow: hidden` on body
- Inner canvas: absolutely positioned div with `transform: translate(x,y) scale(z)`
- Pan: mouse drag (pointerdown → pointermove → pointerup)
- Zoom: scroll wheel (centered on cursor)
- Initial zoom: `0.15` (15%)
- Initial offset: centered on hero section
- Canvas size: effectively infinite (large `22000px × 22000px` plane with no pan bounds)

---

## Section Coordinates (canvas units, centered at ~10000,10000)

| Section       | X     | Y     | Notes              |
|---------------|-------|-------|--------------------|
| Hero          | 10000 | 10000 | Center of initial view |
| Projects      | 17500 | 10000 | Far right of hero  |
| About         | 5200  | 7000  | Upper-left         |
| Skills        | 5200  | 14500 | Bottom-left        |
| Timeline      | 10000 | 16200 | Far below hero     |
| Blog          | 16500 | 16000 | Bottom-right       |
| Certificates  | 16500 | 6200  | Upper-right        |
| GitHub        | 3600  | 10000 | Far left           |
| Contact       | 13800 | 13500 | Lower-right        |

---

## Phases

### Phase 1: Foundation
1. Install dependencies: `roughjs`, `motion`, `@phosphor-icons/react`
2. Download Excalifont woff2 and set up `next/font` local
3. Set up Inter + JetBrains Mono via `next/font/google`
4. Create base CSS with Tailwind v4 directives, CSS custom properties for theme, and the dotted-grid pattern
5. Build `ThemeProvider` context + `ThemeToggle` component
6. Build `useCanvasPan` hook — pointer-event-based drag + scroll-wheel zoom

### Phase 2: Canvas & UI Shell
7. Build `InfiniteCanvas` — extends full viewport, catches pointer events, applies transform
8. Build `DotGrid` — SVG pattern of subtle dots (tiny circles with low opacity)
9. Build **decorative toolbars** (no functionality):
   - `TopToolbar` — centered fake drawing tools
   - `LeftToolbar` — pointer, rectangle, diamond, arrow, line, text, image, selection, eraser
   - `BottomControls` — zoom %, zoom+zoom-, undo/redo
   - `RightFloating` — minimal floating buttons

### Phase 3: Sections (positioned absolutely on canvas)
10. **Hero** — "Your Name" in Excalifont, subtitle in Inter, hand-drawn arrows pointing off-screen
11. **About** — sticky note with tape, slight rotation, shadow, handwritten style
12. **Projects** — 4-6 project cards, each rotated ±2°, rough.js borders, tech chips, links
13. **Skills** — architecture diagram: React → Next.js → Node → Postgres → Redis → Docker → AWS, connected with rough.js arrows
14. **Timeline** — roadmap-style boxes connected with arrows, each company/internship
15. **Blog** — scattered sticky notes (3-4 posts), each with title + excerpt, far from hero
16. **Certificates** — overlapping pinned certificates in upper-right area
17. **GitHub** — hand-drawn commit graph + repos connected with arrows (far left)
18. **Contact** — notebook-style, email/LinkedIn/GitHub with hand-drawn icons

### Phase 4: Polish & Details
19. **Exploration arrows** — hand-drawn arrows at viewport edges pointing to unseen sections
20. **Decorative doodles** — stars, circles, rocket, coffee mug, laptop scattered across canvas
21. **Comment tags** — tiny handwritten notes like "Version 3", "This was fun."
22. **Easter eggs** — rocket launches on click, coffee steams, arrows wiggle on hover
23. **Custom cursor** — Excalidraw pointer style (optional, can be toggled)
24. **Mobile** — disable free pan below `md`, sections stack vertically with scroll, preserve dot-grid and hand-drawn aesthetic

### Phase 5: Data & Content
25. Create `data/content.ts` with all placeholder content
26. Wire sections to use data file
27. Final theme polish and cross-browser testing

---

## Theme Colors

### Light Mode
- Background: `#fafafa` (paper white)
- Grid dots: `#d4d4d4` (very subtle)
- Card bg: `#ffffff`
- Accent: `#8b5cf6` (purple)
- Text primary: `#171717`
- Text secondary: `#525252`

### Dark Mode (Excalidraw-inspired)
- Background: `#121212`
- Panel: `#1E1E24`
- Grid dots: `#2a2a2a`
- Card bg: `#232329`
- Accent: `#a78bfa` (lighter purple)
- Text primary: `#e0e0e0`
- Text secondary: `#a0a0a0`

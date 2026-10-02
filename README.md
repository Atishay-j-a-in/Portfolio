# 🎨 Atishay Jain — Excalidraw Developer Portfolio

A hand-drawn, interactive developer portfolio built with **Next.js 16**, **React 19**, **Rough.js**, **Tailwind CSS**, and **TypeScript**. Designed like an infinite **Excalidraw whiteboard canvas** where every section is a hand-crafted inspectable note, card, or diagram.

---

## 🌟 Features

- ✏️ **Excalidraw Canvas Workspace**: Built on an infinite zoomable/pannable canvas with a clean single-column layout and uniform section spacing.
- 🐍 **Custom Hand-Drawn Tech Icons**: Rough.js SVG icons including a custom coiled Python snake, React, Node.js, Express, MongoDB, and more.
- 🚀 **Featured Projects**: Interactive sketch project cards with live links:
  - **GrapePR**: [https://graphpr.atishayjain.engineer](https://graphpr.atishayjain.engineer)
  - **The Boring Form**: [https://boring.atishayjain.engineer](https://boring.atishayjain.engineer)
  - **Voyage**: [https://voyage.atishayjain.engineer](https://voyage.atishayjain.engineer)
  - **More Experiments**: [https://github.com/Atishay-j-a-in](https://github.com/Atishay-j-a-in)
- 📝 **Hashnode Blog Notes**: Pinned sticky notes linking to articles on [toddlerstech.hashnode.dev](https://toddlerstech.hashnode.dev).
- 🎓 **Pinned Certificate Note**: Verified certificate showcase note with full image view.
- 🎨 **Sketch Design System**: Custom hand-drawn buttons, annotations, badges, sticky notes, and paper cards.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **UI Library**: React 19
- **Hand-Drawn Canvas Engine**: [Rough.js](https://roughjs.com/)
- **Styling**: Tailwind CSS
- **Icons**: Custom Rough.js SVG Renderers & Lucide React
- **Language**: TypeScript

---

## 📁 Project Structure

```text
portfolio/
├── app/
│   ├── layout.tsx         # Root layout, Excalifont & favicon setup
│   ├── page.tsx           # Main Excalidraw Canvas workspace page
│   ├── favicon.ico        # Site favicon
│   └── ui/page.tsx        # UI showcase page for sketch components
├── components/
│   ├── excalidraw-portfolio.tsx   # Canvas container & section positioning
│   ├── portfolio/
│   │   ├── sections/      # Hero, Tech Stack, Projects, Blog, Certificates, Contact
│   │   ├── project-card.tsx
│   │   └── skeleton-coder.tsx
│   ├── sketch/            # Hand-drawn Rough.js icons & wavy underlines
│   └── ui/sketch/         # Reusable sketch badges, notes, cards, buttons
├── data/
│   └── content.ts         # Centralized profile, projects, blogs, & stack data
└── public/
    └── certificate.png    # Pinned certificate credential image
```

---

## 🚀 Getting Started

First, install the dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

---

## 📦 Production Build

To build the production bundle:

```bash
pnpm run build
```

---

## 📬 Contact & Links

- **Name**: Atishay Jain
- **Role**: Full Stack Developer (MERN)
- **Email**: [shepherdk450@gmail.com](mailto:shepherdk450@gmail.com)
- **LinkedIn**: [linkedin.com/in/atishay-jain-920326324](https://www.linkedin.com/in/atishay-jain-920326324)
- **GitHub**: [@Atishay-j-a-in](https://github.com/Atishay-j-a-in)
- **Blog**: [toddlerstech.hashnode.dev](https://toddlerstech.hashnode.dev)

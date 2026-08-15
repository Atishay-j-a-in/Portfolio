"use client";

import { useEffect, useRef } from "react";
import rough from "roughjs";
import { createSketchEllipseOptions, createSketchPathOptions, createSketchRectangleOptions } from "@/lib/sketch/rough";
import { cn } from "@/lib/utils";

export type SketchTechIconType =
  | "html"
  | "css"
  | "javascript"
  | "typescript"
  | "java"
  | "python"
  | "cpp"
  | "react"
  | "tailwind"
  | "nextjs"
  | "vite"
  | "tanstack"
  | "clerk"
  | "node"
  | "express"
  | "restapi"
  | "flask"
  | "fastapi"
  | "jwtauth"
  | "trpc"
  | "turborepo"
  | "drizzle"
  | "zod"
  | "mongodb"
  | "postgresql"
  | "mysql"
  | "supabase"
  | "redis"
  | "git"
  | "postman"
  | "docker"
  | "aws"
  | "render"
  | "railway"
  | "vercel"
  | "pnpm"
  | "pm2"
  | "tsup"
  | "tsx"
  | "dockercompose"
  | "wsl"
  | "openwebui"
  | "caddy"
  | "traefik"
  | "kafka"
  | "mongoose"
  | "openai"
  | "gcp"
  | "github"
  | "database"
  | "server"
  | "cloud"
  | "api"
  | "code"
  | "terminal"
  | "lock"
  | "lightning"
  | "cube"
  | "layer"
  | "gear"
  | "branch"
  | "link"
  | "monitor"
  | "mobile"
  | "shield"
  | "key";

type SketchTechIconProps = {
  type: SketchTechIconType;
  size?: number;
  className?: string;
  stroke?: string;
};

function drawTechIcon(svg: SVGSVGElement, type: SketchTechIconType, stroke: string) {
  const rc = rough.svg(svg);
  const pathOpts = { ...createSketchPathOptions({ strokeTone: "default" }), stroke, strokeWidth: 2.5, roughness: 1.3, bowing: 1.1 };
  const rectOpts = { ...createSketchRectangleOptions({ strokeTone: "default" }), stroke, strokeWidth: 2.5, roughness: 1.2 };
  const ellipseOpts = { ...createSketchEllipseOptions({ strokeTone: "default" }), stroke, strokeWidth: 2.5, roughness: 1.2 };

  switch (type) {
    // === LANGUAGES ===
    case "html":
      svg.appendChild(rc.path("M 18 12 L 82 12 L 74 84 L 50 94 L 26 84 Z", pathOpts));
      svg.appendChild(rc.path("M 34 32 L 66 32 M 34 32 L 38 52 L 64 52 M 64 52 L 62 72 L 50 76 L 38 72", { ...pathOpts, strokeWidth: 2.2 }));
      break;

    case "css":
      svg.appendChild(rc.path("M 18 12 L 82 12 L 74 84 L 50 94 L 26 84 Z", pathOpts));
      svg.appendChild(rc.path("M 66 32 L 34 32 L 36 50 L 64 50 L 62 70 L 50 74 L 38 70", { ...pathOpts, strokeWidth: 2.2 }));
      break;

    case "javascript":
      svg.appendChild(rc.rectangle(10, 10, 80, 80, { ...rectOpts, fill: "#f5d54e", fillStyle: "solid" }));
      svg.appendChild(rc.path("M 36 34 L 36 62 C 36 70, 26 70, 24 62", { ...pathOpts, stroke: "#1a1a1a", strokeWidth: 3.5 }));
      svg.appendChild(rc.path("M 54 62 C 56 68, 68 70, 70 60 C 72 48, 54 52, 56 40 C 58 32, 68 32, 70 38", { ...pathOpts, stroke: "#1a1a1a", strokeWidth: 3.5 }));
      break;

    case "typescript":
      svg.appendChild(rc.rectangle(10, 10, 80, 80, { ...rectOpts, fill: "#3178c6", fillStyle: "solid" }));
      svg.appendChild(rc.path("M 26 34 L 50 34 M 38 34 L 38 70", { ...pathOpts, stroke: "#ffffff", strokeWidth: 3.5 }));
      svg.appendChild(rc.path("M 54 62 C 56 68, 68 70, 70 60 C 72 48, 54 52, 56 40 C 58 32, 68 32, 70 38", { ...pathOpts, stroke: "#ffffff", strokeWidth: 3.5 }));
      break;

    case "java":
      // Steaming coffee cup logo
      svg.appendChild(rc.path("M 24 45 C 24 75, 76 75, 76 45 Z", pathOpts));
      svg.appendChild(rc.ellipse(50, 45, 52, 16, pathOpts));
      svg.appendChild(rc.path("M 76 50 C 90 50, 90 65, 74 65", pathOpts));
      svg.appendChild(rc.path("M 15 82 C 35 88, 65 88, 85 82", { ...pathOpts, strokeWidth: 3 }));
      // Steam
      svg.appendChild(rc.path("M 38 34 C 38 24, 44 24, 44 14", { ...pathOpts, strokeWidth: 2 }));
      svg.appendChild(rc.path("M 50 34 C 50 20, 58 20, 58 8", { ...pathOpts, strokeWidth: 2 }));
      svg.appendChild(rc.path("M 62 34 C 62 24, 68 24, 68 14", { ...pathOpts, strokeWidth: 2 }));
      break;

    case "python":
      // Hand-drawn coiled snake with head, eye, and forked tongue
      svg.appendChild(
        rc.path(
          "M 65 25 C 65 14, 35 14, 25 25 C 15 36, 15 48, 35 50 C 65 52, 75 62, 75 75 C 75 88, 55 90, 30 85 C 20 82, 15 75, 18 68 C 22 62, 30 65, 32 72 C 34 78, 55 80, 60 74 C 65 68, 50 62, 30 60 C 10 58, 2 40, 12 25 C 22 10, 65 5, 78 18 Z",
          { ...pathOpts, fill: stroke, fillStyle: "solid" }
        )
      );
      svg.appendChild(rc.circle(70, 18, 4, { ...ellipseOpts, fill: "#ffffff", fillStyle: "solid" }));
      svg.appendChild(rc.path("M 78 18 L 88 14 M 88 14 L 94 10 M 88 14 L 94 18", { ...pathOpts, strokeWidth: 2.5 }));
      break;

    case "cpp":
      svg.appendChild(rc.path("M 50 10 L 86 30 L 86 70 L 50 90 L 14 70 L 14 30 Z", pathOpts));
      svg.appendChild(rc.path("M 46 38 C 30 38, 30 62, 46 62", { ...pathOpts, strokeWidth: 3 }));
      svg.appendChild(rc.path("M 52 50 L 62 50 M 57 45 L 57 55", { ...pathOpts, strokeWidth: 2.5 }));
      svg.appendChild(rc.path("M 68 50 L 78 50 M 73 45 L 73 55", { ...pathOpts, strokeWidth: 2.5 }));
      break;

    // === FRONTEND ===
    case "react":
      svg.appendChild(rc.circle(50, 50, 14, { ...ellipseOpts, fill: stroke, fillStyle: "solid" }));
      svg.appendChild(rc.ellipse(50, 50, 76, 28, pathOpts));
      svg.appendChild(rc.ellipse(50, 50, 76, 28, { ...pathOpts, seed: 4 }));
      svg.appendChild(rc.ellipse(50, 50, 76, 28, { ...pathOpts, seed: 8 }));
      break;

    case "tailwind":
      // Twin flowing waves
      svg.appendChild(rc.path("M 14 42 C 22 24, 38 24, 46 38 C 54 52, 66 52, 74 42 C 78 37, 82 30, 86 28 C 78 46, 62 46, 54 32 C 46 18, 34 18, 26 28 Z", { ...pathOpts, fill: stroke, fillStyle: "solid" }));
      svg.appendChild(rc.path("M 14 68 C 22 50, 38 50, 46 64 C 54 78, 66 78, 74 68 C 78 63, 82 56, 86 54 C 78 72, 62 72, 54 58 C 46 44, 34 44, 26 54 Z", { ...pathOpts, fill: stroke, fillStyle: "solid" }));
      break;

    case "nextjs":
      svg.appendChild(rc.circle(50, 50, 76, pathOpts));
      svg.appendChild(rc.path("M 34 30 L 34 70 M 34 30 L 66 70 M 66 30 L 66 54", { ...pathOpts, strokeWidth: 3.5 }));
      break;

    case "vite":
      svg.appendChild(rc.path("M 14 20 L 50 88 L 86 20 L 56 20 L 50 34 L 44 20 Z", pathOpts));
      // Lightning bolt in center
      svg.appendChild(rc.path("M 54 12 L 32 50 L 50 50 L 44 80 L 68 40 L 50 40 Z", { ...pathOpts, strokeWidth: 2.5 }));
      break;

    case "tanstack":
      // Mountain trail motif
      svg.appendChild(rc.path("M 10 78 L 42 24 L 60 52 L 74 30 L 90 78 Z", pathOpts));
      svg.appendChild(rc.path("M 20 78 C 30 65, 50 65, 70 78", { ...pathOpts, strokeWidth: 2.5 }));
      break;

    case "clerk":
      svg.appendChild(rc.path("M 50 12 C 72 12, 82 24, 82 46 C 82 72, 68 84, 50 88 C 32 84, 18 72, 18 46 C 18 24, 28 12, 50 12 Z", pathOpts));
      svg.appendChild(rc.circle(50, 42, 18, pathOpts));
      svg.appendChild(rc.path("M 42 66 C 42 56, 58 56, 58 66", pathOpts));
      break;

    // === BACKEND ===
    case "node":
      svg.appendChild(rc.path("M 50 8 L 88 28 L 88 72 L 50 92 L 12 72 L 12 28 Z", pathOpts));
      svg.appendChild(rc.path("M 50 28 L 70 38 L 70 62 L 50 72 L 30 62 L 30 48 L 50 58 L 50 72", { ...pathOpts, strokeWidth: 2.5 }));
      break;

    case "express":
      // Handwritten ex mark
      svg.appendChild(rc.path("M 20 54 C 20 38, 44 38, 44 54 C 44 68, 20 68, 20 54 M 44 48 L 22 56", { ...pathOpts, strokeWidth: 3.5 }));
      svg.appendChild(rc.path("M 52 38 L 80 70 M 80 38 L 52 70", { ...pathOpts, strokeWidth: 3.5 }));
      break;

    case "restapi":
      // Braces {...}
      svg.appendChild(rc.path("M 28 20 C 18 20, 18 35, 18 45 C 18 50, 10 50, 10 50 C 10 50, 18 50, 18 55 C 18 65, 18 80, 28 80", { ...pathOpts, strokeWidth: 3 }));
      svg.appendChild(rc.circle(42, 50, 6, { ...ellipseOpts, fill: stroke, fillStyle: "solid" }));
      svg.appendChild(rc.circle(50, 50, 6, { ...ellipseOpts, fill: stroke, fillStyle: "solid" }));
      svg.appendChild(rc.circle(58, 50, 6, { ...ellipseOpts, fill: stroke, fillStyle: "solid" }));
      svg.appendChild(rc.path("M 72 20 C 82 20, 82 35, 82 45 C 82 50, 90 50, 90 50 C 90 50, 82 50, 82 55 C 82 65, 82 80, 72 80", { ...pathOpts, strokeWidth: 3 }));
      break;

    case "flask":
      svg.appendChild(rc.path("M 42 12 L 58 12 M 46 12 L 46 36 L 18 82 C 14 90, 86 90, 82 82 L 54 36 L 54 12", pathOpts));
      svg.appendChild(rc.path("M 26 70 C 40 65, 60 75, 74 70", { ...pathOpts, strokeWidth: 2 }));
      svg.appendChild(rc.circle(44, 76, 6, ellipseOpts));
      svg.appendChild(rc.circle(58, 78, 4, ellipseOpts));
      break;

    case "fastapi":
      svg.appendChild(rc.circle(50, 50, 76, pathOpts));
      svg.appendChild(rc.path("M 56 18 L 30 52 L 50 52 L 44 82 L 70 48 L 50 48 Z", { ...pathOpts, fill: stroke, fillStyle: "solid" }));
      break;

    case "jwtauth":
      // Badge starburst with JWT
      svg.appendChild(rc.circle(50, 50, 76, pathOpts));
      svg.appendChild(rc.path("M 24 38 L 34 38 M 29 38 L 29 64 M 24 64 L 34 64", { ...pathOpts, strokeWidth: 2.5 }));
      svg.appendChild(rc.path("M 40 38 L 46 64 L 52 38 L 58 64 L 64 38", { ...pathOpts, strokeWidth: 2.5 }));
      svg.appendChild(rc.path("M 70 38 L 84 38 M 77 38 L 77 64", { ...pathOpts, strokeWidth: 2.5 }));
      break;

    // === FRAMEWORK ===
    case "trpc":
      // Isometric cube
      svg.appendChild(rc.path("M 50 10 L 88 30 L 88 72 L 50 92 L 12 72 L 12 30 Z", pathOpts));
      svg.appendChild(rc.path("M 50 10 L 50 50 L 12 30 M 50 50 L 88 30 M 50 50 L 50 92", pathOpts));
      break;

    case "turborepo":
      svg.appendChild(rc.circle(50, 50, 76, pathOpts));
      svg.appendChild(rc.path("M 30 32 L 70 32 M 50 32 L 50 68", { ...pathOpts, strokeWidth: 4 }));
      break;

    case "drizzle":
      // Triple slanted dashes ///
      svg.appendChild(rc.path("M 20 75 L 38 25 M 42 75 L 60 25 M 64 75 L 82 25", { ...pathOpts, strokeWidth: 5 }));
      break;

    case "zod":
      svg.appendChild(rc.path("M 50 10 L 86 28 L 86 72 L 50 92 L 14 72 L 14 28 Z", pathOpts));
      svg.appendChild(rc.path("M 30 36 L 70 36 L 30 64 L 70 64", { ...pathOpts, strokeWidth: 4 }));
      break;

    // === DATABASES ===
    case "mongodb":
      // Leaf / Teardrop
      svg.appendChild(rc.path("M 50 8 C 22 36, 22 68, 50 92 C 78 68, 78 36, 50 8 Z", pathOpts));
      svg.appendChild(rc.path("M 50 8 L 50 92", { ...pathOpts, strokeWidth: 2 }));
      break;

    case "postgresql":
      // Elephant silhouette
      svg.appendChild(rc.path("M 28 32 C 18 32, 12 42, 14 54 C 16 66, 28 64, 34 60 C 34 76, 24 82, 18 84", pathOpts));
      svg.appendChild(rc.path("M 34 40 C 40 20, 75 20, 82 40 C 88 56, 80 75, 68 76 L 68 88 M 52 76 L 52 88", pathOpts));
      svg.appendChild(rc.circle(68, 38, 4, ellipseOpts));
      break;

    case "mysql":
      // Dolphin arching
      svg.appendChild(rc.path("M 14 62 C 24 35, 52 20, 84 34 C 70 48, 58 64, 38 70 C 24 72, 14 62, 14 62 Z", pathOpts));
      svg.appendChild(rc.path("M 52 26 L 62 12 L 64 28", pathOpts));
      svg.appendChild(rc.path("M 14 62 L 6 52 M 14 62 L 8 72", pathOpts));
      break;

    case "supabase":
      // Emerald lightning bolt / Flash
      svg.appendChild(rc.path("M 54 10 L 18 54 L 46 54 L 42 90 L 82 46 L 54 46 Z", { ...pathOpts, fill: stroke, fillStyle: "solid" }));
      break;

    case "redis":
      // Stacked 3D diamond layers
      svg.appendChild(rc.path("M 50 12 L 85 26 L 50 40 L 15 26 Z", pathOpts));
      svg.appendChild(rc.path("M 15 26 L 15 44 L 50 58 L 85 44 L 85 26", pathOpts));
      svg.appendChild(rc.path("M 15 44 L 15 62 L 50 76 L 85 62 L 85 44", pathOpts));
      svg.appendChild(rc.path("M 15 62 L 15 78 L 50 92 L 85 78 L 85 62", pathOpts));
      break;

    // === TOOLS & CLOUD ===
    case "git":
      svg.appendChild(rc.path("M 50 10 L 90 50 L 50 90 L 10 50 Z", pathOpts));
      svg.appendChild(rc.circle(36, 50, 8, ellipseOpts));
      svg.appendChild(rc.circle(64, 36, 8, ellipseOpts));
      svg.appendChild(rc.circle(64, 64, 8, ellipseOpts));
      svg.appendChild(rc.path("M 40 50 L 60 38 M 40 50 L 60 60", pathOpts));
      break;

    case "postman":
      // Jetpack astronaut / Postman rocket
      svg.appendChild(rc.circle(50, 50, 76, pathOpts));
      svg.appendChild(rc.path("M 30 65 L 68 32 M 54 32 L 68 32 L 68 46", { ...pathOpts, strokeWidth: 3 }));
      svg.appendChild(rc.circle(42, 53, 10, ellipseOpts));
      break;

    case "docker":
      // Whale with containers
      svg.appendChild(rc.rectangle(20, 36, 12, 10, rectOpts));
      svg.appendChild(rc.rectangle(34, 36, 12, 10, rectOpts));
      svg.appendChild(rc.rectangle(48, 36, 12, 10, rectOpts));
      svg.appendChild(rc.rectangle(34, 24, 12, 10, rectOpts));
      svg.appendChild(rc.rectangle(48, 24, 12, 10, rectOpts));
      svg.appendChild(rc.rectangle(48, 12, 12, 10, rectOpts));
      svg.appendChild(rc.path("M 10 52 L 86 52 C 84 76, 68 86, 48 86 C 30 86, 16 76, 10 52 Z", pathOpts));
      svg.appendChild(rc.circle(74, 64, 4, ellipseOpts));
      break;

    case "aws":
      // AWS smile arrow motif
      svg.appendChild(rc.path("M 22 34 L 30 62 L 36 34 L 42 62 L 50 34", { ...pathOpts, strokeWidth: 2.5 }));
      svg.appendChild(rc.path("M 56 60 C 58 64, 68 64, 68 56 C 68 48, 56 50, 58 42 C 60 36, 70 36, 70 40", { ...pathOpts, strokeWidth: 2.5 }));
      svg.appendChild(rc.path("M 20 72 C 42 88, 62 88, 80 72", { ...pathOpts, strokeWidth: 3 }));
      svg.appendChild(rc.path("M 72 70 L 82 72 L 78 82", { ...pathOpts, strokeWidth: 3 }));
      break;

    case "render":
      svg.appendChild(rc.path("M 24 24 L 56 24 C 70 24, 76 34, 76 46 C 76 58, 68 66, 54 66 L 24 66 M 50 66 L 76 90", pathOpts));
      svg.appendChild(rc.path("M 24 24 L 24 90", pathOpts));
      break;

    case "railway":
      // Train tracks sketch
      svg.appendChild(rc.path("M 14 36 L 86 36 M 14 64 L 86 64", { ...pathOpts, strokeWidth: 3 }));
      svg.appendChild(rc.path("M 28 26 L 28 74 M 44 26 L 44 74 M 60 26 L 60 74 M 76 26 L 76 74", { ...pathOpts, strokeWidth: 2.5 }));
      break;

    case "vercel":
      svg.appendChild(rc.path("M 50 14 L 88 82 L 12 82 Z", { ...pathOpts, fill: stroke, fillStyle: "solid" }));
      break;

    // === OTHER TECHNOLOGIES ===
    case "pnpm":
      // 4 block grid
      svg.appendChild(rc.rectangle(16, 16, 30, 30, rectOpts));
      svg.appendChild(rc.rectangle(54, 16, 30, 30, rectOpts));
      svg.appendChild(rc.rectangle(16, 54, 30, 30, rectOpts));
      svg.appendChild(rc.rectangle(54, 54, 30, 30, { ...rectOpts, fill: stroke, fillStyle: "solid" }));
      break;

    case "pm2":
      svg.appendChild(rc.path("M 50 10 L 86 30 L 86 70 L 50 90 L 14 70 L 14 30 Z", pathOpts));
      svg.appendChild(rc.path("M 26 40 L 26 64 M 26 40 L 40 40 C 46 40, 46 52, 40 52 L 26 52", { ...pathOpts, strokeWidth: 2.5 }));
      svg.appendChild(rc.path("M 50 40 L 50 64 M 50 40 L 60 52 L 70 40 M 70 40 L 70 64", { ...pathOpts, strokeWidth: 2.5 }));
      break;

    case "tsup":
      // Double chevrons >>
      svg.appendChild(rc.path("M 20 28 L 46 50 L 20 72", { ...pathOpts, strokeWidth: 4 }));
      svg.appendChild(rc.path("M 48 28 L 74 50 L 48 72", { ...pathOpts, strokeWidth: 4 }));
      break;

    case "tsx":
      svg.appendChild(rc.rectangle(12, 28, 76, 44, rectOpts));
      svg.appendChild(rc.path("M 24 40 L 36 40 M 30 40 L 30 60", { ...pathOpts, strokeWidth: 2.5 }));
      svg.appendChild(rc.path("M 42 56 C 44 60, 52 60, 52 52 C 52 44, 42 46, 44 40 C 46 36, 54 36, 54 40", { ...pathOpts, strokeWidth: 2.5 }));
      svg.appendChild(rc.path("M 60 40 L 74 60 M 74 40 L 60 60", { ...pathOpts, strokeWidth: 2.5 }));
      break;

    case "dockercompose":
      // Octopus
      svg.appendChild(rc.circle(50, 40, 40, pathOpts));
      svg.appendChild(rc.circle(42, 38, 6, ellipseOpts));
      svg.appendChild(rc.circle(58, 38, 6, ellipseOpts));
      svg.appendChild(rc.path("M 24 56 C 20 75, 30 85, 36 70 C 42 85, 50 85, 50 68 C 50 85, 58 85, 64 70 C 70 85, 80 75, 76 56", pathOpts));
      break;

    case "wsl":
      // Tux penguin outline
      svg.appendChild(rc.ellipse(50, 52, 44, 56, pathOpts));
      svg.appendChild(rc.circle(50, 24, 28, pathOpts));
      svg.appendChild(rc.path("M 44 26 L 56 26 L 50 32 Z", { ...pathOpts, fill: stroke, fillStyle: "solid" }));
      svg.appendChild(rc.ellipse(50, 56, 26, 36, pathOpts));
      break;

    case "openwebui":
      svg.appendChild(rc.circle(50, 50, 76, pathOpts));
      svg.appendChild(rc.circle(50, 50, 36, pathOpts));
      svg.appendChild(rc.circle(50, 50, 12, { ...ellipseOpts, fill: stroke, fillStyle: "solid" }));
      break;

    case "caddy":
      // Dome lock
      svg.appendChild(rc.rectangle(20, 44, 60, 42, rectOpts));
      svg.appendChild(rc.path("M 30 44 C 30 20, 70 20, 70 44", { ...pathOpts, strokeWidth: 3 }));
      svg.appendChild(rc.circle(50, 64, 10, ellipseOpts));
      break;

    case "traefik":
      // Traefik bird / gopher goggles
      svg.appendChild(rc.circle(50, 46, 52, pathOpts));
      svg.appendChild(rc.circle(36, 44, 16, ellipseOpts));
      svg.appendChild(rc.circle(64, 44, 16, ellipseOpts));
      svg.appendChild(rc.path("M 44 44 L 56 44", { ...pathOpts, strokeWidth: 3 }));
      svg.appendChild(rc.path("M 46 56 L 54 56", pathOpts));
      break;

    case "kafka":
      // Cluster hub
      svg.appendChild(rc.circle(50, 50, 24, { ...ellipseOpts, fill: stroke, fillStyle: "solid" }));
      svg.appendChild(rc.circle(24, 24, 14, ellipseOpts));
      svg.appendChild(rc.circle(76, 24, 14, ellipseOpts));
      svg.appendChild(rc.circle(50, 84, 14, ellipseOpts));
      svg.appendChild(rc.path("M 32 30 L 42 42 M 68 30 L 58 42 M 50 62 L 50 77", { ...pathOpts, strokeWidth: 2.5 }));
      break;

    case "mongoose":
      // M Horns
      svg.appendChild(rc.path("M 16 80 L 16 26 L 36 50 L 50 30 L 64 50 L 84 26 L 84 80", { ...pathOpts, strokeWidth: 3.5 }));
      break;

    case "openai":
      // Spiral rosette
      svg.appendChild(rc.circle(50, 50, 76, pathOpts));
      svg.appendChild(rc.path("M 50 20 C 65 20, 75 30, 70 45 C 65 60, 45 65, 35 55 C 25 45, 30 30, 45 25", { ...pathOpts, strokeWidth: 2.5 }));
      break;

    case "gcp":
      // Cloud motif
      svg.appendChild(rc.path("M 24 64 C 14 64, 10 52, 18 46 C 16 34, 30 26, 40 32 C 46 18, 68 20, 72 34 C 84 34, 88 50, 80 58 C 82 68, 72 74, 64 70 L 24 70 Z", pathOpts));
      break;

    case "github":
      // Octocat silhouette
      svg.appendChild(rc.ellipse(50, 54, 52, 44, pathOpts));
      svg.appendChild(rc.path("M 26 38 L 20 18 L 38 28", { ...pathOpts, strokeWidth: 2.5 }));
      svg.appendChild(rc.path("M 74 38 L 80 18 L 62 28", { ...pathOpts, strokeWidth: 2.5 }));
      svg.appendChild(rc.circle(38, 50, 6, ellipseOpts));
      svg.appendChild(rc.circle(62, 50, 6, ellipseOpts));
      svg.appendChild(rc.path("M 46 64 C 50 68, 50 68, 54 64", pathOpts));
      break;

    // === FALLBACKS & CORE ===
    case "database":
      svg.appendChild(rc.ellipse(50, 20, 60, 14, { ...pathOpts, fill: stroke, fillStyle: "solid" }));
      svg.appendChild(rc.path("M 20 20 L 20 80 C 20 88, 80 88, 80 80 L 80 20", pathOpts));
      svg.appendChild(rc.path("M 20 40 C 20 48, 80 48, 80 40", pathOpts));
      svg.appendChild(rc.path("M 20 60 C 20 68, 80 68, 80 60", pathOpts));
      break;

    case "server":
      svg.appendChild(rc.rectangle(16, 18, 68, 24, { ...rectOpts, fill: stroke, fillStyle: "solid" }));
      svg.appendChild(rc.rectangle(16, 58, 68, 24, { ...rectOpts, fill: stroke, fillStyle: "solid" }));
      svg.appendChild(rc.circle(28, 30, 4, ellipseOpts));
      svg.appendChild(rc.circle(28, 70, 4, ellipseOpts));
      svg.appendChild(rc.path("M 40 30 L 72 30 M 40 70 L 72 70", pathOpts));
      break;

    case "cloud":
      svg.appendChild(rc.path("M 24 64 C 14 64, 10 52, 18 46 C 16 34, 30 26, 40 32 C 46 18, 68 20, 72 34 C 84 34, 88 50, 80 58 C 82 68, 72 74, 64 70 L 24 70 Z", pathOpts));
      break;

    case "api":
      svg.appendChild(rc.rectangle(10, 30, 80, 40, { ...rectOpts, fill: stroke, fillStyle: "solid" }));
      svg.appendChild(rc.path("M 30 44 L 30 56 M 40 44 L 40 56 M 50 44 L 50 56", { ...pathOpts, stroke: "#ffffff", strokeWidth: 3 }));
      svg.appendChild(rc.path("M 62 46 L 72 46 M 62 54 L 72 54", { ...pathOpts, stroke: "#ffffff", strokeWidth: 3 }));
      break;

    case "code":
      svg.appendChild(rc.path("M 24 30 L 10 50 L 24 70", pathOpts));
      svg.appendChild(rc.path("M 76 30 L 90 50 L 76 70", pathOpts));
      svg.appendChild(rc.path("M 56 18 L 44 82", pathOpts));
      break;

    case "terminal":
      svg.appendChild(rc.rectangle(10, 18, 80, 64, { ...rectOpts, fill: stroke, fillStyle: "solid" }));
      svg.appendChild(rc.path("M 24 40 L 36 50 L 24 60", { ...pathOpts, stroke: "#ffffff", strokeWidth: 3 }));
      svg.appendChild(rc.path("M 44 60 L 70 60", { ...pathOpts, stroke: "#ffffff", strokeWidth: 3 }));
      break;

    case "lock":
      svg.appendChild(rc.rectangle(20, 44, 60, 44, { ...rectOpts, fill: stroke, fillStyle: "solid" }));
      svg.appendChild(rc.path("M 30 44 L 30 30 C 30 16, 70 16, 70 30 L 70 44", pathOpts));
      svg.appendChild(rc.circle(50, 62, 6, { ...ellipseOpts, fill: "#ffffff", stroke: "#ffffff" }));
      break;

    case "lightning":
      svg.appendChild(rc.path("M 55 6 L 26 52 L 46 52 L 38 94 L 76 42 L 54 42 Z", { ...pathOpts, fill: stroke, fillStyle: "solid" }));
      break;

    case "cube":
      svg.appendChild(rc.path("M 50 8 L 86 28 L 86 72 L 50 92 L 14 72 L 14 28 Z", pathOpts));
      svg.appendChild(rc.path("M 50 8 L 50 50 L 14 28 M 50 50 L 86 28 M 50 50 L 50 92", pathOpts));
      break;

    case "layer":
      svg.appendChild(rc.path("M 50 14 L 88 32 L 50 50 L 12 32 Z", pathOpts));
      svg.appendChild(rc.path("M 12 50 L 50 68 L 88 50", pathOpts));
      svg.appendChild(rc.path("M 12 68 L 50 86 L 88 68", pathOpts));
      break;

    case "gear":
      svg.appendChild(rc.circle(50, 50, 36, { ...pathOpts, fill: "none" }));
      svg.appendChild(rc.circle(50, 50, 12, { ...ellipseOpts, fill: stroke, fillStyle: "solid" }));
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI * 2) / 8;
        const x1 = 50 + Math.cos(angle) * 30;
        const y1 = 50 + Math.sin(angle) * 30;
        const x2 = 50 + Math.cos(angle) * 44;
        const y2 = 50 + Math.sin(angle) * 44;
        svg.appendChild(rc.line(x1, y1, x2, y2, { ...pathOpts, strokeWidth: 6 }));
      }
      break;

    case "branch":
      svg.appendChild(rc.circle(24, 24, 8, { ...ellipseOpts, fill: stroke, fillStyle: "solid" }));
      svg.appendChild(rc.circle(24, 76, 8, { ...ellipseOpts, fill: stroke, fillStyle: "solid" }));
      svg.appendChild(rc.circle(76, 50, 8, { ...ellipseOpts, fill: stroke, fillStyle: "solid" }));
      svg.appendChild(rc.path("M 24 32 L 24 68", pathOpts));
      svg.appendChild(rc.path("M 24 50 C 40 50, 60 50, 68 50", pathOpts));
      break;

    case "link":
      svg.appendChild(rc.path("M 36 50 C 24 38, 24 22, 36 14 C 48 6, 64 6, 72 18", pathOpts));
      svg.appendChild(rc.path("M 64 50 C 76 62, 76 78, 64 86 C 52 94, 36 94, 28 82", pathOpts));
      svg.appendChild(rc.path("M 40 38 L 60 62", pathOpts));
      svg.appendChild(rc.path("M 60 38 L 40 62", pathOpts));
      break;

    case "monitor":
      svg.appendChild(rc.rectangle(10, 16, 80, 56, { ...rectOpts, fill: stroke, fillStyle: "solid" }));
      svg.appendChild(rc.path("M 34 72 L 34 84 L 66 84 L 66 72", pathOpts));
      svg.appendChild(rc.path("M 26 88 L 74 88", pathOpts));
      break;

    case "mobile":
      svg.appendChild(rc.rectangle(28, 10, 44, 80, { ...rectOpts, fill: stroke, fillStyle: "solid", roughness: 1.4 }));
      svg.appendChild(rc.path("M 44 80 L 56 80", { ...pathOpts, strokeWidth: 3 }));
      svg.appendChild(rc.rectangle(34, 20, 32, 48, { ...rectOpts, stroke: "#ffffff", strokeWidth: 1.5, fill: "none" }));
      break;

    case "shield":
      svg.appendChild(rc.path("M 50 8 L 84 22 L 84 50 C 84 72, 68 86, 50 92 C 32 86, 16 72, 16 50 L 16 22 Z", { ...pathOpts, fill: stroke, fillStyle: "solid" }));
      svg.appendChild(rc.path("M 34 48 L 46 60 L 68 36", { ...pathOpts, strokeWidth: 3.5 }));
      break;

    case "key":
      svg.appendChild(rc.circle(26, 50, 18, { ...pathOpts, fill: "none" }));
      svg.appendChild(rc.circle(26, 50, 6, { ...ellipseOpts, fill: stroke, fillStyle: "solid" }));
      svg.appendChild(rc.path("M 44 50 L 84 50 L 84 62 M 74 50 L 74 60 M 64 50 L 64 58", pathOpts));
      break;
  }
}

export function SketchTechIcon({ type, size = 56, className, stroke = "var(--sketch-ink)" }: SketchTechIconProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    svg.replaceChildren();
    drawTechIcon(svg, type, stroke);
  }, [type, stroke]);

  return (
    <span className={cn("pointer-events-none inline-block text-[var(--sketch-ink)]", className)}>
      <svg ref={svgRef} width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" className="overflow-visible" />
    </span>
  );
}

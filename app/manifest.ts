import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Atishay Jain — Freelance Website Builder & MERN Developer",
    short_name: "Atishay Jain",
    description:
      "Atishay Jain builds freelance websites, landing pages and MERN apps. Open to freelance work and software internships.",
    start_url: "/",
    display: "standalone",
    background_color: "#121212",
    theme_color: "#121212",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}

import { NextResponse } from "next/server";
import { blogs, certificates, profile, projects } from "@/data/content";

export async function GET() {
  return NextResponse.json({
    name: profile.name,
    role: profile.role,
    headline: profile.headline,
    seeking: profile.seeking,
    url: "https://atishayjain.engineer",
    contact: {
      email: profile.email,
      github: profile.github,
      linkedin: profile.linkedin,
      resume: "https://atishayjain.engineer/resume.pdf",
    },
    services: [
      "Freelance business websites and landing pages (Next.js, React)",
      "Full-stack MERN apps with auth, REST APIs and MongoDB",
      "AI features: RAG search, PR review bots, MCP automation",
    ],
    openTo: ["freelance website projects", "software intern roles"],
    stack: ["React", "Next.js", "Node.js", "Express", "MongoDB", "TypeScript", "Postgres", "Docker", "AWS"],
    projects,
    certificates: certificates.map((c) => ({
      title: c.title,
      url: `https://atishayjain.engineer${c.href}`,
    })),
    blogs,
  });
}

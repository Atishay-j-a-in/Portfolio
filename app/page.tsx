import type { Metadata } from "next";
import { ExcalidrawPortfolio } from "@/components/excalidraw-portfolio";
import { blogs, certificates, profile, projects } from "@/data/content";

export const metadata: Metadata = {
  title: "Atishay Jain — Freelance Website Builder & MERN Developer",
  description:
    "Hire Atishay Jain for freelance websites, landing pages and MERN apps (React, Next.js, Node, MongoDB). NSUT Delhi CS 2028. Open to freelance projects and software internships.",
  alternates: { canonical: "https://atishayjain.engineer/" },
};

export default function Home() {
  return (
    <>
      {/* Server-rendered SEO copy for Google + AI crawlers.
          Visually hidden but present in HTML so bots that don't run
          the canvas JS still read who Atishay Jain is and what he offers. */}
      <div className="sr-only">
        <h1>
          Atishay Jain — Freelance Website Builder & Full Stack Developer
          (MERN)
        </h1>
        <p>
          {profile.headline} {profile.seeking} Based in Delhi, India, studying
          Computer Science at Netaji Subhas University of Technology (Class of
          2028). Available for freelance website projects, landing pages,
          business websites, and full-stack web apps, as well as software
          engineering intern roles.
        </p>
        <h2>Freelance website services</h2>
        <ul>
          <li>Business websites and landing pages in Next.js and React</li>
          <li>Full-stack MERN apps with auth, REST APIs and MongoDB</li>
          <li>AI features, RAG search and dashboard UIs</li>
          <li>Website speed, SEO and responsive UI fixes</li>
        </ul>
        <h2>Selected projects</h2>
        <ul>
          {projects.map((p) => (
            <li key={p.name}>
              {p.name} — {p.description} ({p.stack.join(", ")})
            </li>
          ))}
        </ul>
        <h2>Writing</h2>
        <ul>
          {blogs.map((b) => (
            <li key={b.title}>
              {b.title} — {b.desc}
            </li>
          ))}
        </ul>
        <h2>Certificates</h2>
        <ul>
          {certificates.map((c) => (
            <li key={c.title}>{c.title}</li>
          ))}
        </ul>
        <p>
          Contact: {profile.email}. GitHub: {profile.github}. LinkedIn:{" "}
          {profile.linkedin}.
        </p>
      </div>

      <ExcalidrawPortfolio />

      <noscript>
        <main>
          <h1>Atishay Jain — Freelance Website Builder</h1>
          <p>
            I build websites in React, Next.js and MERN. Contact
            shepherdk450@gmail.com for freelance work or internships.
          </p>
        </main>
      </noscript>
    </>
  );
}

export const profile = {
  name: "Atishay Jain",
  role: "Full Stack Developer (MERN)",
  headline:
    "Full Stack Developer (MERN) with expertise in React, Node.js, Express, and MongoDB, REST APIs, authentication, and responsive UI development.",
  seeking: "Seeking Software Engineering role to build scalable software products.",
  email: "shepherdk450@gmail.com",
  github: "https://github.com/Atishay-j-a-in",
  linkedin: "https://www.linkedin.com/in/atishay-jain-920326324",
  resume: "/resume.pdf",
};

export const projects = [
  {
    name: "GrapePR",
    description:
      "AI-powered GitHub PR review platform with context-aware insights and reviewer summaries.",
    stack: ["Next.js", "Inngest", "Pinecone"],
    tint: "var(--note-purple)",
    url: "https://graphpr.atishayjain.engineer",
  },
  {
    name: "The Boring Form",
    description:
      "tRPC monorepo with type-safe APIs, analytics, auth, and a form builder that survived scope creep.",
    stack: ["tRPC", "Drizzle", "Postgres"],
    tint: "var(--note-green)",
    url: "https://boring.atishayjain.engineer",
  },
  {
    name: "Voyage",
    description:
      "Unified email and calendar workspace with MCP integrations, smart search, and automation hooks.",
    stack: ["Next.js", "MCP", "AI SDK"],
    tint: "var(--note-red)",
    url: "https://voyage.atishayjain.engineer",
  },
  {
    name: "More Experiments",
    description:
      "Small experiments, side projects, WebSocket toys, and ideas that began as messy diagrams.",
    stack: ["WebSockets", "Workers", "Redis"],
    tint: "var(--note-yellow)",
    url: "https://github.com/Atishay-j-a-in",
  },
];

export const architecture = [
  "React",
  "Next.js",
  "Node",
  "Postgres",
  "Redis",
  "Docker",
  "AWS",
];

export const timeline = [
  {
    year: "2026",
    title: "Product Engineer",
    body: "Owned AI workflows, API surfaces, and production debugging loops.",
  },
  {
    year: "2025",
    title: "Backend Intern",
    body: "Built job queues, observability dashboards, and integrations that reduced manual ops.",
  },
  {
    year: "2024",
    title: "Open Source Builder",
    body: "Published reusable tooling, learned from issues, and wrote better docs than before.",
  },
];

export const blogs = [
  {
    title: "Where RAG Fails: Understand the Limitations",
    readTime: "5 min read",
    desc: "Retrieval Augmented Generation explained simply along with its core limitations in production.",
    url: "https://toddlerstech.hashnode.dev/where-rag-fails-understand-the-limitations",
  },
  {
    title: "How ChatGPT Understands Your Questions?",
    readTime: "12 min read",
    desc: "Exposing the process behind prompt interpretation, context awareness, and response generation.",
    url: "https://toddlerstech.hashnode.dev/how-chatgpt-understands-your-questions",
  },
  {
    title: "JWT Authentication in Node.js Explained Simply",
    readTime: "3 min read",
    desc: "A beginner-friendly guide to implementing secure JWT authentication in Node.js applications.",
    url: "https://toddlerstech.hashnode.dev/jwt-authentication-in-node-js-explained-simply",
  },
  {
    title: "Storing Uploaded Files and Serving Them in Express",
    readTime: "5 min read",
    desc: "Storage strategies, static file serving, security rules, and best practices for file uploads.",
    url: "https://toddlerstech.hashnode.dev/storing-uploaded-files-and-serving-them-in-express",
  },
];

export const certificates = [
  {
    title: "Web Development",
    src: "/certificate.png",
    href: "/certificate.png",
    tone: "yellow",
    rotation: -2,
  },
  {
    title: "GenAI Cohort",
    src: "/genai.png",
    href: "/genai.png",
    tone: "blue",
    rotation: 2,
  },
] as const;

export const repositories = [
  "ai-reviewer",
  "diagram-lab",
  "queue-kit",
  "notes-engine",
  "infra-scripts",
];

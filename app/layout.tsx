import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import { SketchThemeProvider } from "@/lib/sketch/theme";
import "./globals.css";

const siteUrl = "https://atishayjain.engineer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const excalifont = localFont({
  src: "../public/fonts/Excalifont-Regular.woff2",
  variable: "--font-excalifont",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
    { media: "(prefers-color-scheme: light)", color: "#fbfaf7" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Atishay Jain — Freelance Website Builder & MERN Developer",
    template: "%s | Atishay Jain",
  },
  description:
    "Atishay Jain builds fast websites in React, Next.js & MERN. Freelance projects, landing pages & full-stack apps. NSUT Delhi 2028.",
  keywords: [
    "Atishay Jain",
    "Atishay Jain portfolio",
    "Atishay Jain developer",
    "website builder for hire",
    "freelance website developer",
    "freelance MERN developer",
    "hire Next.js freelancer",
    "React website builder India",
    "landing page developer freelance",
    "full stack developer freelance",
    "software intern",
    "software engineering intern India",
    "MERN stack developer NSUT",
  ],
  authors: [{ name: "Atishay Jain", url: siteUrl }],
  creator: "Atishay Jain",
  publisher: "Atishay Jain",
  category: "portfolio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Atishay Jain — Portfolio",
    title: "Atishay Jain — Freelance Website Builder & MERN Developer",
    description:
      "Freelance websites, landing pages & MERN apps in React and Next.js. Open to freelance work and internships.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Atishay Jain, freelance website builder and full stack developer — portfolio cover showing React, Next.js and MERN skills",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atishay Jain — Freelance Website Builder & MERN Developer",
    description:
      "Freelance websites, landing pages and MERN apps. Open to freelance work and software intern roles.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  manifest: "/manifest.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Atishay Jain",
      url: siteUrl,
      jobTitle: "Freelance Website Builder & Full Stack Developer (MERN)",
      description:
        "Atishay Jain is a freelance website builder and MERN stack developer in Delhi, India, building React, Next.js, Node.js and MongoDB websites. Open to freelance projects and software internships.",
      email: "mailto:shepherdk450@gmail.com",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Netaji Subhas University of Technology",
      },
      knowsAbout: [
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "MongoDB",
        "TypeScript",
        "REST APIs",
        "Freelance Web Development",
        "GenAI",
        "RAG",
      ],
      sameAs: [
        "https://github.com/Atishay-j-a-in",
        "https://www.linkedin.com/in/atishay-jain-920326324",
        "https://toddlerstech.hashnode.dev",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#services`,
      name: "Atishay Jain — Website Development Services",
      url: siteUrl,
      provider: { "@id": `${siteUrl}/#person` },
      serviceType: [
        "Freelance Website Development",
        "Landing Page Development",
        "Full-Stack Web Apps",
        "MERN Development",
      ],
      areaServed: ["IN", "Remote"],
      priceRange: "$$",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Atishay Jain — Portfolio",
      publisher: { "@id": `${siteUrl}/#person` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} ${excalifont.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SketchThemeProvider>{children}</SketchThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import { SketchThemeProvider } from "@/lib/sketch/theme";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Atishay Jain — Full Stack Developer",
  description: "Full Stack Developer (MERN) portfolio designed like an Excalidraw canvas workspace.",
  icons: {
    icon: "/icon.svg",
  },
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
        <SketchThemeProvider>{children}</SketchThemeProvider>
      </body>
    </html>
  );
}

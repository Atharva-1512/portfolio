import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atharva Gade | Full Stack Developer",
  description:
    "Premium portfolio for Atharva Rajendra Gade, a backend-focused full stack developer building scalable systems, AI products, and secure experiences.",
  keywords: [
    "Atharva Gade",
    "Full Stack Developer",
    "Backend Engineer",
    "AI Enthusiast",
    "Next.js Portfolio",
    "Pune Developer"
  ],
  authors: [{ name: "Atharva Rajendra Gade" }],
  creator: "Atharva Rajendra Gade",
  metadataBase: new URL("https://example.vercel.app"),
  openGraph: {
    title: "Atharva Gade | Full Stack Developer",
    description:
      "A premium, interactive portfolio showcasing full stack systems, AI integrations, and secure product engineering.",
    url: "https://example.vercel.app",
    siteName: "Atharva Gade Portfolio",
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Atharva Gade | Full Stack Developer",
    description:
      "Interactive portfolio for a backend-focused engineer building scalable, AI-powered products."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://tarun-portfolio-kappa.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tarun Singh — Full Stack Web Developer",
  description:
    "Full Stack Web Developer building production-grade web apps with React, Next.js, Django, and PostgreSQL. Based in Faridabad, India.",
  keywords: [
    "Tarun Singh",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Django Developer",
    "Web Developer India",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Tarun Singh", url: "https://github.com/Tarun-120" }],
  creator: "Tarun Singh",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Tarun Singh — Portfolio",
    title: "Tarun Singh — Full Stack Web Developer",
    description:
      "Full Stack Web Developer building production-grade web apps with React, Next.js, Django, and PostgreSQL.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarun Singh — Full Stack Web Developer",
    description:
      "Full Stack Web Developer building production-grade web apps with React, Next.js, Django, and PostgreSQL.",
  },
};

export const viewport = {
  themeColor: "#0b0d12",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

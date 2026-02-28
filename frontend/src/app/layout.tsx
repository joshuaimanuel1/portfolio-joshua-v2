import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // INI WAJIB ADA AGAR TAILWIND MENYALA

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joshua Imanuel | Portfolio",
  description: "Software Engineer Enthusiast & Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bayzid Himel | Co-Founder & SecDev Lead — Penough",
  description:
    "Portfolio of Bayzid Himel — Co-Founder & SecDev Lead — Penough — Penoughspecializing in cybersecurity, penetration testing, SOC operations, and secure software development.",
  keywords: [
    "cybersecurity",
    "security engineer",
    "penetration testing",
    "SOC analyst",
    "Bangladesh",
    "Bayzid Himel",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#030712] text-[#e2e8f0] overflow-x-hidden">{children}</body>
    </html>
  );
}

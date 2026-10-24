import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bayzid Himel | SecDev Lead & Security Software Engineer",
  description:
    "Portfolio of Bayzid Himel — SecDev Lead and security software engineer specializing in cybersecurity products, application security, DevSecOps, and secure software development.",
  keywords: [
    "cybersecurity",
    "security engineer",
    "application security",
    "devsecops",
    "penetration testing",
    "phishing simulation",
    "SOC analyst",
    "Bangladesh",
    "Bayzid Himel",
  ],
};

const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"){document.documentElement.classList.add("light");}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-base text-ink overflow-x-hidden">{children}</body>
    </html>
  );
}

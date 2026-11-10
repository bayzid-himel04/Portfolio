import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Orbitron } from "next/font/google";
import AppShell from "@/components/AppShell";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["600", "700", "900"],
  variable: "--font-orbitron",
  display: "swap",
});

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
  openGraph: {
    title: "Bayzid Himel | SecDev Lead & Security Software Engineer",
    description:
      "SecDev Lead building security products: phishing simulation, continuous penetration testing, and internet asset discovery.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Bayzid Himel | SecDev Lead & Security Software Engineer",
  },
};

export const viewport: Viewport = {
  themeColor: "#050607",
  width: "device-width",
  initialScale: 1,
};

const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"){document.documentElement.classList.add("light");document.documentElement.style.colorScheme="light";}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${inter.variable} ${mono.variable} ${orbitron.variable} bg-base text-ink`}
      >
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}

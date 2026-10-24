import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "rgb(var(--bg) / <alpha-value>)",
        panel: "rgb(var(--panel) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        ink: "rgb(var(--fg) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        faint: "rgb(var(--faint) / <alpha-value>)",
        line: "rgb(var(--border) / <alpha-value>)",
        neoncyan: "rgb(var(--cyan) / <alpha-value>)",
        neongreen: "rgb(var(--green) / <alpha-value>)",
        neonmagenta: "rgb(var(--magenta) / <alpha-value>)",
        onaccent: "rgb(var(--on-accent) / <alpha-value>)",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "neon-cyan": "0 0 15px rgb(var(--cyan) / 0.4), 0 0 30px rgb(var(--cyan) / 0.15)",
        "neon-green": "0 0 15px rgb(var(--green) / 0.4), 0 0 30px rgb(var(--green) / 0.15)",
        "neon-magenta": "0 0 15px rgb(var(--magenta) / 0.4), 0 0 30px rgb(var(--magenta) / 0.15)",
        glass: "0 8px 32px 0 rgb(var(--shadow) / 0.4)",
      },
    },
  },
  plugins: [],
};
export default config;

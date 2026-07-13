import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#030712",
          surface: "#0a0f1a",
          card: "#0d1526",
          cyan: "#00d9ff",
          green: "#00ff87",
          magenta: "#ff0080",
          red: "#ff3860",
          text: "#e2e8f0",
          muted: "#64748b",
          border: "#1e293b",
        },
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "neon-cyan": "0 0 15px rgba(0, 217, 255, 0.4), 0 0 30px rgba(0, 217, 255, 0.15)",
        "neon-green": "0 0 15px rgba(0, 255, 135, 0.4), 0 0 30px rgba(0, 255, 135, 0.15)",
        "neon-magenta": "0 0 15px rgba(255, 0, 128, 0.4), 0 0 30px rgba(255, 0, 128, 0.15)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
export default config;

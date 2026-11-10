"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./AppShell";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      title={isLight ? "Switch to dark theme" : "Switch to light theme"}
      className={`group inline-flex h-9 w-9 items-center justify-center border border-line/70 text-faint transition-colors duration-200 hover:border-neoncyan/50 hover:text-neoncyan ${className}`}
    >
      {isLight ? <Moon size={15} /> : <Sun size={15} />}
    </button>
  );
}

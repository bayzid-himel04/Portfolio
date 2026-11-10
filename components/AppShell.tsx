"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { MotionConfig } from "framer-motion";
import { ScrollTrigger } from "@/lib/motion";
import BootSequence from "./BootSequence";
import SceneMount from "./SceneMount";
import SmoothScroll from "./SmoothScroll";

export type Theme = "dark" | "light";

type ThemeValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeValue>({
  theme: "dark",
  toggleTheme: () => {},
});

const BootContext = createContext(false);

export function useTheme() {
  return useContext(ThemeContext);
}

export function useBooted() {
  return useContext(BootContext);
}

const BOOT_KEY = "bh-booted-v2";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const themeRef = useRef<Theme>("dark");
  const [booted, setBooted] = useState(false);
  const [phase, setPhase] = useState<"pending" | "running" | "done">("pending");

  useEffect(() => {
    const isLight = document.documentElement.classList.contains("light");
    themeRef.current = isLight ? "light" : "dark";
    setTheme(isLight ? "light" : "dark");
  }, []);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(BOOT_KEY) === "1";
    } catch {
      /* storage unavailable */
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (seen || reduced) {
      setPhase("done");
      setBooted(true);
      return;
    }

    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    setPhase("running");
  }, []);

  useEffect(() => {
    if (phase === "done") {
      document.documentElement.style.overflow = "";
      const id = window.setTimeout(() => ScrollTrigger.refresh(), 180);
      return () => window.clearTimeout(id);
    }

    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [phase]);

  const beginReveal = useCallback(() => {
    setBooted(true);
  }, []);

  const completeBoot = useCallback(() => {
    try {
      sessionStorage.setItem(BOOT_KEY, "1");
    } catch {
      /* storage unavailable */
    }
    setPhase("done");
  }, []);

  const toggleTheme = useCallback(() => {
    const next: Theme = themeRef.current === "light" ? "dark" : "light";
    themeRef.current = next;
    setTheme(next);
    document.documentElement.classList.toggle("light", next === "light");
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable */
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <BootContext.Provider value={booted}>
        <MotionConfig reducedMotion="user">
          <SceneMount theme={theme} booted={booted} />
          <div className="world-grain" aria-hidden="true" />
          <SmoothScroll active={booted} />
          {phase === "pending" && (
            <div className="fixed inset-0 z-[95] bg-base" aria-hidden="true" />
          )}
          {phase === "running" && (
            <BootSequence onReveal={beginReveal} onComplete={completeBoot} />
          )}
          <div className={booted ? "relative" : "invisible relative"} aria-hidden={!booted}>
            {children}
          </div>
        </MotionConfig>
      </BootContext.Provider>
    </ThemeContext.Provider>
  );
}

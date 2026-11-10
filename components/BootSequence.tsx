"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const LOG_LINES = [
  "establishing secure uplink .......... ok",
  "tls 1.3 handshake ................... ok",
  "decrypting operator profile ......... ok",
  "verifying clearance ................. ok",
  "descent vector locked ............... ok",
];

export default function BootSequence({
  onReveal,
  onComplete,
}: {
  onReveal: () => void;
  onComplete: () => void;
}) {
  const [visibleLines, setVisibleLines] = useState(1);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const finished = useRef(false);
  const timers = useRef<number[]>([]);

  const finish = useCallback(() => {
    if (finished.current) return;
    finished.current = true;
    timers.current.forEach((timer) => window.clearTimeout(timer));
    timers.current = [];
    setExiting(true);
    onReveal();
    const id = window.setTimeout(onComplete, 480);
    timers.current.push(id);
  }, [onComplete, onReveal]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onComplete();
      return;
    }

    setProgress(4);
    LOG_LINES.forEach((_, index) => {
      const id = window.setTimeout(() => {
        setVisibleLines(index + 1);
        setProgress(Math.round(((index + 1) / LOG_LINES.length) * 100));
      }, 60 + index * 110);
      timers.current.push(id);
    });

    const autoExit = window.setTimeout(finish, 720);
    timers.current.push(autoExit);

    return () => {
      timers.current.forEach((timer) => window.clearTimeout(timer));
      timers.current = [];
    };
  }, [finish, onComplete]);

  return (
    <div
      className="fixed inset-0 z-[100] overflow-hidden bg-base text-ink"
      style={{
        clipPath: exiting ? "inset(0 0 100% 0)" : "inset(0 0 0% 0)",
        transition: "clip-path 500ms cubic-bezier(0.76, 0, 0.24, 1)",
      }}
      role="status"
      aria-live="polite"
    >
      <div className="absolute inset-0 boot-grid opacity-40" aria-hidden="true" />
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neoncyan/10 blur-[140px]" aria-hidden="true" />
      <div className="absolute inset-0 boot-scanlines opacity-60" aria-hidden="true" />

      <div className="relative flex h-full flex-col px-5 py-5 sm:px-8 sm:py-7">
        <div className="flex items-start justify-between font-mono text-xs uppercase tracking-[0.14em] text-faint">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-neongreen pulse-dot" />
            BH // secure boot
          </div>
          <span>v2.6 / descent</span>
        </div>

        <div className="flex flex-1 items-center">
          <div className="mx-auto w-full max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-neoncyan">
              initializing descent protocol
            </p>

            <div className="mt-4 h-px w-full overflow-hidden bg-line">
              <div
                className="h-full bg-neoncyan transition-[width] duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-9 min-h-[150px] space-y-2.5 font-mono text-xs sm:text-sm">
              <p className="text-faint">
                <span className="text-neoncyan">$</span> enter --vault
              </p>
              {LOG_LINES.slice(0, visibleLines).map((line, index) => (
                <p
                  key={line}
                  className={index === visibleLines - 1 ? "text-ink" : "text-muted"}
                  style={{ animation: "boot-line 260ms ease-out both" }}
                >
                  <span className="text-neoncyan">›</span> {line}
                </p>
              ))}
              {visibleLines >= LOG_LINES.length && (
                <p className="pt-3 font-orbitron text-sm font-bold tracking-[0.14em] text-neongreen">
                  ACCESS GRANTED
                </p>
              )}
            </div>

            <div className="mt-8 flex items-center justify-between font-mono text-xs uppercase tracking-[0.14em] text-faint">
              <span>operator / bayzid.himel</span>
              <span>{String(progress).padStart(3, "0")}%</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.14em] text-faint">
          <span>dhaka // bd</span>
          <button
            type="button"
            onClick={finish}
            className="pointer-events-auto border border-line px-3 py-1.5 text-muted transition-colors duration-200 hover:border-neoncyan/50 hover:text-neoncyan"
          >
            skip intro
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { ArrowUp } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-line bg-base/45 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-6 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center border border-line/80 font-orbitron text-[11px] font-bold tracking-[0.12em] text-ink">
            BH
          </span>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
              {personalInfo.name}
            </p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
              session end // eof
            </p>
          </div>
        </div>

        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
          designed & built by bayzid himel <span className="text-neoncyan">/</span> {year}
        </p>

        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
            dhaka // bd
          </span>
          <a
            href="#"
            className="group inline-flex h-8 items-center gap-2 border border-line/70 px-3 font-mono text-[11px] uppercase tracking-[0.14em] text-faint transition-colors duration-200 hover:border-neoncyan/50 hover:text-neoncyan"
          >
            return to origin
            <ArrowUp
              size={11}
              className="transition-transform duration-200 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

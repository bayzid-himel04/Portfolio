"use client";


import { personalInfo, personal } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const metadata = [
  { label: "role", value: "SecDev Lead / Penough Ltd." },
  { label: "base", value: personalInfo.location },
  { label: "focus", value: "AppSec · Defensive Security · DevSecOps" },
  { label: "languages", value: personal.languages.join(" / ") },
];


export default function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeader
        index="03"
        label="about"
        title="The engineer behind the perimeter."
      />

      <div className="grid gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20">
        <div>
          <p className="about-copy text-[15px] leading-8 sm:text-base">
            {personalInfo.objective}
          </p>
          <p className="about-copy mt-5 text-[15px] leading-8 sm:text-base">
            {personalInfo.objectivePart2}
          </p>

          <Reveal delay={0.1} className="mt-9">
            <div className="terminal-panel">
              <div className="flex items-center justify-between border-b border-line/70 px-4 py-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                  whoami.sh
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-neongreen">
                  session verified
                </span>
              </div>
              <div className="space-y-2 px-4 py-4 font-mono text-[11px] leading-6 sm:text-xs">
                <p>
                  <span className="text-neoncyan">$</span>{" "}
                  <span className="text-faint">whoami</span>
                </p>
                <p className="pl-4 text-ink">bayzid_himel</p>
                <p>
                  <span className="text-neoncyan">$</span>{" "}
                  <span className="text-faint">cat role.txt</span>
                </p>
                <p className="pl-4 text-muted">SecDev Lead · Security Software Engineer</p>
                <p>
                  <span className="text-neoncyan">$</span>{" "}
                  <span className="text-faint">cat focus.txt</span>
                </p>
                <p className="pl-4 text-neongreen">
                  application security · defensive security · devsecops
                </p>
                <p className="flex items-center gap-2 pt-1">
                  <span className="text-neoncyan">$</span>
                  <span className="cursor-blink text-neoncyan">_</span>
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.14} className="mt-9">
            <p className="hud-label">focus areas</p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[11px] text-muted">
              {personal.interests.map((interest, index) => (
                <span key={interest} className="flex items-center gap-4">
                  {interest}
                  {index < personal.interests.length - 1 && (
                    <span className="text-neoncyan/40">/</span>
                  )}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <div className="border-t border-line">
              {metadata.map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-[96px_1fr] gap-4 border-b border-line/60 py-4"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                    {item.label}
                  </span>
                  <span className="text-sm leading-6 text-ink">{item.value}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

"use client";

import { certifications } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Certifications() {
  return (
    <section id="certifications" className="section-shell">
      <SectionHeader
        index="05"
        label="certifications"
        title="Certifications."
        description="Credentials across auditing, API security, AppSec, network security, and cyber defense."
      />

      <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, index) => (
          <Reveal key={cert.badge} delay={Math.min(index * 0.035, 0.15)} className="bg-base">
            <div className="flex h-full flex-col p-6 transition-colors duration-300 hover:bg-panel/40">
              <div className="flex items-center justify-between gap-4">
                <span className="font-orbitron text-lg font-bold text-neoncyan">{cert.badge}</span>
                <span className="font-mono text-xs text-faint">{cert.date}</span>
              </div>
              <p className="mt-4 text-[15px] leading-6 text-ink">{cert.name}</p>
              <p className="mt-auto pt-3 text-sm text-muted">{cert.issuer}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

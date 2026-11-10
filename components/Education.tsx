"use client";

import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="section-shell !py-12 sm:!py-16">
      <Reveal>
        <div className="flex flex-col gap-4 border-y border-line py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <GraduationCap size={20} className="mt-0.5 shrink-0 text-neoncyan" />
            <div>
              <h2 className="text-[15px] font-semibold text-ink">{education.degree}</h2>
              <p className="mt-1 text-sm text-muted">{education.institution}</p>
            </div>
          </div>
          <p className="pl-9 font-mono text-xs text-faint sm:pl-0">
            {education.period} · {education.location}
          </p>
        </div>
      </Reveal>
    </section>
  );
}

"use client";

import { skills } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeader
        index="04"
        label="skills"
        title="Technical skills."
        description="Application security, defensive operations, and the engineering stack used to ship and protect security products."
      />

      <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, index) => (
          <Reveal
            key={group.category}
            delay={Math.min(index * 0.04, 0.16)}
            className="bg-base p-6"
          >
            <h3 className="text-[15px] font-semibold text-ink">{group.category}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="border border-line px-2.5 py-1 font-mono text-xs text-muted transition-colors duration-200 hover:border-neoncyan/50 hover:text-neoncyan"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

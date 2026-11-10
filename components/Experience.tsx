"use client";

import { workExperience } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeader
        index="01"
        label="experience"
        title="Where I've worked."
        description="4 years across security operations and security product engineering — from SOC monitoring to leading development of security platforms."
      />

      <div className="border-t border-line">
        {workExperience.map((job, index) => (
          <Reveal key={job.company}>
            <article className="grid gap-6 border-b border-line py-9 md:grid-cols-[190px_1fr] md:gap-10">
              <div className="font-mono text-[11px] uppercase leading-6 tracking-[0.14em] text-faint">
                <p className="text-neoncyan">{job.period}</p>
                <p className="mt-2">{job.location}</p>
                <p className="mt-2 text-faint/70">
                  log // {String(index + 1).padStart(2, "0")}
                </p>
              </div>

              <div className="relative md:border-l md:border-line/60 md:pl-9">
                <span
                  className={`absolute -left-[3.5px] top-2 hidden h-1.5 w-1.5 rounded-full md:block ${
                    job.current
                      ? "bg-neoncyan shadow-neon-cyan pulse-dot"
                      : "bg-line"
                  }`}
                />

                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h3 className="font-orbitron text-lg font-semibold text-ink sm:text-xl">
                    {job.role}
                  </h3>
                  {job.current && (
                    <span className="border border-neongreen/30 px-2 py-0.5 font-mono text-[11px] uppercase tracking-[0.14em] text-neongreen">
                      active
                    </span>
                  )}
                </div>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-neoncyan">
                  {job.company}
                </p>

                {job.products && job.products.length > 0 && (
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    <span className="mr-1 text-sm text-faint">Products led:</span>
                    {job.products.map((p) => (
                      <a
                        key={p.name}
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-neoncyan/40 bg-neoncyan/5 px-2.5 py-1 font-mono text-xs text-neoncyan transition-colors hover:bg-neoncyan/15"
                      >
                        {p.name} ↗
                      </a>
                    ))}
                  </div>
                )}

                <ul className="mt-5 grid max-w-3xl gap-y-2.5">
                  {job.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex gap-2.5 text-[15px] leading-7 text-muted"
                    >
                      <span className="mt-[2px] shrink-0 text-neoncyan/55">—</span>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

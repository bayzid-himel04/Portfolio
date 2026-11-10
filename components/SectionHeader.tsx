"use client";

import Reveal from "./Reveal";

export default function SectionHeader({
  index,
  label,
  title,
  description,
}: {
  index: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 sm:mb-16">
      <Reveal>
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em]">
          <span className="text-neoncyan">{index}</span>
          <span className="h-px w-10 bg-line" />
          <span className="text-faint">{label}</span>
        </div>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="mt-5 max-w-3xl text-[clamp(2rem,4.5vw,3.4rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-ink">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">{description}</p>
        </Reveal>
      )}
    </div>
  );
}

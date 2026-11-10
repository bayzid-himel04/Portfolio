"use client";

import { ArrowUpRight } from "lucide-react";
import { products } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Products() {
  return (
    <section id="products" className="section-shell">
      <SectionHeader
        index="02"
        label="products"
        title="Selected products."
        description="Platforms I've co-developed and led at Penough — security products for phishing simulation, continuous penetration testing, and internet asset discovery, plus a messaging automation platform."
      />

      <div className="grid border-l border-t border-line md:grid-cols-2">
        {products.map((product, index) => (
          <Reveal
            key={product.name}
            delay={(index % 2) * 0.07}
            className="border-b border-r border-line"
          >
            <article className="module group relative flex h-full flex-col overflow-hidden p-6 sm:p-8">
              {product.image && (
                <a
                  href={product.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${product.name}`}
                  className="mb-7 block overflow-hidden border border-line bg-panel transition-colors duration-300 group-hover:border-neoncyan/40"
                >
                  <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
                    <span className="h-2 w-2 rounded-full bg-line" />
                    <span className="h-2 w-2 rounded-full bg-line" />
                    <span className="h-2 w-2 rounded-full bg-line" />
                    <span className="ml-3 truncate font-mono text-[11px] text-faint">
                      {product.domain}
                    </span>
                  </div>
                  <div className="aspect-[16/10] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.image}
                      alt={`${product.name} website homepage`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                </a>
              )}

              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="font-mono text-xs text-faint">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-orbitron text-2xl font-bold tracking-[-0.01em] text-ink">
                    {product.name}
                  </h3>
                </div>
                <a
                  href={product.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${product.name} website`}
                  className="flex h-9 w-9 shrink-0 items-center justify-center border border-line/70 text-muted transition-colors duration-200 hover:border-neoncyan/50 hover:text-neoncyan"
                >
                  <ArrowUpRight size={15} />
                </a>
              </div>

              <p className="mt-2 text-sm font-medium text-neoncyan">{product.tagline}</p>

              <p className="mt-5 text-[15px] leading-7 text-muted">{product.description}</p>

              <ul className="mt-5 space-y-2">
                {product.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm leading-6 text-muted">
                    <span className="mt-[2px] shrink-0 text-neoncyan/60">—</span>
                    {point}
                  </li>
                ))}
              </ul>

              <a
                href={product.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 pt-7 font-mono text-xs text-neoncyan transition-colors duration-200 hover:underline"
              >
                {product.domain}
                <ArrowUpRight size={12} className="opacity-60" />
              </a>

              <span className="module-scan" aria-hidden="true" />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

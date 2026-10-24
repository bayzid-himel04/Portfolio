"use client";
import { motion } from "framer-motion";
import { Fish, Bug, Radar, MessageCircle, ExternalLink, ChevronRight, Globe } from "lucide-react";
import { products } from "@/lib/data";

const icons = [Fish, Bug, Radar, MessageCircle];

const themeMap = {
  cyan: {
    text: "text-neoncyan",
    icon: "bg-neoncyan/10 border-neoncyan/20",
    bullet: "text-neoncyan",
    hover: "hover:border-neoncyan/50",
    line: "from-transparent via-neoncyan to-transparent",
  },
  green: {
    text: "text-neongreen",
    icon: "bg-neongreen/10 border-neongreen/20",
    bullet: "text-neongreen",
    hover: "hover:border-neongreen/50",
    line: "from-transparent via-neongreen to-transparent",
  },
  magenta: {
    text: "text-neonmagenta",
    icon: "bg-neonmagenta/10 border-neonmagenta/20",
    bullet: "text-neonmagenta",
    hover: "hover:border-neonmagenta/50",
    line: "from-transparent via-neonmagenta to-transparent",
  },
};

export default function Products() {
  return (
    <section id="products" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="font-mono text-neoncyan text-sm tracking-widest">03.</span>
        <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-ink">Selected Products</h2>
        <div className="flex-1 cyber-divider" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {products.map((product, i) => {
          const Icon = icons[i % icons.length];
          const theme = themeMap[product.color];
          return (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -6 }}
              className={`glass-card p-7 relative overflow-hidden group flex flex-col transition-all duration-300 ${theme.hover}`}
            >
              {/* Watermark index */}
              <span className={`absolute -top-3 -right-2 font-orbitron text-6xl font-black opacity-[0.05] select-none ${theme.text}`}>
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Header */}
              <div className="flex items-start gap-4 mb-5">
                <div className={`p-3 rounded-lg border shrink-0 ${theme.icon}`}>
                  <Icon size={22} className={theme.text} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-orbitron text-lg font-bold text-ink">{product.name}</h3>
                  <p className={`font-mono text-[11px] leading-relaxed uppercase tracking-wider mt-1 ${theme.text}`}>
                    {product.tagline}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted text-sm leading-relaxed mb-5">{product.description}</p>

              {/* Bullets */}
              <ul className="space-y-2 mb-6">
                {product.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-muted text-[13px] leading-relaxed">
                    <ChevronRight size={13} className={`mt-0.5 shrink-0 ${theme.bullet}`} />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Website link */}
              <a
                href={product.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-auto inline-flex items-center gap-2 font-mono text-xs tracking-wider transition-colors duration-200 ${theme.text} hover:underline`}
              >
                <Globe size={13} />
                {product.domain}
                <ExternalLink size={11} className="opacity-60" />
              </a>

              {/* Bottom accent line */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${theme.line}`}
              />
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

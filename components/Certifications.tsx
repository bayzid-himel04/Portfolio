"use client";
import { motion } from "framer-motion";
import { Award, Calendar } from "lucide-react";
import { certifications } from "@/lib/data";

const glowMap: Record<string, string> = {
  cyan: "hover:shadow-neon-cyan hover:border-neoncyan/40",
  green: "hover:shadow-neon-green hover:border-neongreen/40",
  magenta: "hover:shadow-neon-magenta hover:border-neonmagenta/40",
};

const badgeBg: Record<string, string> = {
  cyan: "bg-neoncyan/10 text-neoncyan border border-neoncyan/20",
  green: "bg-neongreen/10 text-neongreen border border-neongreen/20",
  magenta: "bg-neonmagenta/10 text-neonmagenta border border-neonmagenta/20",
};

const accentText: Record<string, string> = {
  cyan: "text-neoncyan",
  green: "text-neongreen",
  magenta: "text-neonmagenta",
};

const accentLine: Record<string, string> = {
  cyan: "bg-gradient-to-r from-transparent via-neoncyan to-transparent",
  green: "bg-gradient-to-r from-transparent via-neongreen to-transparent",
  magenta: "bg-gradient-to-r from-transparent via-neonmagenta to-transparent",
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="font-mono text-neoncyan text-sm tracking-widest">05.</span>
        <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-ink">Certifications</h2>
        <div className="flex-1 cyber-divider" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.badge}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ y: -6 }}
            className={`glass-card p-6 relative overflow-hidden group transition-all duration-300 ${glowMap[cert.color]}`}
          >
            {/* Background badge watermark */}
            <div
              className={`absolute -top-4 -right-3 font-orbitron text-6xl font-black opacity-[0.04] select-none ${accentText[cert.color]}`}
            >
              {cert.badge}
            </div>

            {/* Top row */}
            <div className="flex items-start justify-between mb-5">
              <div className={`px-3 py-1.5 rounded font-orbitron text-xs font-bold tracking-wider ${badgeBg[cert.color]}`}>
                {cert.badge}
              </div>
              <Award
                size={18}
                className={`opacity-40 group-hover:opacity-100 transition-opacity duration-300 ${accentText[cert.color]}`}
              />
            </div>

            {/* Cert name */}
            <h3 className="font-semibold text-ink text-sm leading-snug mb-3 pr-4">{cert.name}</h3>

            {/* Issuer + date */}
            <div className="space-y-1">
              <p className="font-mono text-xs text-muted">{cert.issuer}</p>
              <div className="flex items-center gap-1.5 font-mono text-xs text-faint">
                <Calendar size={11} />
                {cert.date}
              </div>
            </div>

            {/* Bottom accent line */}
            <div
              className={`absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${accentLine[cert.color]}`}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

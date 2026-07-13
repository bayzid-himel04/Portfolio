"use client";
import { motion } from "framer-motion";
import { Award, Calendar } from "lucide-react";
import { certifications } from "@/lib/data";

const glowMap: Record<string, string> = {
  cyan: "hover:shadow-neon-cyan hover:border-[#00d9ff]/40",
  green: "hover:shadow-neon-green hover:border-[#00ff87]/40",
  magenta: "hover:shadow-neon-magenta hover:border-[#ff0080]/40",
};

const badgeBg: Record<string, string> = {
  cyan: "bg-[#00d9ff]/10 text-[#00d9ff] border border-[#00d9ff]/20",
  green: "bg-[#00ff87]/10 text-[#00ff87] border border-[#00ff87]/20",
  magenta: "bg-[#ff0080]/10 text-[#ff0080] border border-[#ff0080]/20",
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
        <span className="font-mono text-[#00d9ff] text-sm tracking-widest">04.</span>
        <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-white">Certifications</h2>
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
              className={`absolute -top-4 -right-3 font-orbitron text-6xl font-black opacity-[0.04] select-none ${
                cert.color === "cyan" ? "text-[#00d9ff]" : cert.color === "green" ? "text-[#00ff87]" : "text-[#ff0080]"
              }`}
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
                className={`opacity-40 group-hover:opacity-100 transition-opacity duration-300 ${
                  cert.color === "cyan" ? "text-[#00d9ff]" : cert.color === "green" ? "text-[#00ff87]" : "text-[#ff0080]"
                }`}
              />
            </div>

            {/* Cert name */}
            <h3 className="font-semibold text-[#e2e8f0] text-sm leading-snug mb-3 pr-4">{cert.name}</h3>

            {/* Issuer + date */}
            <div className="space-y-1">
              <p className="font-mono text-xs text-[#64748b]">{cert.issuer}</p>
              <div className="flex items-center gap-1.5 font-mono text-xs text-[#475569]">
                <Calendar size={11} />
                {cert.date}
              </div>
            </div>

            {/* Bottom accent line */}
            <div
              className={`absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                cert.color === "cyan"
                  ? "bg-gradient-to-r from-transparent via-[#00d9ff] to-transparent"
                  : cert.color === "green"
                  ? "bg-gradient-to-r from-transparent via-[#00ff87] to-transparent"
                  : "bg-gradient-to-r from-transparent via-[#ff0080] to-transparent"
              }`}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

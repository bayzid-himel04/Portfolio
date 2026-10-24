"use client";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Star } from "lucide-react";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="font-mono text-neoncyan text-sm tracking-widest">06.</span>
        <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-ink">Education</h2>
        <div className="flex-1 cyber-divider" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <motion.div
          whileHover={{ borderColor: "rgb(var(--cyan) / 0.35)", x: 4 }}
          className="glass-card p-8 sm:p-10 relative overflow-hidden transition-all duration-300"
        >
          {/* Watermark */}
          <div className="absolute -bottom-6 -right-6 opacity-[0.03] select-none">
            <GraduationCap size={160} className="text-neoncyan" />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start gap-6">
            {/* Icon */}
            <div className="p-4 rounded-xl bg-neoncyan/8 border border-neoncyan/20 self-start">
              <GraduationCap size={28} className="text-neoncyan" />
            </div>

            <div className="flex-1">
              <h3 className="font-orbitron text-xl sm:text-2xl font-bold text-ink mb-1">
                {education.institution}
              </h3>
              <p className="text-neoncyan font-semibold text-base mb-4">{education.degree}</p>

              <div className="flex flex-wrap gap-4 mb-5">
                <div className="flex items-center gap-1.5 font-mono text-xs text-muted">
                  <Calendar size={12} className="text-faint" />
                  {education.period}
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-muted">
                  <MapPin size={12} className="text-faint" />
                  {education.location}
                </div>
              </div>

              {/* CGPA */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neongreen/8 border border-neongreen/25">
                <Star size={13} className="text-neongreen" />
                <span className="font-mono text-sm text-neongreen font-semibold">CGPA: {education.cgpa}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

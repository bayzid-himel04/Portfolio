"use client";
import { motion } from "framer-motion";
import { Briefcase, ChevronRight, MapPin, Calendar } from "lucide-react";
import { workExperience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="font-mono text-[#00d9ff] text-sm tracking-widest">02.</span>
        <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-white">Experience</h2>
        <div className="flex-1 cyber-divider" />
      </motion.div>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="hidden md:block absolute left-[28px] top-0 bottom-0 w-px bg-[#1e293b]">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ originY: 0 }}
            className="w-full h-full bg-gradient-to-b from-[#00d9ff] via-[#00ff87] to-[#00d9ff]/20"
          />
        </div>

        <div className="space-y-10">
          {workExperience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative md:pl-20"
            >
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-0 top-6 w-[57px] justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.3, type: "spring", stiffness: 300 }}
                  className={`w-4 h-4 rounded-full border-2 z-10 ${
                    job.current
                      ? "border-[#00d9ff] bg-[#00d9ff] shadow-neon-cyan pulse-dot"
                      : "border-[#00ff87] bg-[#00ff87]/20"
                  }`}
                />
              </div>

              {/* Job card */}
              <motion.div
                whileHover={{ x: 4, borderColor: "rgba(0, 217, 255, 0.35)" }}
                className="glass-card p-6 sm:p-8 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase size={15} className="text-[#00d9ff]" />
                      <h3 className="font-orbitron text-lg font-bold text-white">{job.role}</h3>
                      {job.current && (
                        <span className="px-2 py-0.5 rounded font-mono text-[10px] text-[#00ff87] border border-[#00ff87]/30 bg-[#00ff87]/5 uppercase tracking-wider">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="font-semibold text-[#00d9ff] text-base">{job.company}</p>
                  </div>
                  <div className="flex flex-col gap-1 text-right shrink-0">
                    <div className="flex items-center justify-end gap-1.5 font-mono text-xs text-[#475569]">
                      <Calendar size={12} />
                      {job.period}
                    </div>
                    <div className="flex items-center justify-end gap-1.5 font-mono text-xs text-[#475569]">
                      <MapPin size={12} />
                      {job.location}
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-2.5">
                  {job.responsibilities.map((r, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + j * 0.07 + 0.4 }}
                      className="flex items-start gap-3 text-[#94a3b8] text-sm leading-relaxed"
                    >
                      <ChevronRight
                        size={14}
                        className={`mt-0.5 shrink-0 ${
                          job.current ? "text-[#00d9ff]" : "text-[#00ff87]"
                        }`}
                      />
                      {r}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

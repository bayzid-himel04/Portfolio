"use client";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";

const colorMap = {
  cyan: "skill-tag-cyan",
  green: "skill-tag-green",
  magenta: "skill-tag-magenta",
};

const headerColor = {
  cyan: "text-[#00d9ff]",
  green: "text-[#00ff87]",
  magenta: "text-[#ff0080]",
};

const borderColor = {
  cyan: "border-[#00d9ff]/20",
  green: "border-[#00ff87]/20",
  magenta: "border-[#ff0080]/20",
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="font-mono text-[#00d9ff] text-sm tracking-widest">03.</span>
        <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-white">Technical Skills</h2>
        <div className="flex-1 cyber-divider" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.08, duration: 0.55 }}
            whileHover={{ y: -4 }}
            className="glass-card p-6 transition-all duration-300"
          >
            {/* Category header */}
            <div className={`flex items-center gap-2 mb-5 pb-4 border-b ${borderColor[group.color]}`}>
              <div
                className={`w-1 h-5 rounded-full ${
                  group.color === "cyan"
                    ? "bg-[#00d9ff] shadow-[0_0_8px_rgba(0,217,255,0.8)]"
                    : group.color === "green"
                    ? "bg-[#00ff87] shadow-[0_0_8px_rgba(0,255,135,0.8)]"
                    : "bg-[#ff0080] shadow-[0_0_8px_rgba(255,0,128,0.8)]"
                }`}
              />
              <h3 className={`font-orbitron text-xs font-bold tracking-wider uppercase ${headerColor[group.color]}`}>
                {group.category}
              </h3>
            </div>

            {/* Skill tags */}
            <motion.div
              className="flex flex-wrap gap-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05, delayChildren: i * 0.05 + 0.2 } },
              }}
            >
              {group.items.map((skill) => (
                <motion.span
                  key={skill}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300 } },
                  }}
                  className={`px-3 py-1.5 rounded font-mono text-xs font-medium ${colorMap[group.color]}`}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

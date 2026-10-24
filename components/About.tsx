"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Mail, Phone, Globe, Target } from "lucide-react";
import { personalInfo, personal } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const infoItems = [
  { icon: MapPin, label: "Location", value: personalInfo.location, color: "cyan" },
  { icon: Mail, label: "Email", value: personalInfo.email, color: "green" },
  { icon: Phone, label: "Phone", value: personalInfo.phone, color: "cyan" },
  { icon: Globe, label: "Languages", value: personal.languages.join(" · "), color: "green" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="font-mono text-neoncyan text-sm tracking-widest">01.</span>
        <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-ink">About Me</h2>
        <div className="flex-1 cyber-divider" />
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-12">
        {/* Left: bio + interests + terminal */}
        <div className="lg:col-span-3 space-y-8">

          {/* Two-paragraph bio */}
          <div className="space-y-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-muted leading-8 text-base"
            >
              {personalInfo.objective}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted leading-8 text-base"
            >
              {personalInfo.objectivePart2}
            </motion.p>
          </div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Target size={16} className="text-neongreen" />
              <span className="font-mono text-xs tracking-widest uppercase text-faint">Interests</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {personal.interests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1.5 rounded font-mono text-xs text-neongreen border border-neongreen/20 bg-neongreen/5"
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Terminal block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="terminal-card p-5 overflow-x-auto"
          >
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-line">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-2 font-mono text-xs text-faint">whoami.sh</span>
            </div>
            <div className="font-mono text-sm space-y-1.5">
              <p><span className="text-neoncyan">$</span> <span className="text-muted">echo $ROLE</span></p>
              <p className="text-ink pl-2">SecDev Lead · Security Software Engineer</p>
              <p className="mt-2"><span className="text-neoncyan">$</span> <span className="text-muted">echo $EXPERTISE</span></p>
              <p className="text-neongreen pl-2">AppSec · Defensive Security · DevSecOps</p>
              <p className="mt-2"><span className="text-neoncyan">$</span> <span className="text-muted">echo $FOCUS</span></p>
              <p className="text-neoncyan pl-2">Security Products · Automation · Secure SDLC</p>
              <p className="mt-2 flex items-center gap-1">
                <span className="text-neoncyan">$</span>
                <span className="cursor-blink text-neoncyan">_</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right: photo card + info cards */}
        <div className="lg:col-span-2 space-y-4">

          {/* Profile photo card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="glass-card p-4 flex items-center gap-5"
          >
            <div className="relative shrink-0">
              {/* Neon ring */}
              <div className="absolute inset-0 rounded-full bg-neoncyan/20 blur-md scale-110" />
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-neoncyan/50 shadow-neon-cyan">
                <Image
                  src="/hero.png"
                  alt="Bayzid Himel"
                  width={80}
                  height={80}
                  className="object-cover object-top w-full h-full"
                  style={{ objectPosition: "50% 10%" }}
                />
              </div>
              {/* Status indicator */}
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-neongreen border-2 border-base pulse-dot" />
            </div>
            <div>
              <p className="font-orbitron text-sm font-bold text-ink">{personalInfo.name}</p>
              <p className="font-mono text-xs text-neoncyan mt-0.5">SecDev Lead — Penough Ltd.</p>
              <p className="font-mono text-[11px] text-faint mt-1 flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-neongreen inline-block" />
                Security Software Engineer
              </p>
            </div>
          </motion.div>

          {infoItems.map((item, i) => (
            <motion.div
              key={item.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ x: 4 }}
              className="glass-card p-4 flex items-start gap-4 cursor-default"
            >
              <div
                className={`mt-0.5 p-2 rounded ${item.color === "cyan"
                  ? "bg-neoncyan/10 text-neoncyan"
                  : "bg-neongreen/10 text-neongreen"
                  }`}
              >
                <item.icon size={16} />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-xs text-faint uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-sm text-ink break-words">{item.value}</p>
              </div>
            </motion.div>
          ))}

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-3 gap-3 pt-2"
          >
            {[
              { value: "3+", label: "Years Exp." },
              { value: "6", label: "Certifications" },
              { value: "4", label: "Products Built" },
            ].map(({ value, label }) => (
              <div key={label} className="glass-card p-4 text-center corner-bracket">
                <p className="font-orbitron text-2xl font-bold cyber-gradient">{value}</p>
                <p className="font-mono text-[10px] text-faint uppercase tracking-wider mt-1">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

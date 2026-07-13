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
        <span className="font-mono text-[#00d9ff] text-sm tracking-widest">01.</span>
        <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-white">About Me</h2>
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
              className="text-[#94a3b8] leading-8 text-base"
            >
              {personalInfo.objective}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#64748b] leading-8 text-base"
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
              <Target size={16} className="text-[#00ff87]" />
              <span className="font-mono text-xs tracking-widest uppercase text-[#64748b]">Interests</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {personal.interests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1.5 rounded font-mono text-xs text-[#00ff87] border border-[#00ff87]/20 bg-[#00ff87]/5"
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
            className="glass-card p-5 rounded-lg overflow-x-auto"
          >
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#1e293b]">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-2 font-mono text-xs text-[#475569]">whoami.sh</span>
            </div>
            <div className="font-mono text-sm space-y-1.5">
              <p><span className="text-[#00d9ff]">$</span> <span className="text-[#94a3b8]">echo $ROLE</span></p>
              <p className="text-white pl-2">Security Engineer · Co-Founder · SecDev Lead</p>
              <p className="mt-2"><span className="text-[#00d9ff]">$</span> <span className="text-[#94a3b8]">echo $EXPERTISE</span></p>
              <p className="text-[#00ff87] pl-2">AppSec · Defensive Security · DevSecOps</p>
              <p className="mt-2"><span className="text-[#00d9ff]">$</span> <span className="text-[#94a3b8]">echo $FOCUS</span></p>
              <p className="text-[#00d9ff] pl-2">Secure SDLC · Threat Intelligence · Automation</p>
              <p className="mt-2 flex items-center gap-1">
                <span className="text-[#00d9ff]">$</span>
                <span className="cursor-blink text-[#00d9ff]">_</span>
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
              <div className="absolute inset-0 rounded-full bg-[#00d9ff]/20 blur-md scale-110" />
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-[#00d9ff]/50 shadow-neon-cyan">
                <Image
                  src="/hero.png"
                  alt="Bayzid Himel"
                  width={80}
                  height={80}
                  className="object-cover object-top w-full h-full"
                  style={{ objectPosition: "50% 10%" }}
                />
              </div>
              {/* Online indicator */}
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#00ff87] border-2 border-[#030712] pulse-dot" />
            </div>
            <div>
              <p className="font-orbitron text-sm font-bold text-white">{personalInfo.name}</p>
              <p className="font-mono text-xs text-[#00d9ff] mt-0.5">Co-Founder & SecDev Lead — Penough</p>
              <p className="font-mono text-[11px] text-[#475569] mt-1 flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#fbbf24] inline-block" />
                Not open to new roles
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
                  ? "bg-[#00d9ff]/10 text-[#00d9ff]"
                  : "bg-[#00ff87]/10 text-[#00ff87]"
                  }`}
              >
                <item.icon size={16} />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-xs text-[#475569] uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-sm text-[#e2e8f0] break-all">{item.value}</p>
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
              { value: "10+", label: "Tools Mastered" },
            ].map(({ value, label }) => (
              <div key={label} className="glass-card p-4 text-center corner-bracket">
                <p className="font-orbitron text-2xl font-bold cyber-gradient">{value}</p>
                <p className="font-mono text-[10px] text-[#475569] uppercase tracking-wider mt-1">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

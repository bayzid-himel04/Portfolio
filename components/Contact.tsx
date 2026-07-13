"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Send } from "lucide-react";
import { personalInfo } from "@/lib/data";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "cyan",
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    color: "green",
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: null,
    color: "cyan",
  },
];

const socials = [
  { icon: Github, label: "GitHub", href: personalInfo.github },
  { icon: Linkedin, label: "LinkedIn", href: personalInfo.linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="font-mono text-[#00d9ff] text-sm tracking-widest">07.</span>
        <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-white">Contact</h2>
        <div className="flex-1 cyber-divider" />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left: CTA text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="font-orbitron text-2xl sm:text-3xl font-bold">
            <span className="text-white">Let&apos;s Work </span>
            <span className="cyber-gradient">Together</span>
          </h3>
          <p className="text-[#94a3b8] leading-8">
            While I&apos;m currently not available for new roles, I am always open to networking.
            Whether you have a question, a project, or just want to connect — my inbox is always open.
          </p>

          {/* Contact info */}
          <div className="space-y-4">
            {contactItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2 }}
                className="flex items-center gap-4"
              >
                <div className={`p-2.5 rounded-lg ${item.color === "cyan" ? "bg-[#00d9ff]/10 text-[#00d9ff]" : "bg-[#00ff87]/10 text-[#00ff87]"}`}>
                  <item.icon size={16} />
                </div>
                <div>
                  <p className="font-mono text-[11px] text-[#475569] uppercase tracking-wider">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className={`text-sm hover:underline transition-colors duration-200 ${
                        item.color === "cyan" ? "text-[#e2e8f0] hover:text-[#00d9ff]" : "text-[#e2e8f0] hover:text-[#00ff87]"
                      }`}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-[#e2e8f0]">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social links */}
          <div className="flex gap-3 pt-2">
            {socials.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2.5 glass-card text-sm font-mono text-[#94a3b8] hover:text-[#00d9ff] hover:border-[#00d9ff]/40 transition-all duration-300"
              >
                <Icon size={15} />
                {label}
                <ExternalLink size={11} className="opacity-50" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right: Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <div className="glass-card p-8 sm:p-10 text-center relative overflow-hidden">
            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[#00d9ff]/5 blur-3xl pointer-events-none" />

            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex p-5 rounded-full bg-[#00d9ff]/10 border border-[#00d9ff]/20 mb-6"
            >
              <Send size={30} className="text-[#00d9ff]" />
            </motion.div>

            <h4 className="font-orbitron text-xl font-bold text-white mb-3">Say Hello</h4>
            <p className="text-[#64748b] text-sm mb-7 font-mono">
              Reach out via email — I respond within 24 hours.
            </p>

            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(0, 217, 255, 0.35)" }}
              whileTap={{ scale: 0.97 }}
              className="block w-full py-4 font-mono font-semibold text-sm tracking-wider uppercase text-[#030712] bg-[#00d9ff] rounded hover:bg-white transition-all duration-300"
            >
              {personalInfo.email}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

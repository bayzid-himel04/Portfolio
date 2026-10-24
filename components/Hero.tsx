"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Github, Linkedin, Mail, Shield } from "lucide-react";
import ParticleCanvas from "./ParticleCanvas";
import { personalInfo } from "@/lib/data";

const roles = [
  "SecDev Lead — Penough Ltd.",
  "Security Software Engineer",
  "Application Security Engineer",
  "DevSecOps Practitioner",
  "Cybersecurity Product Engineer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const current = roles[roleIndex];
    const speed = isDeleting ? 45 : 95;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, displayed.length + 1);
        setDisplayed(next);
        if (next === current) {
          setIsPaused(true);
          setTimeout(() => { setIsPaused(false); setIsDeleting(true); }, 2200);
        }
      } else {
        const next = current.slice(0, displayed.length - 1);
        setDisplayed(next);
        if (next === "") { setIsDeleting(false); setRoleIndex((i) => (i + 1) % roles.length); }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex, isPaused]);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.13, delayChildren: 0.25 } },
  };

  const item = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden scanlines">
      <ParticleCanvas />
      <div className="absolute inset-0 grid-bg" />

      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-neoncyan/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-neongreen/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-80px)]">

          {/* ── Left: Text content ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center order-2 lg:order-1"
          >
            {/* Role badge */}
            <motion.div variants={item} className="mb-7">
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-neoncyan/30 bg-neoncyan/8 text-neoncyan font-mono text-[10px] sm:text-xs tracking-wider sm:tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-neoncyan pulse-dot" />
                {personalInfo.title}
              </span>
            </motion.div>

            {/* Name with glitch */}
            <motion.div variants={item} className="mb-5">
              <h1 className="font-orbitron font-black leading-[1.05] tracking-tight">
                <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-ink glitch-wrapper" data-text={personalInfo.name.split(" ")[0]}>
                  {personalInfo.name.split(" ")[0]}
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl cyber-gradient glitch-wrapper" data-text={personalInfo.name.split(" ")[1]}>
                  {personalInfo.name.split(" ")[1]}
                </span>
              </h1>
            </motion.div>

            {/* Typewriter */}
            <motion.div variants={item} className="mb-5 h-9 flex items-center">
              <span className="font-mono text-base sm:text-lg text-neoncyan">
                &gt;{" "}
                <span className="text-ink">{displayed}</span>
                <span className="cursor-blink text-neoncyan">_</span>
              </span>
            </motion.div>

            {/* Location */}
            <motion.p variants={item} className="font-mono text-xs text-faint mb-9 tracking-widest uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neoncyan inline-block" />
              {personalInfo.location}
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-4 sm:gap-5 mb-9">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, boxShadow: "0 0 25px rgba(0, 217, 255, 0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3 font-mono text-sm font-semibold tracking-wider uppercase text-onaccent bg-neoncyan rounded-sm hover:bg-neongreen transition-all duration-300"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="/Bayzid_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, boxShadow: "0 0 20px rgba(0, 217, 255, 0.15)" }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3 font-mono text-sm font-semibold tracking-wider uppercase text-neoncyan border border-neoncyan/40 rounded-sm hover:bg-neoncyan/8 transition-all duration-300"
              >
                Download CV
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={item} className="flex gap-3">
              {[
                { href: personalInfo.github, icon: Github, label: "GitHub" },
                { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.12, color: "#00d9ff", borderColor: "rgba(0,217,255,0.5)" }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 text-muted hover:text-neoncyan border border-line rounded-sm transition-all duration-200 cursor-pointer"
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Profile photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Outer rotating glow ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-2xl hero-orbit"
                style={{
                  background: "conic-gradient(from 0deg, transparent 0%, #00d9ff 25%, transparent 50%, #00ff87 75%, transparent 100%)",
                  borderRadius: "18px",
                }}
              />

              {/* Main photo frame */}
              <div className="relative w-[280px] sm:w-[320px] lg:w-[360px] xl:w-[400px]">
                {/* Corner decorations */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-neoncyan z-20" />
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-neoncyan z-20" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-neongreen z-20" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-neongreen z-20" />

                {/* Photo container */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-xl border border-neoncyan/25 shadow-neon-cyan"
                >
                  {/* Scanline overlay */}
                  <div className="absolute inset-0 z-10 pointer-events-none photo-scanlines" />

                  {/* Tint overlay */}
                  <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-base/50 via-transparent to-neoncyan/5" />

                  <Image
                    src="/hero.png"
                    alt="Bayzid Himel — SecDev Lead and Security Software Engineer"
                    width={400}
                    height={480}
                    priority
                    className="w-full h-auto object-cover block"
                    style={{ filter: "contrast(1.05) brightness(0.98)" }}
                  />

                  {/* Bottom info bar */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 px-4 py-3 bg-gradient-to-t from-base/90 via-base/50 to-transparent">
                    <p className="font-orbitron text-xs font-bold text-neoncyan tracking-widest uppercase">
                      {personalInfo.name}
                    </p>
                    <p className="hidden sm:block font-mono text-[10px] text-faint tracking-wider mt-0.5">
                      {personalInfo.title}
                    </p>
                  </div>
                </motion.div>

                {/* Floating badge — top right */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 300 }}
                  className="absolute -top-5 -right-5 z-30 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-base border border-neongreen/40 shadow-neon-green"
                >
                  <Shield size={11} className="text-neongreen" />
                  <span className="font-mono text-[10px] text-neongreen font-semibold tracking-wider uppercase">Verified</span>
                </motion.div>

                {/* Floating badge — bottom left */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, type: "spring", stiffness: 300 }}
                  className="absolute -bottom-5 -left-5 z-30 px-3 py-1.5 rounded-full bg-base border border-neoncyan/40 shadow-neon-cyan"
                >
                  <span className="font-mono text-[10px] text-neoncyan tracking-wider uppercase font-semibold">
                    3+ Yrs Experience
                  </span>
                </motion.div>
              </div>

              {/* Ambient glow behind photo */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-neoncyan/10 blur-2xl scale-110" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-faint z-10"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-neoncyan" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-base to-transparent pointer-events-none" />
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { gsap, useReducedMotionPref } from "@/lib/motion";
import { useBooted } from "./AppShell";

function SplitLine({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      {text.split("").map((char, index) => (
        <span key={`${char}-${index}`} className="hero-char inline-block will-change-transform">
          {char === " " ? " " : char}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const booted = useBooted();
  const reduced = useReducedMotionPref();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!booted) return;

    const context = gsap.context(() => {
      if (reduced) return;

      gsap
        .timeline({ defaults: { ease: "power4.out" }, delay: 0.05 })
        .from(".hero-meta", { opacity: 0, y: 12, duration: 0.5 })
        .from(
          ".hero-char",
          {
            opacity: 0,
            yPercent: 115,
            rotateX: -72,
            transformOrigin: "50% 100%",
            stagger: 0.02,
            duration: 0.85,
          },
          "-=0.3"
        )
        .from(".hero-sub", { opacity: 0, y: 18, stagger: 0.06, duration: 0.6 }, "-=0.55")
        .from(
          ".hero-portrait",
          {
            opacity: 0,
            x: 42,
            clipPath: "inset(0 0 0 100%)",
            duration: 0.9,
            ease: "power3.inOut",
          },
          "-=0.8"
        );
    }, sectionRef);

    return () => context.revert();
  }, [booted, reduced]);

  const [firstName, lastName] = personalInfo.name.split(" ");

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-24 pt-28 sm:pb-28 lg:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 hero-scrim" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-[1320px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
        <div className="relative z-10">
          <p className="hero-meta inline-flex items-center gap-2 border border-neongreen/30 px-3 py-1.5 font-mono text-xs text-neongreen">
            <span className="h-1.5 w-1.5 rounded-full bg-neongreen pulse-dot" />
            Application Security · DevSecOps · Defensive Engineering
          </p>

          <h1 className="mt-7 font-orbitron font-black leading-[0.9] tracking-[-0.03em]">
            <SplitLine
              text={firstName.toUpperCase()}
              className="text-[clamp(3rem,9vw,7rem)] text-ink"
            />
            <SplitLine
              text={lastName.toUpperCase()}
              className="text-[clamp(3rem,9vw,7rem)] text-neoncyan"
            />
          </h1>

          <p className="hero-sub mt-7 text-lg font-medium text-ink sm:text-xl">
            SecDev Lead at Penough · Security Software Engineer
          </p>

          <p className="hero-sub mt-4 max-w-lg text-base leading-7 text-muted">
            I build and lead security products — phishing simulation, continuous penetration
            testing, and internet asset discovery — with a focus on secure architecture,
            automation, and defensive engineering.
          </p>

          <div className="hero-sub mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 bg-neoncyan px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-onaccent transition-colors duration-200 hover:bg-neongreen"
            >
              Get in touch
              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="/Bayzid_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 border border-line px-6 py-3.5 font-mono text-xs uppercase tracking-[0.14em] text-muted transition-colors duration-200 hover:border-neoncyan/50 hover:text-neoncyan"
            >
              Download CV
              <span className="text-faint transition-colors group-hover:text-neoncyan">↗</span>
            </a>
          </div>

          <dl className="hero-sub mt-10 grid max-w-lg grid-cols-3 gap-px border border-line bg-line">
            {[
              { value: "4", label: "Years in security" },
              { value: "4", label: "Products shipped" },
              { value: "6", label: "Certifications" },
            ].map((stat) => (
              <div key={stat.label} className="bg-base/80 px-4 py-4 backdrop-blur-sm">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-orbitron text-2xl font-bold text-neoncyan sm:text-3xl">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</dd>
              </div>
            ))}
          </dl>

          <div className="hero-sub mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
            <span className="font-mono text-xs text-faint">{personalInfo.location}</span>
            <span className="h-3 w-px bg-line" />
            <span className="flex items-center gap-2">
              {[
                { href: personalInfo.github, icon: Github, label: "GitHub" },
                { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center border border-line/70 text-muted transition-colors duration-200 hover:border-neoncyan/50 hover:text-neoncyan"
                >
                  <Icon size={15} />
                </a>
              ))}
            </span>
          </div>
        </div>

        <div className="relative z-10 flex justify-center lg:justify-end">
          <div className="hero-portrait relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[410px]">
            <div className="relative border border-line/80 bg-panel/20 p-2.5 backdrop-blur-[2px]">
              <div className="relative aspect-[4/5] overflow-hidden bg-panel">
                <Image
                  src="/hero.png"
                  alt="Portrait of Bayzid Himel"
                  fill
                  priority
                  sizes="(min-width: 1024px) 410px, (min-width: 640px) 380px, 82vw"
                  className="holo-img object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base/60 via-transparent to-transparent" />
                <div className="holo-scan" aria-hidden="true" />
              </div>

              <span className="absolute -left-px -top-px h-3 w-3 border-l border-t border-neoncyan" />
              <span className="absolute -right-px -top-px h-3 w-3 border-r border-t border-neoncyan" />
              <span className="absolute -bottom-px -left-px h-3 w-3 border-b border-l border-neoncyan" />
              <span className="absolute -bottom-px -right-px h-3 w-3 border-b border-r border-neoncyan" />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#experience"
        aria-label="Scroll to Experience"
        className="scroll-cue absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="scroll-cue-line" />
        <ArrowDown size={12} className="text-neoncyan" />
      </a>
    </section>
  );
}

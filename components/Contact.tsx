"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,

  MapPin,
  Phone,
} from "lucide-react";
import { personalInfo } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const tel = personalInfo.phone.replace(/\s/g, "");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <section id="contact" className="section-shell pb-32 sm:pb-40">
      <SectionHeader
        index="06"
        label="contact"
        title="Let's build something harder to break."
      />

      <div className="border-t border-line pt-10">
        <div>
          <Reveal>
            <p className="max-w-xl text-base leading-8 text-muted">
              Whether you have a question, a project idea, or want to talk security products,
              application security, DevSecOps, or research — reach out directly.
            </p>
          </Reveal>

          <Reveal delay={0.06} className="mt-10">
            <p className="hud-label">direct line</p>
            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group inline-flex max-w-full items-start gap-3 text-ink transition-colors duration-200 hover:text-neoncyan"
              >
                <span className="break-all text-[clamp(1.25rem,3vw,2.25rem)] font-semibold leading-tight tracking-[-0.02em]">
                  {personalInfo.email}
                </span>
                <ArrowUpRight
                  size={18}
                  className="mt-1 shrink-0 text-neoncyan transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 border border-line px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-faint transition-colors duration-200 hover:border-neoncyan/50 hover:text-neoncyan"
              >
                {copied ? <Check size={11} /> : <Copy size={11} />}
                {copied ? "copied" : "copy"}
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="mt-9">
            <div className="flex flex-col gap-4 border-t border-line/70 pt-6 font-mono text-xs uppercase tracking-[0.12em] text-muted sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-9">
              <a
                href={`tel:${tel}`}
                className="flex items-center gap-2 transition-colors hover:text-neoncyan"
              >
                <Phone size={13} className="text-neoncyan" />
                {personalInfo.phone}
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={13} className="text-neoncyan" />
                {personalInfo.location}
              </span>
              <a
                href="/Bayzid_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-neoncyan"
              >
                resume.pdf
                <ArrowUpRight size={12} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.14} className="mt-9">
            <div className="flex flex-wrap gap-2">
              {[
                { href: personalInfo.github, icon: Github, label: "GitHub" },
                { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-line/70 px-3.5 py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted transition-colors duration-200 hover:border-neoncyan/50 hover:text-neoncyan"
                >
                  <Icon size={13} />
                  {label}
                  <ArrowUpRight size={10} className="text-faint" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}

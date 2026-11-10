"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { navLinks, personalInfo } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      if (window.scrollY < window.innerHeight * 0.55) setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((link) => link.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-42% 0px -52% 0px" }
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = previous;
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || open
            ? "border-b border-line/70 bg-base/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between px-5 sm:px-8">
          <a href="#" className="group flex items-center gap-3" aria-label="Back to top">
            <span className="relative flex h-8 w-8 items-center justify-center border border-line/80">
              <span className="font-orbitron text-[11px] font-bold tracking-[0.12em] text-ink">
                BH
              </span>
              <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-neongreen pulse-dot" />
            </span>
            <span className="hidden font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-faint sm:block">
              security
              <br />
              systems
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = active === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`group relative px-3 py-2 font-mono text-xs uppercase tracking-[0.14em] transition-colors duration-200 ${
                    isActive ? "text-neoncyan" : "text-muted hover:text-ink"
                  }`}
                >
                  <span className="mr-1.5 text-[11px] text-faint">{link.code}</span>
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-px bg-neoncyan transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/Bayzid_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 border border-line/80 px-3.5 py-2 font-mono text-xs uppercase tracking-[0.14em] text-muted transition-colors duration-200 hover:border-neoncyan/50 hover:text-neoncyan sm:inline-flex"
            >
              Resume
              <ArrowUpRight size={12} />
            </a>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="inline-flex h-9 w-9 items-center justify-center border border-line/70 text-muted transition-colors hover:border-neoncyan/50 hover:text-neoncyan lg:hidden"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto border-t border-line/60 bg-base/95 backdrop-blur-2xl lg:hidden"
            data-lenis-prevent
          >
            <div className="flex min-h-full flex-col px-5 py-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                navigation // secure channel
              </p>
              <nav className="mt-6 flex flex-1 flex-col">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + index * 0.04 }}
                    className="flex items-center justify-between border-b border-line/50 py-4"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-neoncyan">
                        {link.code}
                      </span>
                      <span className="font-orbitron text-2xl font-semibold text-ink">
                        {link.label}
                      </span>
                    </span>
                    <span className="font-mono text-xs text-faint">↗</span>
                  </motion.a>
                ))}
              </nav>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="/Bayzid_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-neoncyan px-4 py-3 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-onaccent"
                >
                  Download CV
                  <ArrowUpRight size={13} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="border border-line px-4 py-3 font-mono text-xs uppercase tracking-[0.14em] text-muted"
                >
                  Email
                </a>
              </div>

              <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                {personalInfo.location} {"//"} session active
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#030712]/90 backdrop-blur-xl border-b border-[#00d9ff]/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.a
          href="#"
          className="flex items-center gap-2 group"
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative">
            <Shield
              size={22}
              className="text-[#00d9ff] group-hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.8)] transition-all duration-300"
            />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#00ff87] pulse-dot" />
          </div>
          <span className="font-orbitron text-sm font-bold tracking-widest text-white">
            BH<span className="text-[#00d9ff]">.</span>
          </span>
        </motion.a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-2 text-xs font-mono tracking-wider uppercase transition-colors duration-200 ${
                  isActive ? "text-[#00d9ff]" : "text-[#94a3b8] hover:text-[#e2e8f0]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded bg-[#00d9ff]/8 border border-[#00d9ff]/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                {link.label}
              </a>
            );
          })}
          <a
            href="/Bayzid-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-4 py-2 text-xs font-mono tracking-wider uppercase text-[#030712] bg-[#00d9ff] rounded hover:bg-[#00ff87] hover:shadow-neon-green transition-all duration-300 font-semibold"
          >
            Resume
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-[#94a3b8] hover:text-[#00d9ff] transition-colors absolute right-4"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#030712]/95 backdrop-blur-xl border-t border-[#00d9ff]/10 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 px-4 font-mono text-sm tracking-wider uppercase text-[#94a3b8] hover:text-[#00d9ff] hover:bg-[#00d9ff]/5 rounded transition-all duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="/Bayzid-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-2 py-3 px-4 text-center font-mono text-sm tracking-wider uppercase text-[#030712] bg-[#00d9ff] rounded font-semibold"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

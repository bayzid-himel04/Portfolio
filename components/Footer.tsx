"use client";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-[#1e293b] py-10 px-4"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Shield size={16} className="text-[#00d9ff]" />
          <span className="font-orbitron text-sm font-bold text-white">
            BH<span className="text-[#00d9ff]">.</span>
          </span>
        </div>

        <p className="font-mono text-xs text-[#475569] text-center">
          Designed & Built by{" "}
          <span className="text-[#00d9ff]">Bayzid Himel</span>
          {" · "}
          <span>{new Date().getFullYear()}</span>
        </p>

        <div className="flex items-center gap-1 font-mono text-[11px] text-[#374151]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff87] pulse-dot" />
          <span className="text-[#475569]">Available for work</span>
        </div>
      </div>
    </motion.footer>
  );
}

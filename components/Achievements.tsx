"use client";
import { motion } from "framer-motion";
import { Trophy, Shield, Code2, Layout, Monitor } from "lucide-react";
import { achievements } from "@/lib/data";

const icons = [Trophy, Shield, Code2, Layout, Monitor];
const colors = [
  "text-[#00d9ff]",
  "text-[#00ff87]",
  "text-[#ff0080]",
  "text-[#00d9ff]",
  "text-[#00ff87]",
];
const bgs = [
  "bg-[#00d9ff]/8",
  "bg-[#00ff87]/8",
  "bg-[#ff0080]/8",
  "bg-[#00d9ff]/8",
  "bg-[#00ff87]/8",
];
const borders = [
  "border-[#00d9ff]/20",
  "border-[#00ff87]/20",
  "border-[#ff0080]/20",
  "border-[#00d9ff]/20",
  "border-[#00ff87]/20",
];

const hoverBorders = [
  "hover:border-[#00d9ff]/50",
  "hover:border-[#00ff87]/50",
  "hover:border-[#ff0080]/50",
  "hover:border-[#00d9ff]/50",
  "hover:border-[#00ff87]/50",
];

export default function Achievements() {
  const top = achievements.slice(0, 3);
  const bottom = achievements.slice(3);

  return (
    <section id="achievements" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="font-mono text-[#00d9ff] text-sm tracking-widest">05.</span>
        <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-white">Achievements</h2>
        <div className="flex-1 cyber-divider" />
      </motion.div>

      {/* Top row — 3 cols */}
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {top.map((item, i) => {
          const Icon = icons[i];
          return (
            <AchievementCard key={i} item={item} i={i} Icon={Icon} colors={colors} bgs={bgs} borders={borders} hoverBorders={hoverBorders} />
          );
        })}
      </div>

      {/* Bottom row — 2 cols (centred) */}
      {bottom.length > 0 && (
        <div className={`grid gap-6 ${bottom.length === 1 ? "md:grid-cols-1 max-w-md mx-auto" : "md:grid-cols-2"}`}>
          {bottom.map((item, j) => {
            const i = j + 3;
            const Icon = icons[i % icons.length];
            return (
              <AchievementCard key={i} item={item} i={i} Icon={Icon} colors={colors} bgs={bgs} borders={borders} hoverBorders={hoverBorders} />
            );
          })}
        </div>
      )}
    </section>
  );
}

function AchievementCard({
  item, i, Icon, colors, bgs, borders, hoverBorders,
}: {
  item: { title: string; desc: string };
  i: number;
  Icon: React.ElementType;
  colors: string[];
  bgs: string[];
  borders: string[];
  hoverBorders: string[];
}) {
  const ci = i % colors.length;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: (i % 3) * 0.15, duration: 0.6 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className={`glass-card p-7 border ${borders[ci]} ${hoverBorders[ci]} transition-all duration-300`}
    >
      <div className="flex items-start justify-between mb-5">
        <div className={`p-3 rounded-lg ${bgs[ci]} ${borders[ci]} border`}>
          <Icon size={22} className={colors[ci]} />
        </div>
        <span className={`font-orbitron text-5xl font-black opacity-10 ${colors[ci]}`}>
          {String(i + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className={`font-orbitron text-base font-bold mb-3 ${colors[ci]}`}>{item.title}</h3>
      <p className="text-[#94a3b8] text-sm leading-relaxed">{item.desc}</p>
    </motion.div>
  );
}

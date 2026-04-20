"use client";

import { GlowShell } from "@/components/MotionProvider";
import { motion } from "framer-motion";

const worldPresets = [
  {
    title: "Mythic Desert World",
    description: "Ancient dunes, spiritual winds, and ancestral guardians.",
  },
  {
    title: "Oceanic Archipelago",
    description: "Island civilizations connected by tides, trade, and myth.",
  },
  {
    title: "Frozen Tundra Realm",
    description: "Harsh cold, resilient tribes, and crystalline magic.",
  },
  {
    title: "Sky‑Bound Continent",
    description: "Floating lands, celestial cultures, and wind‑governed cities.",
  },
];

export default function WorldPresetsPage() {
  return (
    <div className="min-h-screen w-full">
      <div className="mx-auto max-w-6xl pt-10 pb-20 px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h1 className="text-4xl font-semibold text-white">World Templates</h1>
          <p className="mt-2 text-slate-400 text-sm">
            One‑click world blueprints for creators
          </p>
        </motion.div>

        {/* PANEL */}
        <GlowShell>
          <div className="space-y-8">
            {worldPresets.map((preset, index) => (
              <PresetCard key={index} index={index} {...preset} />
            ))}
          </div>
        </GlowShell>
      </div>
    </div>
  );
}

function PresetCard({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ scale: 1.02, x: 6 }}
      className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl cursor-pointer hover:bg-white/10 transition-all"
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-slate-400 text-sm mt-2">{description}</p>
    </motion.div>
  );
}

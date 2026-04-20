"use client";

import { GlowShell } from "@/components/MotionProvider";
import { motion } from "framer-motion";

const governancePresets = [
  {
    title: "Council of Elders",
    description: "Wisdom‑based leadership guided by ancestral memory.",
  },
  {
    title: "Solar Mandate",
    description: "A radiant leadership system tied to celestial cycles.",
  },
  {
    title: "River‑Flow Republic",
    description: "Governance modeled on fluidity, adaptation, and harmony.",
  },
  {
    title: "Iron Oath Dominion",
    description: "A strict, disciplined hierarchy built on honor and law.",
  },
];

export default function GovernancePresetsPage() {
  return (
    <div className="min-h-screen w-full">
      <div className="mx-auto max-w-6xl pt-10 pb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h1 className="text-4xl font-semibold text-white">Governance Templates</h1>
          <p className="mt-2 text-slate-400 text-sm">
            One‑click governance system presets
          </p>
        </motion.div>

        <GlowShell>
          <div className="space-y-8">
            {governancePresets.map((preset, index) => (
              <PresetCard key={index} index={index} {...preset} />
            ))}
          </div>
        </GlowShell>
      </div>
    </div>
  );
}

function PresetCard({ title, description, index }) {
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

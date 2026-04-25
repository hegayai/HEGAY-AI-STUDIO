"use client";

import { motion } from "framer-motion";

export default function HybridPresetsPage() {
  const presets = [
    {
      title: "Hybrid Intelligence Model",
      description: "Combines human and AI decision layers for adaptive simulations.",
    },
    {
      title: "Multi‑Domain Fusion",
      description: "Integrates economic, governance, and social systems into one model.",
    },
    {
      title: "Cross‑System Dynamics",
      description: "Simulates interactions between multiple independent subsystems.",
    },
  ];

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Hybrid Presets</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {presets.map((p, i) => (
          <PresetCard
            key={i}
            title={p.title}
            description={p.description}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────── */
/* FIXED: PresetCard now has explicit prop types   */
/* ─────────────────────────────────────────────── */

type PresetCardProps = {
  title: string;
  description: string;
  index: number;
};

function PresetCard({ title, description, index }: PresetCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="p-6 rounded-xl bg-black/40 border border-gray-700 shadow-lg hover:bg-black/50 transition"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  );
}

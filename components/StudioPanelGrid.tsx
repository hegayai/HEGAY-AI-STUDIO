"use client";

import { motion } from "framer-motion";

const panels = [
  {
    title: "Image Realm",
    description: "Generate, enhance, and orchestrate visual assets.",
    accent: "from-purple-500/20 to-purple-700/10",
  },
  {
    title: "Dream Engine",
    description: "Craft cinematic dream sequences and narrative flows.",
    accent: "from-fuchsia-500/20 to-fuchsia-700/10",
  },
  {
    title: "Radio Mode",
    description: "Broadcast ambience, signals, and creative frequencies.",
    accent: "from-blue-500/20 to-blue-700/10",
  },
  {
    title: "Workflow Builder",
    description: "Design and automate creative pipelines and systems.",
    accent: "from-emerald-500/20 to-emerald-700/10",
  },
  {
    title: "Realm Manager",
    description: "Control, expand, and evolve your creative realms.",
    accent: "from-amber-500/20 to-amber-700/10",
  },
  {
    title: "System Monitor",
    description: "Track engines, memory, and creative throughput.",
    accent: "from-rose-500/20 to-rose-700/10",
  },
];

export default function StudioPanelGrid() {
  return (
    <section className="w-full mt-10">
      <h2 className="mb-4 text-lg font-semibold text-slate-100">
        Studio Panels
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {panels.map((panel, index) => (
          <motion.div
            key={panel.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className={`group cursor-pointer rounded-3xl border border-white/10 bg-gradient-to-br ${panel.accent} p-6 shadow-xl backdrop-blur transition hover:border-purple-400/40 hover:bg-black/40`}
          >
            <h3 className="text-base font-semibold text-slate-100">
              {panel.title}
            </h3>

            <p className="mt-2 text-sm text-slate-300/80">
              {panel.description}
            </p>

            <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <p className="mt-3 text-xs text-purple-200/70">
              Open module →
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

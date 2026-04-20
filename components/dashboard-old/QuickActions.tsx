"use client";

import { motion } from "framer-motion";
import { FiZap, FiImage, FiRadio, FiLayers } from "react-icons/fi";

const actions = [
  {
    title: "Launch Image Realm",
    description: "Generate, enhance, and orchestrate visual assets.",
    icon: <FiImage className="h-5 w-5 text-purple-300" />,
  },
  {
    title: "Open Dream Engine",
    description: "Create cinematic dream sequences and narrative flows.",
    icon: <FiLayers className="h-5 w-5 text-purple-300" />,
  },
  {
    title: "Start Radio Mode",
    description: "Broadcast audio, ambience, and creative signals.",
    icon: <FiRadio className="h-5 w-5 text-purple-300" />,
  },
  {
    title: "Boost System",
    description: "Optimize engines and accelerate creative throughput.",
    icon: <FiZap className="h-5 w-5 text-purple-300" />,
  },
];

export default function QuickActions() {
  return (
    <section className="w-full mt-10">
      <h2 className="mb-4 text-lg font-semibold text-slate-100">
        Quick Actions
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {actions.map((action, index) => (
          <motion.div
            key={action.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="group cursor-pointer rounded-2xl border border-white/10 bg-black/30 p-5 shadow-lg backdrop-blur transition hover:border-purple-400/40 hover:bg-black/40"
          >
            <div className="mb-3 flex items-center justify-between">
              <div className="rounded-xl bg-purple-500/20 p-2">
                {action.icon}
              </div>
            </div>

            <h3 className="text-sm font-semibold text-slate-100">
              {action.title}
            </h3>

            <p className="mt-1 text-xs text-slate-400">
              {action.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

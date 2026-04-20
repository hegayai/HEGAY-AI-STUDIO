"use client";

import { motion } from "framer-motion";
import { FiImage, FiFeather, FiRadio, FiCpu, FiLayers, FiTool } from "react-icons/fi";

const tools = [
  {
    title: "Image Generator",
    description: "Create and enhance visual assets.",
    icon: <FiImage className="h-5 w-5 text-purple-300" />,
  },
  {
    title: "Dream Writer",
    description: "Craft narratives, scripts, and emotional flows.",
    icon: <FiFeather className="h-5 w-5 text-purple-300" />,
  },
  {
    title: "Radio Engine",
    description: "Broadcast ambience and creative signals.",
    icon: <FiRadio className="h-5 w-5 text-purple-300" />,
  },
  {
    title: "Core Engine",
    description: "Monitor system performance and creative throughput.",
    icon: <FiCpu className="h-5 w-5 text-purple-300" />,
  },
  {
    title: "Realm Builder",
    description: "Construct and evolve creative realms.",
    icon: <FiLayers className="h-5 w-5 text-purple-300" />,
  },
  {
    title: "Workflow Tools",
    description: "Automate and orchestrate creative pipelines.",
    icon: <FiTool className="h-5 w-5 text-purple-300" />,
  },
];

export default function ToolGrid() {
  return (
    <section className="w-full mt-10">
      <h2 className="mb-4 text-lg font-semibold text-slate-100">
        Tools & Modules
      </h2>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="group cursor-pointer rounded-3xl border border-white/10 bg-black/30 p-6 shadow-xl backdrop-blur transition hover:border-purple-400/40 hover:bg-black/40"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="rounded-xl bg-purple-500/20 p-2">
                {tool.icon}
              </div>
            </div>

            <h3 className="text-base font-semibold text-slate-100">
              {tool.title}
            </h3>

            <p className="mt-2 text-sm text-slate-300/80">
              {tool.description}
            </p>

            <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <p className="mt-3 text-xs text-purple-200/70">
              Open tool →
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

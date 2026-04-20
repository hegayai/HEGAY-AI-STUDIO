"use client";

import { motion } from "framer-motion";

export default function ToolCard({
  title,
  description,
  aura,
}: {
  title: string;
  description: string;
  aura: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={`rounded-xl border border-white/10 bg-gradient-to-br ${aura} p-4 backdrop-blur-xl cursor-pointer`}
    >
      <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
      <p className="mt-1 text-xs text-slate-300">{description}</p>
    </motion.div>
  );
}

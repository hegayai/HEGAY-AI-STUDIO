"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export type EngineCoreProps = {
  title: string;
  description: string;
  aura: string;
  left: ReactNode;
  right: ReactNode;
};

export default function EngineCore({
  title,
  description,
  aura,
  left,
  right,
}: EngineCoreProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`rounded-2xl border border-white/10 bg-gradient-to-br ${aura} p-6 backdrop-blur-xl space-y-6`}
    >
      <header>
        <h1 className="text-lg font-semibold text-slate-100">{title}</h1>
        <p className="mt-1 text-sm text-slate-300">{description}</p>
      </header>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr),minmax(0,1.3fr)]">
        {left}
        {right}
      </div>
    </motion.div>
  );
}

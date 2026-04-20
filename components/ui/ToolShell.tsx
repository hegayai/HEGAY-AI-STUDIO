"use client";

import { motion } from "framer-motion";

export default function ToolShell({
  title,
  description,
  aura,
  children,
}: {
  title: string;
  description: string;
  aura: string;
  children?: React.ReactNode;
}) {
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

      <div className="rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur-xl min-h-[200px]">
        {children || (
          <p className="text-xs text-slate-500">
            Tool engine coming soon. This workspace is ready for integration.
          </p>
        )}
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";

export default function RealmCard({ title, description, accent }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`group cursor-pointer rounded-3xl border border-white/10 bg-gradient-to-br ${accent} p-6 shadow-xl backdrop-blur transition hover:border-purple-400/40 hover:bg-black/40`}
    >
      <h3 className="text-lg font-semibold text-slate-100">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-300/80">
        {description}
      </p>

      <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <p className="mt-3 text-xs text-purple-200/70">
        Enter realm →
      </p>
    </motion.div>
  );
}

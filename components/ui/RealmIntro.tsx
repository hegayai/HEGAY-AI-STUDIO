"use client";

import { motion } from "framer-motion";

export default function RealmIntro({
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
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`rounded-2xl border border-white/10 bg-gradient-to-br ${aura} p-6 backdrop-blur-xl`}
    >
      <h1 className="text-xl font-semibold text-slate-100">{title}</h1>
      <p className="mt-2 text-sm text-slate-200/80">{description}</p>
    </motion.div>
  );
}

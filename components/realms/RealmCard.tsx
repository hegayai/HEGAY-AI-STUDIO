"use client";

import React from "react";
import { motion } from "framer-motion";

type RealmCardProps = {
  title: string;
  description: string;
  accent: string; // gradient or color class
};

export default function RealmCard({ title, description, accent }: RealmCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 shadow-lg backdrop-blur-xl hover:border-cyan-400/40 transition`}
    >
      {/* Accent Glow */}
      <div
        className={`absolute inset-0 opacity-20 blur-2xl bg-gradient-to-br ${accent}`}
      />

      {/* Content */}
      <div className="relative z-10 space-y-2">
        <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
        <p className="text-sm text-slate-400">{description}</p>
      </div>

      {/* Hover Shine */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-gradient-to-t from-white/10 to-transparent" />
    </motion.div>
  );
}

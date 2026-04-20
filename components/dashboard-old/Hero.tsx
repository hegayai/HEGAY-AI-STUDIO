"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-600/20 via-purple-500/10 to-slate-900/80 p-8 shadow-[0_0_60px_rgba(147,51,234,0.35)] backdrop-blur">
      {/* Glow orbs */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-purple-500/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-fuchsia-500/30 blur-3xl" />
      </div>

      <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Text block */}
        <div className="max-w-2xl space-y-3">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-purple-200/80">
            Creative Civilization Engine
          </p>

          <h1 className="text-3xl font-semibold leading-tight text-slate-50 md:text-4xl">
            Hegay AI Dashboard — Cinematic Control Center
          </h1>

          <p className="text-sm text-slate-200/80">
            Monitor your realms, engines, and creative systems from a single, premium Apple‑grade
            interface. Designed for clarity, power, and emotional resonance.
          </p>
        </div>

        {/* Status card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-3 rounded-2xl border border-white/15 bg-black/40 p-4 text-xs text-slate-200 shadow-lg backdrop-blur md:w-72"
        >
          <div className="flex items-center justify-between">
            <span className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              System Status
            </span>

            <span className="inline-flex items-center gap-1 rounded-full bg-purple-500/20 px-2 py-0.5 text-[0.65rem] font-medium text-purple-100">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              Live
            </span>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <div className="space-y-1.5">
            <p className="flex items-center justify-between">
              <span className="text-slate-400">Active realms</span>
              <span className="font-medium text-slate-100">4</span>
            </p>

            <p className="flex items-center justify-between">
              <span className="text-slate-400">Running engines</span>
              <span className="font-medium text-slate-100">7</span>
            </p>

            <p className="flex items-center justify-between">
              <span className="text-slate-400">Broadcast channels</span>
              <span className="font-medium text-slate-100">12</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

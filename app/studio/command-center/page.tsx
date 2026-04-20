"use client";

import { StudioHero } from "@/components/StudioHero";

export default function CommandCenter() {
  return (
    <div className="flex flex-col gap-8">

      {/* Cinematic hero */}
      <StudioHero />

      {/* Command Center main panel */}
      <section className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-100 shadow-sm shadow-black/40 backdrop-blur">
        <h2 className="text-xl font-semibold">Command Center</h2>

        <p className="mt-2 text-sm text-slate-300">
          Your operational hub for campaigns, engines, signals, and real‑time creative systems.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <h3 className="text-sm font-medium text-slate-200">Live Engines</h3>
            <p className="mt-1 text-xs text-slate-400">
              Monitor active engines powering your creative OS.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <h3 className="text-sm font-medium text-slate-200">Signal Flow</h3>
            <p className="mt-1 text-xs text-slate-400">
              Track resonance, engagement, and distribution channels.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <h3 className="text-sm font-medium text-slate-200">Campaign Status</h3>
            <p className="mt-1 text-xs text-slate-400">
              Review active and scheduled campaigns across your network.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <h3 className="text-sm font-medium text-slate-200">Model Stack</h3>
            <p className="mt-1 text-xs text-slate-400">
              See which models are powering which tools and realms.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

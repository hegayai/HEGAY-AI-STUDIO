"use client";

import { useState } from "react";

export default function OriginModelPage() {
  const [name, setName] = useState("");
  const [culture, setCulture] = useState("");
  const [prompt, setPrompt] = useState("");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 lg:px-6 lg:py-8">
        {/* Header */}
        <header>
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
            Origin Model
          </p>
          <h1 className="mt-1 text-xl font-semibold text-slate-50">
            Ancestry • Lineage • Myth
          </h1>
          <p className="mt-1 text-xs text-slate-300 sm:text-sm">
            Generate mythic portraits, ancestral worlds, and lineage stories from identity and heritage.
          </p>
        </header>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          {/* Left: Controls */}
          <section className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Identity Input
            </p>
            <div className="space-y-3 text-xs text-slate-200">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-slate-300">Name / Lineage</label>
                <input
                  className="rounded-lg border border-slate-700/80 bg-slate-900/80 px-2 py-1 text-xs text-slate-100 outline-none focus:border-cyan-400/80"
                  placeholder="e.g. Bola‑Ige, Yoruba lineage"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-slate-300">Culture / Region</label>
                <input
                  className="rounded-lg border border-slate-700/80 bg-slate-900/80 px-2 py-1 text-xs text-slate-100 outline-none focus:border-cyan-400/80"
                  placeholder="e.g. West African, Caribbean, Afro‑diaspora"
                  value={culture}
                  onChange={(e) => setCulture(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-slate-300">Mythic Direction</label>
                <textarea
                  className="min-h-[80px] rounded-lg border border-slate-700/80 bg-slate-900/80 px-2 py-1 text-xs text-slate-100 outline-none focus:border-cyan-400/80"
                  placeholder="Describe the kind of myth, gods, guardians, or ancestral world you want."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </div>
              <button className="mt-1 inline-flex items-center justify-center rounded-full border border-cyan-400/80 bg-slate-950/80 px-3 py-1.5 text-[11px] font-semibold text-cyan-100 shadow-lg shadow-cyan-500/30">
                Generate Origin Universe
              </button>
            </div>
          </section>

          {/* Right: Preview */}
          <section className="space-y-3 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Preview
            </p>
            <div className="h-40 rounded-xl border border-slate-800/80 bg-gradient-to-br from-amber-400/10 via-orange-500/10 to-rose-500/10" />
            <div className="space-y-1 text-[11px] text-slate-200">
              <p className="font-semibold text-slate-100">Mythic Lineage Story</p>
              <p className="text-slate-300">
                This area will display the generated ancestral narrative, gods, guardians, and future descendants
                based on your inputs.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

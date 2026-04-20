"use client";

import { useState } from "react";

const AESTHETICS = [
  "Softcore",
  "Afro‑futuristic",
  "Cyber angel",
  "Dark academia",
  "Y2K",
  "Cosmic minimal",
];

export default function AestheticModelPage() {
  const [selected, setSelected] = useState("Afro‑futuristic");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 lg:px-6 lg:py-8">
        <header>
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
            Aesthetic Engine
          </p>
          <h1 className="mt-1 text-xl font-semibold text-slate-50">
            Vibes • Aesthetics • Moodboards
          </h1>
          <p className="mt-1 text-xs text-slate-300 sm:text-sm">
            Create full aesthetic identities, moodboards, rooms, and visual vibes in one click.
          </p>
        </header>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          {/* Left */}
          <section className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Aesthetic Selection
            </p>
            <div className="grid gap-2 text-xs text-slate-200 sm:grid-cols-2">
              {AESTHETICS.map((a) => (
                <button
                  key={a}
                  onClick={() => setSelected(a)}
                  className={`rounded-xl border px-3 py-2 text-left transition ${
                    selected === a
                      ? "border-fuchsia-400/80 bg-slate-900/80 text-slate-50"
                      : "border-slate-800/80 bg-slate-950/80 hover:border-slate-600/80"
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>
            <button className="inline-flex items-center justify-center rounded-full border border-fuchsia-400/80 bg-slate-950/80 px-3 py-1.5 text-[11px] font-semibold text-fuchsia-100 shadow-lg shadow-fuchsia-500/30">
              Generate Aesthetic Moodboard
            </button>
          </section>

          {/* Right */}
          <section className="space-y-3 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Preview • {selected}
            </p>
            <div className="h-40 rounded-xl border border-slate-800/80 bg-gradient-to-br from-fuchsia-400/10 via-purple-500/10 to-indigo-500/10" />
            <p className="text-[11px] text-slate-300">
              This panel will show the generated aesthetic moodboard, color palette, and style prompts for{" "}
              <span className="font-semibold text-slate-100">{selected}</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

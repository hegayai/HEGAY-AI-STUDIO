"use client";

import { useState } from "react";

const UNIVERSES = [
  "Anime universe",
  "Cosmic godform",
  "Afro‑futuristic city",
  "Cartoon world",
  "Cyberpunk district",
  "Pixar‑style realm",
];

export default function AvatarModelPage() {
  const [universe, setUniverse] = useState("Anime universe");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 lg:px-6 lg:py-8">
        <header>
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
            Avatar Universe
          </p>
          <h1 className="mt-1 text-xl font-semibold text-slate-50">
            Characters • Universes • Fun
          </h1>
          <p className="mt-1 text-xs text-slate-300 sm:text-sm">
            Turn anyone into anime, cosmic, afro‑futuristic, or cinematic characters across universes.
          </p>
        </header>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          {/* Left */}
          <section className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Universe Selection
            </p>
            <div className="space-y-2 text-xs text-slate-200">
              {UNIVERSES.map((u) => (
                <label
                  key={u}
                  className={`flex items-center justify-between rounded-xl border px-3 py-2 ${
                    universe === u
                      ? "border-cyan-400/80 bg-slate-900/80"
                      : "border-slate-800/80 bg-slate-950/80"
                  }`}
                >
                  <span>{u}</span>
                  <input
                    type="radio"
                    name="universe"
                    checked={universe === u}
                    onChange={() => setUniverse(u)}
                    className="h-3 w-3 accent-cyan-400"
                  />
                </label>
              ))}
            </div>
            <button className="inline-flex items-center justify-center rounded-full border border-cyan-400/80 bg-slate-950/80 px-3 py-1.5 text-[11px] font-semibold text-cyan-100 shadow-lg shadow-cyan-500/30">
              Generate Avatar
            </button>
          </section>

          {/* Right */}
          <section className="space-y-3 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Preview • {universe}
            </p>
            <div className="h-40 rounded-xl border border-slate-800/80 bg-gradient-to-br from-cyan-400/10 via-sky-500/10 to-blue-500/10" />
            <p className="text-[11px] text-slate-300">
              This panel will show the generated avatar in the selected universe, ready for export to social or
              projects.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

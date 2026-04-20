"use client";

import { useState } from "react";

export default function DreamModelPage() {
  const [dreamText, setDreamText] = useState("");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 lg:px-6 lg:py-8">
        <header>
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
            Dream Model
          </p>
          <h1 className="mt-1 text-xl font-semibold text-slate-50">
            Surreal • Subconscious • Night
          </h1>
          <p className="mt-1 text-xs text-slate-300 sm:text-sm">
            Transform dreams into surreal visuals, stories, and ambient soundscapes.
          </p>
        </header>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          {/* Left */}
          <section className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Dream Input
            </p>
            <div className="space-y-3 text-xs text-slate-200">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-slate-300">
                  Describe your dream
                </label>
                <textarea
                  className="min-h-[120px] rounded-lg border border-slate-700/80 bg-slate-900/80 px-2 py-1 text-xs text-slate-100 outline-none focus:border-violet-400/80"
                  placeholder="Write your dream in as much detail as you remember..."
                  value={dreamText}
                  onChange={(e) => setDreamText(e.target.value)}
                />
              </div>
              <button className="inline-flex items-center justify-center rounded-full border border-violet-400/80 bg-slate-950/80 px-3 py-1.5 text-[11px] font-semibold text-violet-100 shadow-lg shadow-violet-500/30">
                Generate Dream World
              </button>
            </div>
          </section>

          {/* Right */}
          <section className="space-y-3 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Preview • Dream World
            </p>
            <div className="h-40 rounded-xl border border-slate-800/80 bg-gradient-to-br from-slate-300/10 via-indigo-400/10 to-violet-500/10" />
            <div className="space-y-1 text-[11px] text-slate-200">
              <p className="font-semibold text-slate-100">Dream Interpretation & Story</p>
              <p className="text-slate-300">
                This area will display the surreal scene, key symbols, and narrative interpretation generated from
                your dream description.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

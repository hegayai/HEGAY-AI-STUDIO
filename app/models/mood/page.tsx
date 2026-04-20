"use client";

import { useState } from "react";

const MOODS = ["Calm", "Focused", "Joyful", "Melancholic", "Hyped", "Dreamy"];

export default function MoodModelPage() {
  const [mood, setMood] = useState("Calm");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 lg:px-6 lg:py-8">
        <header>
          <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
            Mood Model
          </p>
          <h1 className="mt-1 text-xl font-semibold text-slate-50">
            Emotion • Vibes • Presence
          </h1>
          <p className="mt-1 text-xs text-slate-300 sm:text-sm">
            Generate images, captions, and soundscapes that match the user’s current emotional state.
          </p>
        </header>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          {/* Left */}
          <section className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Mood Selection
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-slate-200">
              {MOODS.map((m) => (
                <button
                  key={m}
                  onClick={() => setMood(m)}
                  className={`rounded-full border px-3 py-1 ${
                    mood === m
                      ? "border-emerald-400/80 bg-slate-900/80 text-slate-50"
                      : "border-slate-800/80 bg-slate-950/80 hover:border-slate-600/80"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
            <button className="inline-flex items-center justify-center rounded-full border border-emerald-400/80 bg-slate-950/80 px-3 py-1.5 text-[11px] font-semibold text-emerald-100 shadow-lg shadow-emerald-500/30">
              Generate Mood Pack
            </button>
          </section>

          {/* Right */}
          <section className="space-y-3 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Preview • {mood}
            </p>
            <div className="h-40 rounded-xl border border-slate-800/80 bg-gradient-to-br from-emerald-400/10 via-teal-500/10 to-cyan-500/10" />
            <p className="text-[11px] text-slate-300">
              This panel will show mood‑aligned visuals, caption suggestions, and ambient soundscape prompts for{" "}
              <span className="font-semibold text-slate-100">{mood}</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

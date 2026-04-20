"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function CompositionLabPage() {
  const [layout, setLayout] = useState("Rule of Thirds");
  const [subject, setSubject] = useState("");
  const [energy, setEnergy] = useState("Balanced");
  const [loading, setLoading] = useState(false);
  const [resultUrl, setResultUrl] = useState("");

  async function handleGenerate() {
    if (!subject.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real composition engine API
    await new Promise((r) => setTimeout(r, 1200));

    setResultUrl(
      "https://via.placeholder.com/768x512.png?text=Composition+Lab"
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Composition Lab"
      description="Arrange scenes, frames, and visual layouts using cinematic composition principles."
      aura="from-purple-500/20 to-fuchsia-500/20"
      left={
        <EnginePanel>
          {/* Subject */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Subject / Scene
            </label>
            <textarea
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 h-24 outline-none"
              placeholder="Describe the subject or scene you want to frame..."
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          {/* Layout */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Composition Layout
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={layout}
              onChange={(e) => setLayout(e.target.value)}
            >
              <option>Rule of Thirds</option>
              <option>Golden Ratio</option>
              <option>Centered</option>
              <option>Symmetrical</option>
              <option>Leading Lines</option>
              <option>Minimalist Space</option>
            </select>
          </div>

          {/* Energy */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Visual Energy
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={energy}
              onChange={(e) => setEnergy(e.target.value)}
            >
              <option>Balanced</option>
              <option>Dynamic</option>
              <option>Calm</option>
              <option>Chaotic</option>
              <option>Focused</option>
            </select>
          </div>

          {/* Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !subject.trim()}
            className="rounded-lg border border-purple-400/60 bg-purple-500/30 px-4 py-2 text-xs text-purple-50 transition hover:bg-purple-500/50 disabled:opacity-40"
          >
            {loading ? "Composing…" : "Generate Composition"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-purple-400/40 border-t-transparent" />
              <p>Building your composition…</p>
            </div>
          )}

          {!loading && resultUrl && (
            <div className="w-full space-y-2">
              <div className="overflow-hidden rounded-lg border border-white/10 bg-slate-900/60">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={resultUrl}
                  alt="Composition Result"
                  className="h-64 w-full object-cover"
                />
              </div>

              <div className="flex gap-2">
                <button className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-[0.7rem] text-slate-100 hover:bg-white/10 transition">
                  Download
                </button>
                <button
                  onClick={handleGenerate}
                  className="rounded-lg border border-purple-400/60 bg-purple-500/30 px-3 py-1.5 text-[0.7rem] text-purple-50 hover:bg-purple-500/50 transition"
                >
                  Re‑compose
                </button>
              </div>
            </div>
          )}

          {!loading && !resultUrl && (
            <p className="text-xs text-slate-500 text-center px-4">
              Describe a subject and choose a composition layout to begin.

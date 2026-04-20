"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function BeatSequencerPage() {
  const [tempo, setTempo] = useState(100);
  const [swing, setSwing] = useState(0);
  const [pattern, setPattern] = useState(
    Array(16).fill(false) // 16‑step grid
  );
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState("");

  function toggleStep(index: number) {
    const updated = [...pattern];
    updated[index] = !updated[index];
    setPattern(updated);
  }

  async function handleGenerate() {
    setLoading(true);

    // 🔮 Placeholder for real beat generation API
    await new Promise((r) => setTimeout(r, 1500));

    setAudioUrl("/placeholder-beat.mp3");

    setLoading(false);
  }

  return (
    <EngineCore
      title="Beat Sequencer"
      description="Create rhythmic patterns, drum grids, and percussive structures."
      aura="from-cyan-500/20 to-blue-500/20"
      left={
        <EnginePanel>
          {/* Tempo */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Tempo ({tempo} BPM)
            </label>
            <input
              type="range"
              min={60}
              max={180}
              value={tempo}
              onChange={(e) => setTempo(Number(e.target.value))}
              className="mt-1 w-full"
            />
          </div>

          {/* Swing */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Swing ({swing}%)
            </label>
            <input
              type="range"
              min={0}
              max={100}
              value={swing}
              onChange={(e) => setSwing(Number(e.target.value))}
              className="mt-1 w-full"
            />
          </div>

          {/* Step Grid */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Pattern Grid (16 Steps)
            </label>

            <div className="grid grid-cols-8 gap-2 mt-2">
              {pattern.map((active, i) => (
                <button
                  key={i}
                  onClick={() => toggleStep(i)}
                  className={`h-8 rounded-md border text-[0.65rem] transition ${
                    active
                      ? "bg-blue-500/70 border-blue-400 text-white"
                      : "bg-black/40 border-white/15 text-slate-400"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="mt-3 rounded-lg border border-blue-400/60 bg-blue-500/30 px-4 py-2 text-xs text-blue-50 transition hover:bg-blue-500/50 disabled:opacity-40"
          >
            {loading ? "Sequencing Beat…" : "Generate Beat"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-blue-400/40 border-t-transparent" />
              <p>Building rhythmic pattern…</p>
            </div>
          )}

          {!loading && audioUrl && (
            <div className="w-full space-y-2">
              <audio controls className="w-full">
                <source src={audioUrl} type="audio/mpeg" />
              </audio>

              <div className="flex gap-2">
                <button className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-[0.7rem] text-slate-100 hover:bg-white/10 transition">
                  Download
                </button>
                <button
                  onClick={handleGenerate}
                  className="rounded-lg border border-blue-400/60 bg-blue-500/30 px-3 py-1.5 text-[0.7rem] text-blue-50 hover:bg-blue-500/50 transition"
                >
                  Re‑sequence
                </button>
              </div>
            </div>
          )}

          {!loading && !audioUrl && (
            <p className="text-xs text-slate-500 text-center px-4">
              Toggle steps on the grid to build your beat pattern.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}

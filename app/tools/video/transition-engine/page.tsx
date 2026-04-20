"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function TransitionEnginePage() {
  const [clipA, setClipA] = useState("");
  const [clipB, setClipB] = useState("");
  const [transition, setTransition] = useState("Crossfade");
  const [duration, setDuration] = useState(1.5);
  const [loading, setLoading] = useState(false);
  const [outputUrl, setOutputUrl] = useState("");

  async function handleGenerate() {
    if (!clipA.trim() || !clipB.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real transition generation API
    await new Promise((r) => setTimeout(r, 1500));

    setOutputUrl("/placeholder-transition.mp4");

    setLoading(false);
  }

  return (
    <EngineCore
      title="Transition Engine"
      description="Generate cinematic transitions, cuts, wipes, blends, and motion bridges between video clips."
      aura="from-fuchsia-500/20 to-purple-500/20"
      left={
        <EnginePanel>
          {/* Clip A */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Clip A URL
            </label>
            <input
              type="text"
              placeholder="Paste first video clip URL..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 outline-none"
              value={clipA}
              onChange={(e) => setClipA(e.target.value)}
            />
          </div>

          {/* Clip B */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Clip B URL
            </label>
            <input
              type="text"
              placeholder="Paste second video clip URL..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 outline-none"
              value={clipB}
              onChange={(e) => setClipB(e.target.value)}
            />
          </div>

          {/* Transition Type */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Transition Type
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={transition}
              onChange={(e) => setTransition(e.target.value)}
            >
              <option>Crossfade</option>
              <option>Fade to Black</option>
              <option>Fade to White</option>
              <option>Wipe Left</option>
              <option>Wipe Right</option>
              <option>Zoom Transition</option>
              <option>Motion Blur</option>
              <option>Hard Cut</option>
            </select>
          </div>

          {/* Duration */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Duration ({duration}s)
            </label>
            <input
              type="range"
              min={0.5}
              max={4}
              step={0.1}
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="mt-1 w-full"
            />
          </div>

          {/* Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !clipA.trim() || !clipB.trim()}
            className="mt-2 rounded-lg border border-purple-400/60 bg-purple-500/30 px-4 py-2 text-xs text-purple-50 transition hover:bg-purple-500/50 disabled:opacity-40"
          >
            {loading ? "Generating Transition…" : "Generate Transition"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-purple-400/40 border-t-transparent" />
              <p>Creating cinematic bridge…</p>
            </div>
          )}

          {!loading && outputUrl && (
            <div className="w-full space-y-2">
              <video
                controls
                className="w-full rounded-lg border border-white/10 bg-black/40"
              >
                <source src={outputUrl} type="video/mp4" />
              </video>

              <div className="flex gap-2">
                <button className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-[0.7rem] text-slate-100 hover:bg-white/10 transition">
                  Download
                </button>
                <button
                  onClick={handleGenerate}
                  className="rounded-lg border border-purple-400/60 bg-purple-500/30 px-3 py-1.5 text-[0.7rem] text-purple-50 hover:bg-purple-500/50 transition"
                >
                  Re‑generate
                </button>
              </div>
            </div>
          )}

          {!loading && !outputUrl && (
            <p className="text-xs text-slate-500 text-center px-4">
              Provide two clips and choose a transition to generate a cinematic bridge.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}

"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function MotionStyleEnginePage() {
  const [videoUrl, setVideoUrl] = useState("");
  const [style, setStyle] = useState("Cinematic");
  const [speed, setSpeed] = useState(100);
  const [energy, setEnergy] = useState("Balanced");
  const [loading, setLoading] = useState(false);
  const [resultUrl, setResultUrl] = useState("");

  async function handleApply() {
    if (!videoUrl.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real motion‑style API
    await new Promise((r) => setTimeout(r, 1500));

    setResultUrl("/placeholder-motion-style.mp4");

    setLoading(false);
  }

  return (
    <EngineCore
      title="Motion Style Engine"
      description="Apply cinematic motion styles, pacing, and kinetic aesthetics to video."
      aura="from-blue-500/20 to-cyan-500/20"
      left={
        <EnginePanel>
          {/* Video URL */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Video URL
            </label>
            <input
              type="text"
              placeholder="Paste a video URL to stylize motion..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 outline-none"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
            />
          </div>

          {/* Motion Style */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Motion Style
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
            >
              <option>Cinematic</option>
              <option>Dreamlike</option>
              <option>Hyperreal</option>
              <option>Documentary</option>
              <option>Slow Drift</option>
              <option>Dynamic Action</option>
            </select>
          </div>

          {/* Speed */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Motion Speed ({speed}%)
            </label>
            <input
              type="range"
              min={50}
              max={150}
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="mt-1 w-full"
            />
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
              <option>Calm</option>
              <option>Chaotic</option>
              <option>Focused</option>
              <option>Epic</option>
            </select>
          </div>

          {/* Button */}
          <button
            onClick={handleApply}
            disabled={loading || !videoUrl.trim()}
            className="mt-2 rounded-lg border border-cyan-400/60 bg-cyan-500/30 px-4 py-2 text-xs text-cyan-50 transition hover:bg-cyan-500/50 disabled:opacity-40"
          >
            {loading ? "Applying Motion Style…" : "Apply Motion Style"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-cyan-400/40 border-t-transparent" />
              <p>Processing kinetic aesthetic…</p>
            </div>
          )}

          {!loading && resultUrl && (
            <div className="w-full space-y-2">
              <video
                controls
                className="w-full rounded-lg border border-white/10 bg-black/40"
              >
                <source src={resultUrl} type="video/mp4" />
              </video>

              <div className="flex gap-2">
                <button className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-[0.7rem] text-slate-100 hover:bg-white/10 transition">
                  Download
                </button>
                <button
                  onClick={handleApply}
                  className="rounded-lg border border-cyan-400/60 bg-cyan-500/30 px-3 py-1.5 text-[0.7rem] text-cyan-50 hover:bg-cyan-500/50 transition"
                >
                  Re‑apply
                </button>
              </div>
            </div>
          )}

          {!loading && !resultUrl && (
            <p className="text-xs text-slate-500 text-center px-4">
              Paste a video URL and choose a motion style to begin.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}

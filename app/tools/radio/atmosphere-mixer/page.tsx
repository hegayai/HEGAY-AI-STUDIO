"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function AtmosphereMixerPage() {
  const [layerA, setLayerA] = useState("Rain");
  const [layerB, setLayerB] = useState("Wind");
  const [intensityA, setIntensityA] = useState(50);
  const [intensityB, setIntensityB] = useState(50);
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState("");

  async function handleMix() {
    setLoading(true);

    // 🔮 Placeholder for real audio mixing API
    await new Promise((r) => setTimeout(r, 1200));

    setAudioUrl("/placeholder-mix.mp3");

    setLoading(false);
  }

  return (
    <EngineCore
      title="Atmosphere Mixer"
      description="Blend ambiences, soundscapes, and layered atmospheres for radio, film, and immersive audio."
      aura="from-amber-500/20 to-red-500/20"
      left={
        <EnginePanel>
          {/* Layer A */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Layer A
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={layerA}
              onChange={(e) => setLayerA(e.target.value)}
            >
              <option>Rain</option>
              <option>Wind</option>
              <option>Forest</option>
              <option>City Noise</option>
              <option>Ocean</option>
              <option>Fire Crackle</option>
            </select>
          </div>

          {/* Intensity A */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Intensity A ({intensityA}%)
            </label>
            <input
              type="range"
              min={0}
              max={100}
              value={intensityA}
              onChange={(e) => setIntensityA(Number(e.target.value))}
              className="mt-1 w-full"
            />
          </div>

          {/* Layer B */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Layer B
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={layerB}
              onChange={(e) => setLayerB(e.target.value)}
            >
              <option>Wind</option>
              <option>Rain</option>
              <option>Forest</option>
              <option>City Noise</option>
              <option>Ocean</option>
              <option>Fire Crackle</option>
            </select>
          </div>

          {/* Intensity B */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Intensity B ({intensityB}%)
            </label>
            <input
              type="range"
              min={0}
              max={100}
              value={intensityB}
              onChange={(e) => setIntensityB(Number(e.target.value))}
              className="mt-1 w-full"
            />
          </div>

          {/* Button */}
          <button
            onClick={handleMix}
            disabled={loading}
            className="mt-2 rounded-lg border border-red-400/60 bg-red-500/30 px-4 py-2 text-xs text-red-50 transition hover:bg-red-500/50 disabled:opacity-40"
          >
            {loading ? "Mixing Atmosphere…" : "Generate Mix"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-red-400/40 border-t-transparent" />
              <p>Blending sound layers…</p>
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
                  onClick={handleMix}
                  className="rounded-lg border border-red-400/60 bg-red-500/30 px-3 py-1.5 text-[0.7rem] text-red-50 hover:bg-red-500/50 transition"
                >
                  Re‑mix
                </button>
              </div>
            </div>
          )}

          {!loading && !audioUrl && (
            <p className="text-xs text-slate-500 text-center px-4">
              Choose two ambience layers and intensities to mix an atmosphere.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}

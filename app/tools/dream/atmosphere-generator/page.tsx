"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function AtmosphereGeneratorPage() {
  const [theme, setTheme] = useState("Ethereal");
  const [density, setDensity] = useState(40);
  const [temperature, setTemperature] = useState("Cool");
  const [loading, setLoading] = useState(false);
  const [resultUrl, setResultUrl] = useState("");

  async function handleGenerate() {
    setLoading(true);

    // 🔮 Placeholder for real atmosphere generation API
    await new Promise((r) => setTimeout(r, 1200));

    setResultUrl(
      "https://via.placeholder.com/768x512.png?text=Atmosphere+Generator"
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Atmosphere Generator"
      description="Craft moods, vibes, dream fog, and subconscious atmospheric textures."
      aura="from-indigo-500/20 to-blue-500/20"
      left={
        <EnginePanel>
          {/* Theme */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Atmosphere Theme
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              <option>Ethereal</option>
              <option>Dark Dream</option>
              <option>Melancholic Mist</option>
              <option>Cosmic Drift</option>
              <option>Warm Glow</option>
              <option>Noir Haze</option>
            </select>
          </div>

          {/* Density */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Density ({density}%)
            </label>
            <input
              type="range"
              min={0}
              max={100}
              value={density}
              onChange={(e) => setDensity(Number(e.target.value))}
              className="mt-1 w-full"
            />
          </div>

          {/* Temperature */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Temperature
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
            >
              <option>Cool</option>
              <option>Warm</option>
              <option>Neutral</option>
              <option>Frosted</option>
              <option>Humid</option>
            </select>
          </div>

          {/* Button */}
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="rounded-lg border border-blue-400/60 bg-blue-500/30 px-4 py-2 text-xs text-blue-50 transition hover:bg-blue-500/50 disabled:opacity-40"
          >
            {loading ? "Generating Atmosphere…" : "Generate Atmosphere"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-blue-400/40 border-t-transparent" />
              <p>Forming dream atmosphere…</p>
            </div>
          )}

          {!loading && resultUrl && (
            <div className="w-full space-y-2">
              <div className="overflow-hidden rounded-lg border border-white/10 bg-slate-900/60">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={resultUrl}
                  alt="Atmosphere Result"
                  className="h-64 w-full object-cover"
                />
              </div>

              <div className="flex gap-2">
                <button className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-[0.7rem] text-slate-100 hover:bg-white/10 transition">
                  Download
                </button>
                <button
                  onClick={handleGenerate}
                  className="rounded-lg border border-blue-400/60 bg-blue-500/30 px-3 py-1.5 text-[0.7rem] text-blue-50 hover:bg-blue-500/50 transition"
                >
                  Re‑generate
                </button>
              </div>
            </div>
          )}

          {!loading && !resultUrl && (
            <p className="text-xs text-slate-500 text-center px-4">
              Choose a theme, density, and temperature to generate a dream
              atmosphere.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}

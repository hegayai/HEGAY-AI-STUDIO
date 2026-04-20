"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function SonicAtmospherePage() {
  const [prompt, setPrompt] = useState("");
  const [texture, setTexture] = useState("Warm Pad");
  const [intensity, setIntensity] = useState(50);
  const [space, setSpace] = useState("Wide");
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState("");

  async function handleGenerate() {
    if (!prompt.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real atmosphere generation API
    await new Promise((r) => setTimeout(r, 1500));

    setAudioUrl("/placeholder-atmosphere.mp3");

    setLoading(false);
  }

  return (
    <EngineCore
      title="Sonic Atmosphere Engine"
      description="Generate ambient soundscapes, pads, and emotional sonic textures."
      aura="from-fuchsia-500/20 to-rose-500/20"
      left={
        <EnginePanel>
          {/* Prompt */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Atmosphere Prompt
            </label>
            <textarea
              placeholder="Describe the emotional space, environment, or sonic mood..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 h-24 outline-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          {/* Texture */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Texture Type
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={texture}
              onChange={(e) => setTexture(e.target.value)}
            >
              <option>Warm Pad</option>
              <option>Airy Drone</option>
              <option>Dark Atmosphere</option>
              <option>Glass Texture</option>
              <option>Cosmic Swell</option>
              <option>Nature Ambience</option>
              <option>Water Flow</option>
            </select>
          </div>

          {/* Intensity */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Intensity ({intensity}%)
            </label>
            <input
              type="range"
              min={0}
              max={100}
              value={intensity}
              onChange={(e) => setIntensity(Number(e.target.value))}
              className="mt-1 w-full"
            />
          </div>

          {/* Space */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Spatial Width
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={space}
              onChange={(e) => setSpace(e.target.value)}
            >
              <option>Wide</option>
              <option>Medium</option>
              <option>Narrow</option>
              <option>Surround</option>
              <option>Deep Field</option>
            </select>
          </div>

          {/* Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="mt-2 rounded-lg border border-rose-400/60 bg-rose-500/30 px-4 py-2 text-xs text-rose-50 transition hover:bg-rose-500/50 disabled:opacity-40"
          >
            {loading ? "Generating Atmosphere…" : "Generate Atmosphere"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-rose-400/40 border-t-transparent" />
              <p>Shaping emotional space…</p>
            </div>
          )}

          {/* Output */}
          {!loading && audioUrl && (
            <div className="w-full space-y-3">
              <audio controls className="w-full">
                <source src={audioUrl} type="audio/mpeg" />
              </audio>

              <div className="flex gap-2">
                <button className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-[0.7rem] text-slate-100 hover:bg-white/10 transition">
                  Download
                </button>
                <button
                  onClick={handleGenerate}
                  className="rounded-lg border border-rose-400/60 bg-rose-500/30 px-3 py-1.5 text-[0.7rem] text-rose-50 hover:bg-rose-500/50 transition"
                >
                  Re‑generate
                </button>
              </div>
            </div>
          )}

          {/* Empty */}
          {!loading && !audioUrl && (
            <p className="text-xs text-slate-500 text-center px-4">
              Describe an emotional or environmental space to generate your first atmosphere.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}

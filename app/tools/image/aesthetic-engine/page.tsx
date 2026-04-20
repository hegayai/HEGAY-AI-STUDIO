"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function AestheticEnginePage() {
  const [imageUrl, setImageUrl] = useState("");
  const [style, setStyle] = useState("Cinematic");
  const [intensity, setIntensity] = useState(50);
  const [loading, setLoading] = useState(false);
  const [resultUrl, setResultUrl] = useState("");

  async function handleTransform() {
    if (!imageUrl.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real API call
    await new Promise((r) => setTimeout(r, 1200));

    setResultUrl(
      "https://via.placeholder.com/768x512.png?text=Aesthetic+Transform"
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Aesthetic Engine"
      description="Transform images with cinematic styles, filters, and aesthetic treatments."
      aura="from-purple-500/20 to-fuchsia-500/20"
      left={
        <EnginePanel>
          {/* Image URL */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Image URL
            </label>
            <input
              type="text"
              placeholder="Paste an image URL to transform..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 outline-none"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>

          {/* Style */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Style
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
            >
              <option>Cinematic</option>
              <option>Analog Film</option>
              <option>Cyberpunk</option>
              <option>Painterly</option>
              <option>Neon Noir</option>
              <option>Minimalist</option>
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

          {/* Button */}
          <button
            onClick={handleTransform}
            disabled={loading || !imageUrl.trim()}
            className="rounded-lg border border-purple-400/60 bg-purple-500/30 px-4 py-2 text-xs text-purple-50 transition hover:bg-purple-500/50 disabled:opacity-40"
          >
            {loading ? "Transforming…" : "Apply Aesthetic"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-purple-400/40 border-t-transparent" />
              <p>Applying aesthetic transformation…</p>
            </div>
          )}

          {!loading && resultUrl && (
            <div className="w-full space-y-2">
              <div className="overflow-hidden rounded-lg border border-white/10 bg-slate-900/60">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={resultUrl}
                  alt="Aesthetic Result"
                  className="h-64 w-full object-cover"
                />
              </div>

              <div className="flex gap-2">
                <button className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-[0.7rem] text-slate-100 hover:bg-white/10 transition">
                  Download
                </button>
                <button
                  onClick={handleTransform}
                  className="rounded-lg border border-purple-400/60 bg-purple-500/30 px-3 py-1.5 text-[0.7rem] text-purple-50 hover:bg-purple-500/50 transition"
                >
                  Re‑apply
                </button>
              </div>
            </div>
          )}

          {!loading && !resultUrl && (
            <p className="text-xs text-slate-500 text-center px-4">
              Paste an image URL and choose a style to begin transforming.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}

"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function MoodPainterPage() {
  const [emotion, setEmotion] = useState("Calm");
  const [palette, setPalette] = useState("Pastel");
  const [intensity, setIntensity] = useState(60);
  const [loading, setLoading] = useState(false);
  const [resultUrl, setResultUrl] = useState("");

  async function handleGenerate() {
    setLoading(true);

    // 🔮 Placeholder for real mood‑painting API
    await new Promise((r) => setTimeout(r, 1200));

    setResultUrl(
      "https://via.placeholder.com/768x512.png?text=Mood+Painter"
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Mood Painter"
      description="Paint emotional atmospheres, color fields, and gradient-driven moods."
      aura="from-purple-500/20 to-fuchsia-500/20"
      left={
        <EnginePanel>
          {/* Emotion */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Emotion
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={emotion}
              onChange={(e) => setEmotion(e.target.value)}
            >
              <option>Calm</option>
              <option>Melancholic</option>
              <option>Joyful</option>
              <option>Dreamy</option>
              <option>Dark</option>
              <option>Triumphant</option>
            </select>
          </div>

          {/* Palette */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Palette
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={palette}
              onChange={(e) => setPalette(e.target.value)}
            >
              <option>Pastel</option>
              <option>Vibrant</option>
              <option>Muted</option>
              <option>Neon</option>
              <option>Earthy</option>
              <option>Monochrome</option>
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
            onClick={handleGenerate}
            disabled={loading}
            className="rounded-lg border border-purple-400/60 bg-purple-500/30 px-4 py-2 text-xs text-purple-50 transition hover:bg-purple-500/50 disabled:opacity-40"
          >
            {loading ? "Painting Mood…" : "Generate Mood"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-purple-400/40 border-t-transparent" />
              <p>Painting emotional atmosphere…</p>
            </div>
          )}

          {!loading && resultUrl && (
            <div className="w-full space-y-2">
              <div className="overflow-hidden rounded-lg border border-white/10 bg-slate-900/60">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={resultUrl}
                  alt="Mood Painter Result"
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
                  Re‑paint
                </button>
              </div>
            </div>
          )}

          {!loading && !resultUrl && (
            <p className="text-xs text-slate-500 text-center px-4">
              Choose an emotion, palette, and intensity to paint a mood.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}

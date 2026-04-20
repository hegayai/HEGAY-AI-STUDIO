"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

type GeneratedImage = {
  url: string;
  prompt: string;
};

export default function ImageGeneratorPage() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("Cinematic");
  const [mood, setMood] = useState("Ethereal");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<GeneratedImage | null>(null);

  async function handleGenerate() {
    if (!prompt.trim()) return;
    setLoading(true);
    setError(null);

    try {
      // 🔮 Swap with real image API call later
      await new Promise((r) => setTimeout(r, 1200));

      setResult({
        url: "https://via.placeholder.com/768x512.png?text=Generated+Image",
        prompt: `${prompt} · ${style} · ${mood}`,
      });
    } catch (e) {
      setError("Something went wrong while generating. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <EngineCore
      title="Image Generator"
      description="Create origin images and cosmic compositions from prompts, moods, and aesthetic intent."
      aura="from-purple-500/20 to-fuchsia-500/20"
      left={
        <EnginePanel>
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Prompt
            </label>
            <textarea
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 outline-none focus:border-purple-400/70 focus:ring-1 focus:ring-purple-400/40 resize-none h-24"
              placeholder="Describe the scene, subject, mood, and style you want to generate..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
                Style
              </label>
              <select
                className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 outline-none focus:border-purple-400/70 focus:ring-1 focus:ring-purple-400/40"
                value={style}
                onChange={(e) => setStyle(e.target.value)}
              >
                <option>Cinematic</option>
                <option>Painterly</option>
                <option>Hyperreal</option>
                <option>Graphic Novel</option>
                <option>Minimalist</option>
              </select>
            </div>

            <div>
              <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
                Mood
              </label>
              <select
                className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 outline-none focus:border-purple-400/70 focus:ring-1 focus:ring-purple-400/40"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
              >
                <option>Ethereal</option>
                <option>Melancholic</option>
                <option>Triumphant</option>
                <option>Noir</option>
                <option>Playful</option>
              </select>
            </div>
          </div>

          {error && (
            <p className="text-[0.7rem] text-red-300 bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="mt-1 inline-flex items-center justify-center rounded-lg border border-purple-400/60 bg-purple-500/30 px-4 py-2 text-xs font-semibold text-purple-50 transition hover:bg-purple-500/50 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {loading ? "Generating…" : "Generate Image"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-purple-400/40 border-t-transparent" />
              <p>Summoning your image from the cosmic field…</p>
            </div>
          )}

          {!loading && result && (
            <div className="w-full space-y-2">
              <div className="overflow-hidden rounded-lg border border-white/10 bg-slate-900/60">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={result.url}
                  alt={result.prompt}
                  className="h-64 w-full object-cover"
                />
              </div>
              <p className="text-[0.7rem] text-slate-400 line-clamp-2">
                {result.prompt}
              </p>
              <div className="flex gap-2">
                <button className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-[0.7rem] text-slate-100 hover:bg-white/10 transition">
                  Download
                </button>
                <button
                  onClick={handleGenerate}
                  className="rounded-lg border border-purple-400/60 bg-purple-500/30 px-3 py-1.5 text-[0.7rem] text-purple-50 hover:bg-purple-500/50 transition"
                >
                  Regenerate
                </button>
              </div>
            </div>
          )}

          {!loading && !result && (
            <p className="text-[0.7rem] text-slate-500 text-center px-4">
              Describe something vivid on the left, choose a style and mood, then
              generate your first origin image.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}

"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function VideoGeneratorPage() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("Cinematic");
  const [duration, setDuration] = useState(5);
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  async function handleGenerate() {
    if (!prompt.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real video generation API
    await new Promise((r) => setTimeout(r, 1500));

    setVideoUrl("/placeholder-video.mp4");

    setLoading(false);
  }

  return (
    <EngineCore
      title="Video Generator"
      description="Generate cinematic video clips from prompts, styles, and motion cues."
      aura="from-purple-500/20 to-indigo-500/20"
      left={
        <EnginePanel>
          {/* Prompt */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Prompt
            </label>
            <textarea
              placeholder="Describe the scene, motion, mood, and cinematic intent..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 h-24 outline-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
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
              <option>Documentary</option>
              <option>Surreal</option>
              <option>Hyperreal</option>
              <option>Dreamlike</option>
              <option>Minimalist</option>
            </select>
          </div>

          {/* Duration */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Duration ({duration}s)
            </label>
            <input
              type="range"
              min={2}
              max={12}
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="mt-1 w-full"
            />
          </div>

          {/* Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="mt-2 rounded-lg border border-indigo-400/60 bg-indigo-500/30 px-4 py-2 text-xs text-indigo-50 transition hover:bg-indigo-500/50 disabled:opacity-40"
          >
            {loading ? "Rendering Video…" : "Generate Video"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-indigo-400/40 border-t-transparent" />
              <p>Rendering cinematic motion…</p>
            </div>
          )}

          {!loading && videoUrl && (
            <div className="w-full space-y-2">
              <video
                controls
                className="w-full rounded-lg border border-white/10 bg-black/40"
              >
                <source src={videoUrl} type="video/mp4" />
              </video>

              <div className="flex gap-2">
                <button className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-[0.7rem] text-slate-100 hover:bg-white/10 transition">
                  Download
                </button>
                <button
                  onClick={handleGenerate}
                  className="rounded-lg border border-indigo-400/60 bg-indigo-500/30 px-3 py-1.5 text-[0.7rem] text-indigo-50 hover:bg-indigo-500/50 transition"
                >
                  Re‑render
                </button>
              </div>
            </div>
          )}

          {!loading && !videoUrl && (
            <p className="text-xs text-slate-500 text-center px-4">
              Describe a scene and choose a style to generate your first motion clip.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}

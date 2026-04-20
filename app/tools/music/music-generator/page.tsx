"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function MusicGeneratorPage() {
  const [prompt, setPrompt] = useState("");
  const [genre, setGenre] = useState("Cinematic");
  const [tempo, setTempo] = useState(100);
  const [mood, setMood] = useState("Emotional");
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState("");

  async function handleGenerate() {
    if (!prompt.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real music generation API
    await new Promise((r) => setTimeout(r, 1500));

    setAudioUrl("/placeholder-music.mp3");

    setLoading(false);
  }

  return (
    <EngineCore
      title="Music Generator"
      description="Generate full musical compositions from prompts, moods, and styles."
      aura="from-emerald-500/20 to-cyan-500/20"
      left={
        <EnginePanel>
          {/* Prompt */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Prompt
            </label>
            <textarea
              placeholder="Describe the emotion, scene, cultural vibe, or musical intent..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 h-24 outline-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          {/* Genre */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Genre
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            >
              <option>Cinematic</option>
              <option>Afrobeat</option>
              <option>Ambient</option>
              <option>Trap</option>
              <option>Jazz</option>
              <option>Classical</option>
              <option>Electronic</option>
              <option>Lo‑Fi</option>
            </select>
          </div>

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

          {/* Mood */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Mood
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
            >
              <option>Emotional</option>
              <option>Dark</option>
              <option>Epic</option>
              <option>Calm</option>
              <option>Energetic</option>
              <option>Spiritual</option>
            </select>
          </div>

          {/* Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="mt-2 rounded-lg border border-cyan-400/60 bg-cyan-500/30 px-4 py-2 text-xs text-cyan-50 transition hover:bg-cyan-500/50 disabled:opacity-40"
          >
            {loading ? "Composing…" : "Generate Music"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-cyan-400/40 border-t-transparent" />
              <p>Composing musical structure…</p>
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
                  className="rounded-lg border border-cyan-400/60 bg-cyan-500/30 px-3 py-1.5 text-[0.7rem] text-cyan-50 hover:bg-cyan-500/50 transition"
                >
                  Re‑compose
                </button>
              </div>
            </div>
          )}

          {!loading && !audioUrl && (
            <p className="text-xs text-slate-500 text-center px-4">
              Describe a musical idea to generate your first composition.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}

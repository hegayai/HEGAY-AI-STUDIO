"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function MelodyEnginePage() {
  const [prompt, setPrompt] = useState("");
  const [scale, setScale] = useState("Minor");
  const [emotion, setEmotion] = useState("Soulful");
  const [length, setLength] = useState(8); // bars
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState("");
  const [notation, setNotation] = useState("");

  async function handleGenerate() {
    if (!prompt.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real melody generation API
    await new Promise((r) => setTimeout(r, 1500));

    setAudioUrl("/placeholder-melody.mp3");
    setNotation(`
Melody Notation (Mock):
C4 - D#4 - G4 - Bb4
C5 - A#4 - G4 - F4
`);

    setLoading(false);
  }

  return (
    <EngineCore
      title="Melody Engine"
      description="Generate melodies, motifs, hooks, and emotional musical lines."
      aura="from-blue-500/20 to-indigo-500/20"
      left={
        <EnginePanel>
          {/* Prompt */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Melody Prompt
            </label>
            <textarea
              placeholder="Describe the emotion, cultural vibe, or melodic intent..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 h-24 outline-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          {/* Scale */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Scale
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={scale}
              onChange={(e) => setScale(e.target.value)}
            >
              <option>Minor</option>
              <option>Major</option>
              <option>Pentatonic</option>
              <option>Dorian</option>
              <option>Phrygian</option>
              <option>Lydian</option>
              <option>Mixolydian</option>
            </select>
          </div>

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
              <option>Soulful</option>
              <option>Epic</option>
              <option>Dark</option>
              <option>Playful</option>
              <option>Melancholic</option>
              <option>Spiritual</option>
            </select>
          </div>

          {/* Length */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Length ({length} bars)
            </label>
            <input
              type="range"
              min={4}
              max={32}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="mt-1 w-full"
            />
          </div>

          {/* Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="mt-2 rounded-lg border border-indigo-400/60 bg-indigo-500/30 px-4 py-2 text-xs text-indigo-50 transition hover:bg-indigo-500/50 disabled:opacity-40"
          >
            {loading ? "Composing Melody…" : "Generate Melody"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-indigo-400/40 border-t-transparent" />
              <p>Shaping melodic line…</p>
            </div>
          )}

          {/* Output */}
          {!loading && audioUrl && (
            <div className="w-full space-y-3">
              <audio controls className="w-full">
                <source src={audioUrl} type="audio/mpeg" />
              </audio>

              <pre className="text-xs text-slate-200 whitespace-pre-line bg-white/5 border border-white/10 rounded-lg p-3">
                {notation}
              </pre>

              <div className="flex gap-2">
                <button className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-[0.7rem] text-slate-100 hover:bg-white/10 transition">
                  Download
                </button>
                <button
                  onClick={handleGenerate}
                  className="rounded-lg border border-indigo-400/60 bg-indigo-500/30 px-3 py-1.5 text-[0.7rem] text-indigo-50 hover:bg-indigo-500/50 transition"
                >
                  Re‑compose
                </button>
              </div>
            </div>
          )}

          {/* Empty State */}
          {!loading && !audioUrl && (
            <p className="text-xs text-slate-500 text-center px-4">
              Describe a melodic idea to generate your first motif.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}

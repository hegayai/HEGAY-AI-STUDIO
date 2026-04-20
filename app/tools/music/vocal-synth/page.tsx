"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function VocalSynthPage() {
  const [lyrics, setLyrics] = useState("");
  const [voice, setVoice] = useState("Female Soft");
  const [style, setStyle] = useState("Melodic");
  const [emotion, setEmotion] = useState("Warm");
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState("");

  async function handleGenerate() {
    if (!lyrics.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real vocal synthesis API
    await new Promise((r) => setTimeout(r, 1500));

    setAudioUrl("/placeholder-vocals.mp3");

    setLoading(false);
  }

  return (
    <EngineCore
      title="Vocal Synth"
      description="Create AI vocals, harmonies, and expressive voice textures."
      aura="from-indigo-500/20 to-purple-500/20"
      left={
        <EnginePanel>
          {/* Lyrics */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Lyrics
            </label>
            <textarea
              placeholder="Enter lyrics or vocal phrases..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 h-28 outline-none"
              value={lyrics}
              onChange={(e) => setLyrics(e.target.value)}
            />
          </div>

          {/* Voice Type */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Voice Type
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={voice}
              onChange={(e) => setVoice(e.target.value)}
            >
              <option>Female Soft</option>
              <option>Female Power</option>
              <option>Male Deep</option>
              <option>Male Smooth</option>
              <option>Choir</option>
              <option>Whisper Tone</option>
              <option>Robotic</option>
            </select>
          </div>

          {/* Style */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Vocal Style
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
            >
              <option>Melodic</option>
              <option>Spoken Word</option>
              <option>Chant</option>
              <option>Operatic</option>
              <option>Breathy</option>
              <option>Distorted</option>
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
              <option>Warm</option>
              <option>Sad</option>
              <option>Epic</option>
              <option>Dark</option>
              <option>Playful</option>
              <option>Spiritual</option>
            </select>
          </div>

          {/* Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !lyrics.trim()}
            className="mt-2 rounded-lg border border-purple-400/60 bg-purple-500/30 px-4 py-2 text-xs text-purple-50 transition hover:bg-purple-500/50 disabled:opacity-40"
          >
            {loading ? "Synthesizing Vocals…" : "Generate Vocals"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-purple-400/40 border-t-transparent" />
              <p>Generating vocal performance…</p>
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
                  className="rounded-lg border border-purple-400/60 bg-purple-500/30 px-3 py-1.5 text-[0.7rem] text-purple-50 hover:bg-purple-500/50 transition"
                >
                  Re‑synthesize
                </button>
              </div>
            </div>
          )}

          {/* Empty */}
          {!loading && !audioUrl && (
            <p className="text-xs text-slate-500 text-center px-4">
              Enter lyrics and choose a voice to generate your first vocal line.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}

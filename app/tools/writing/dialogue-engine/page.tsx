"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function DialogueEnginePage() {
  const [prompt, setPrompt] = useState("");
  const [characters, setCharacters] = useState("");
  const [tone, setTone] = useState("Neutral");
  const [style, setStyle] = useState("Cinematic");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function handleGenerate() {
    if (!prompt.trim() || !characters.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real dialogue generation API
    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated Dialogue (Mock)

Characters: ${characters}
Tone: ${tone}
Style: ${style}

${prompt}

This is placeholder dialogue representing the generated conversation.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Dialogue Engine"
      description="Generate character conversations, emotional exchanges, and script dialogue."
      aura="from-red-500/20 to-rose-500/20"
      left={
        <EnginePanel>
          {/* Characters */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Characters
            </label>
            <input
              type="text"
              placeholder="e.g., Ayo, Mira, The Captain..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 outline-none"
              value={characters}
              onChange={(e) => setCharacters(e.target.value)}
            />
          </div>

          {/* Prompt */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Dialogue Prompt
            </label>
            <textarea
              placeholder="Describe the scene, conflict, emotion, or situation..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 h-28 outline-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          {/* Tone */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Tone
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={tone}
              onChange={(e) => setTone(e.target.value)}
            >
              <option>Neutral</option>
              <option>Emotional</option>
              <option>Dark</option>
              <option>Humorous</option>
              <option>Epic</option>
              <option>Romantic</option>
              <option>Spiritual</option>
            </select>
          </div>

          {/* Style */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Style
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
            >
              <option>Cinematic</option>
              <option>Play Script</option>
              <option>Novelistic</option>
              <option>Minimalist</option>
              <option>Comedic</option>
              <option>Poetic</option>
            </select>
          </div>

          {/* Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim() || !characters.trim()}
            className="mt-3 rounded-lg border border-rose-400/60 bg-rose-500/30 px-4 py-2 text-xs text-rose-50 transition hover:bg-rose-500/50 disabled:opacity-40"
          >
            {loading ? "Generating Dialogue…" : "Generate Dialogue"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-rose-400/40 border-t-transparent" />
              <p>Shaping character voices…</p>
            </div>
          )}

          {/* Output */}
          {!loading && output && (
            <pre className="text-xs text-slate-200 whitespace-pre-line bg-white/5 border border-white/10 rounded-lg p-3">
              {output}
            </pre>
          )}

          {/* Empty */}
          {!loading && !output && (
            <p className="text-xs text-slate-500 text-center px-4">
              Enter characters and a scene prompt to generate dialogue.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}

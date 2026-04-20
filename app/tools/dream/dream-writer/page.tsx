"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function DreamWriterPage() {
  const [prompt, setPrompt] = useState("");
  const [tone, setTone] = useState("Surreal");
  const [length, setLength] = useState("Medium");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function handleGenerate() {
    if (!prompt.trim()) return;
    setLoading(true);

    await new Promise((r) => setTimeout(r, 1000));

    setResult(
      `A ${tone.toLowerCase()} dream of ${prompt.toLowerCase()}, written in a ${length.toLowerCase()} narrative.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Dream Writer"
      description="Generate surreal dream narratives, subconscious scripts, and emotional atmospheres."
      aura="from-indigo-500/20 to-blue-500/20"
      left={
        <EnginePanel>
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Dream Prompt
            </label>
            <textarea
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 h-24 outline-none"
              placeholder="Describe the dream essence..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
                Tone
              </label>
              <select
                className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
                value={tone}
                onChange={(e) => setTone(e.target.value)}
              >
                <option>Surreal</option>
                <option>Dark</option>
                <option>Whimsical</option>
                <option>Melancholic</option>
                <option>Cosmic</option>
              </select>
            </div>

            <div>
              <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
                Length
              </label>
              <select
                className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
                value={length}
                onChange={(e) => setLength(e.target.value)}
              >
                <option>Short</option>
                <option>Medium</option>
                <option>Long</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="rounded-lg border border-blue-400/60 bg-blue-500/30 px-4 py-2 text-xs text-blue-50"
          >
            {loading ? "Writing…" : "Generate Dream"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {loading && (
            <p className="text-xs text-slate-300">Weaving your dream…</p>
          )}

          {!loading && result && (
            <p className="text-xs text-slate-200 whitespace-pre-line">{result}</p>
          )}

          {!loading && !result && (
            <p className="text-xs text-slate-500">
              Describe a dream essence to begin.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}

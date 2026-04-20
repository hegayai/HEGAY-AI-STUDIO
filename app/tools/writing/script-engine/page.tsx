"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function ScriptEnginePage() {
  const [prompt, setPrompt] = useState("");
  const [format, setFormat] = useState("Screenplay");
  const [tone, setTone] = useState("Cinematic");
  const [length, setLength] = useState("Scene");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function handleGenerate() {
    if (!prompt.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real script generation API
    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated Script (Mock)

Format: ${format}
Tone: ${tone}
Length: ${length}

INT. SAMPLE LOCATION – NIGHT

This is placeholder screenplay text representing the generated script output.

CHARACTER
Dialogue line goes here.

ACTION LINE
More placeholder script content.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Script Engine"
      description="Write screenplays, episodes, formatted scenes, and cinematic scripts."
      aura="from-rose-500/20 to-pink-500/20"
      left={
        <EnginePanel>
          {/* Prompt */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Script Prompt
            </label>
            <textarea
              placeholder="Describe the scene, episode, or cinematic moment..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 h-28 outline-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          {/* Format */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Format
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={format}
              onChange={(e) => setFormat(e.target.value)}
            >
              <option>Screenplay</option>
              <option>TV Episode</option>
              <option>Short Film</option>
              <option>Stage Play</option>
              <option>Audio Drama</option>
            </select>
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
              <option>Cinematic</option>
              <option>Dark</option>
              <option>Comedic</option>
              <option>Romantic</option>
              <option>Epic</option>
              <option>Minimalist</option>
            </select>
          </div>

          {/* Length */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Length
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            >
              <option>Scene</option>
              <option>Short Sequence</option>
              <option>Full Episode</option>
              <option>Act</option>
            </select>
          </div>

          {/* Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="mt-3 rounded-lg border border-pink-400/60 bg-pink-500/30 px-4 py-2 text-xs text-pink-50 transition hover:bg-pink-500/50 disabled:opacity-40"
          >
            {loading ? "Formatting Script…" : "Generate Script"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-pink-400/40 border-t-transparent" />
              <p>Formatting screenplay structure…</p>
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
              Describe a scene or episode to generate a formatted script.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}

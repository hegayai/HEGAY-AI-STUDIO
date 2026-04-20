"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function WritingGeneratorPage() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("Cinematic");
  const [length, setLength] = useState("Medium");
  const [tone, setTone] = useState("Neutral");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function handleGenerate() {
    if (!prompt.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real writing generation API
    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
      `Generated Writing (Mock):

${prompt}

Style: ${style}
Tone: ${tone}
Length: ${length}

This is placeholder text representing the generated writing output.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Writing Generator"
      description="Generate prose, essays, articles, scenes, and narrative content."
      aura="from-amber-500/20 to-orange-500/20"
      left={
        <EnginePanel>
          {/* Prompt */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Writing Prompt
            </label>
            <textarea
              placeholder="Describe the topic, scene, idea, or narrative intent..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 h-28 outline-none"
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
              <option>Academic</option>
              <option>Poetic</option>
              <option>Journalistic</option>
              <option>Mythic</option>
              <option>Conversational</option>
            </select>
          </div>

          {/* Tone */}
          <div>
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
              <option>Playful</option>
              <option>Epic</option>
              <option>Spiritual</option>
            </select>
          </div>

          {/* Length */}
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

          {/* Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="mt-2 rounded-lg border border-orange-400/60 bg-orange-500/30 px-4 py-2 text-xs text-orange-50 transition hover:bg-orange-500/50 disabled:opacity-40"
          >
            {loading ? "Generating Writing…" : "Generate Writing"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-orange-400/40 border-t-transparent" />
              <p>Composing narrative structure…</p>
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
              Enter a writing prompt to generate narrative content.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}

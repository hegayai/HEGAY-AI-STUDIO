"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function MythGeneratorPage() {
  const [prompt, setPrompt] = useState("");
  const [mythType, setMythType] = useState("Origin Myth");
  const [tone, setTone] = useState("Epic");
  const [structure, setStructure] = useState("Three-Act Myth");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function handleGenerate() {
    if (!prompt.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real myth generation API
    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated Myth (Mock)

Myth Type: ${mythType}
Tone: ${tone}
Structure: ${structure}

Prompt:
${prompt}

This is placeholder metadata representing the generated myth, legend, or epic narrative.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Myth Generator"
      description="Generate myths, legends, origin stories, and cultural epics."
      aura="from-fuchsia-500/20 to-pink-500/20"
      left={
        <EnginePanel>
          {/* Prompt */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Myth Description
            </label>
            <textarea
              placeholder="Describe the myth: creation story, hero’s journey, ancestral legend, cosmic battle..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 h-28 outline-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          {/* Myth Type */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Myth Type
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={mythType}
              onChange={(e) => setMythType(e.target.value)}
            >
              <option>Origin Myth</option>
              <option>Heroic Epic</option>
              <option>Ancestral Legend</option>
              <option>Cosmic Parable</option>
              <option>Mythic Prophecy</option>
              <option>Cycle of Ages</option>
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
              <option>Epic</option>
              <option>Mystical</option>
              <option>Dark</option>
              <option>Heroic</option>
              <option>Tragic</option>
              <option>Spiritual</option>
            </select>
          </div>

          {/* Structure */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Narrative Structure
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={structure}
              onChange={(e) => setStructure(e.target.value)}
            >
              <option>Three-Act Myth</option>
              <option>Hero’s Journey</option>
              <option>Prophetic Fragment</option>
              <option>Cycle of Ages</option>
              <option>Oral Tradition Style</option>
              <option>Codex Entry</option>
            </select>
          </div>

          {/* Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="mt-3 rounded-lg border border-pink-400/60 bg-pink-500/30 px-4 py-2 text-xs text-pink-50 transition hover:bg-pink-500/50 disabled:opacity-40"
          >
            {loading ? "Forging Myth…" : "Generate Myth"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-pink-400/40 border-t-transparent" />
              <p>Forging cultural legend…</p>
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
              Describe a myth to generate its epic blueprint.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}

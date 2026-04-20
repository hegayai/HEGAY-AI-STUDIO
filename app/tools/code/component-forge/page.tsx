"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function ComponentForgePage() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("Tailwind");
  const [type, setType] = useState("Component");
  const [framework, setFramework] = useState("React");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function handleGenerate() {
    if (!prompt.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real component generation API
    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated Component (Mock)

Framework: ${framework}
Style: ${style}
Type: ${type}

Prompt:
${prompt}

This is placeholder UI component code representing the generated output.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Component Forge"
      description="Generate UI components, layouts, widgets, and reusable elements."
      aura="from-teal-500/20 to-emerald-500/20"
      left={
        <EnginePanel>
          {/* Prompt */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Component Description
            </label>
            <textarea
              placeholder="Describe the UI component, layout, or widget you want to generate..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 h-28 outline-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          {/* Framework */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Framework
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={framework}
              onChange={(e) => setFramework(e.target.value)}
            >
              <option>React</option>
              <option>Next.js</option>
              <option>Vue</option>
              <option>Svelte</option>
            </select>
          </div>

          {/* Style */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Styling System
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
            >
              <option>Tailwind</option>
              <option>CSS Modules</option>
              <option>Styled Components</option>
              <option>Chakra UI</option>
            </select>
          </div>

          {/* Type */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Output Type
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option>Component</option>
              <option>Layout</option>
              <option>Widget</option>
              <option>UI Module</option>
            </select>
          </div>

          {/* Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="mt-3 rounded-lg border border-emerald-400/60 bg-emerald-500/30 px-4 py-2 text-xs text-emerald-50 transition hover:bg-emerald-500/50 disabled:opacity-40"
          >
            {loading ? "Forging Component…" : "Generate Component"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-emerald-400/40 border-t-transparent" />
              <p>Forging UI structure…</p>
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
              Describe a UI component to generate its code.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}

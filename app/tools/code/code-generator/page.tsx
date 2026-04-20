"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function CodeGeneratorPage() {
  const [prompt, setPrompt] = useState("");
  const [language, setLanguage] = useState("TypeScript");
  const [framework, setFramework] = useState("Next.js");
  const [depth, setDepth] = useState("Module");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function handleGenerate() {
    if (!prompt.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real code generation API
    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated Code (Mock)

Language: ${language}
Framework: ${framework}
Depth: ${depth}

Prompt:
${prompt}

This is placeholder code representing the generated output.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Code Generator"
      description="Generate frontend, backend, utilities, scripts, and full code modules."
      aura="from-blue-500/20 to-cyan-500/20"
      left={
        <EnginePanel>
          {/* Prompt */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Code Prompt
            </label>
            <textarea
              placeholder="Describe the component, API, module, or system you want to generate..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 h-28 outline-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          {/* Language */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Language
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option>TypeScript</option>
              <option>JavaScript</option>
              <option>Python</option>
              <option>Go</option>
              <option>Rust</option>
            </select>
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
              <option>Next.js</option>
              <option>Express</option>
              <option>FastAPI</option>
              <option>React</option>
              <option>Node.js</option>
            </select>
          </div>

          {/* Depth */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Output Depth
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={depth}
              onChange={(e) => setDepth(e.target.value)}
            >
              <option>Snippet</option>
              <option>Component</option>
              <option>Module</option>
              <option>Full Feature</option>
              <option>System</option>
            </select>
          </div>

          {/* Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="mt-3 rounded-lg border border-cyan-400/60 bg-cyan-500/30 px-4 py-2 text-xs text-cyan-50 transition hover:bg-cyan-500/50 disabled:opacity-40"
          >
            {loading ? "Generating Code…" : "Generate Code"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-cyan-400/40 border-t-transparent" />
              <p>Compiling module…</p>
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
              Describe the code you want to generate.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}

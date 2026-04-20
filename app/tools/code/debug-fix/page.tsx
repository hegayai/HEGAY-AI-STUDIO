"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function DebugFixPage() {
  const [errorText, setErrorText] = useState("");
  const [codeSnippet, setCodeSnippet] = useState("");
  const [context, setContext] = useState("");
  const [focus, setFocus] = useState("Bug Fix");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function handleAnalyze() {
    if (!errorText.trim() && !codeSnippet.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real debug/fix analysis API
    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Debug & Fix Analysis (Mock)

Focus: ${focus}

Error / Context:
${errorText || "(no error text provided)"}

Code Snippet:
${codeSnippet || "(no code snippet provided)"}

This is placeholder analysis and suggested fix for the provided issue.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Debug & Fix Engine"
      description="Analyze, debug, and repair code, errors, and broken logic."
      aura="from-lime-500/20 to-yellow-500/20"
      left={
        <EnginePanel>
          {/* Error Text */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Error Message / Symptom
            </label>
            <textarea
              placeholder="Paste stack trace, error message, or describe what is breaking..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 h-24 outline-none"
              value={errorText}
              onChange={(e) => setErrorText(e.target.value)}
            />
          </div>

          {/* Code Snippet */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Code Snippet (optional)
            </label>
            <textarea
              placeholder="Paste the relevant code block here..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-[0.7rem] text-slate-100 h-28 font-mono outline-none"
              value={codeSnippet}
              onChange={(e) => setCodeSnippet(e.target.value)}
            />
          </div>

          {/* Context */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Context (optional)
            </label>
            <textarea
              placeholder="What were you trying to do? Which page, route, or feature?"
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 h-20 outline-none"
              value={context}
              onChange={(e) => setContext(e.target.value)}
            />
          </div>

          {/* Focus */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Focus
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={focus}
              onChange={(e) => setFocus(e.target.value)}
            >
              <option>Bug Fix</option>
              <option>Refactor</option>
              <option>Performance</option>
              <option>Type Safety</option>
              <option>Best Practices</option>
            </select>
          </div>

          {/* Button */}
          <button
            onClick={handleAnalyze}
            disabled={loading || (!errorText.trim() && !codeSnippet.trim())}
            className="mt-3 rounded-lg border border-yellow-400/60 bg-yellow-500/30 px-4 py-2 text-xs text-yellow-50 transition hover:bg-yellow-500/50 disabled:opacity-40"
          >
            {loading ? "Analyzing Issue…" : "Analyze & Suggest Fix"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-yellow-400/40 border-t-transparent" />
              <p>Reading errors and mapping a fix path…</p>
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
              Paste an error or code snippet to receive a debug and fix suggestion.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}

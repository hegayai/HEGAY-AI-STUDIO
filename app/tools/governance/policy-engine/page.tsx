"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function PolicyEnginePage() {
  const [prompt, setPrompt] = useState("");
  const [domain, setDomain] = useState("Social Policy");
  const [tone, setTone] = useState("Balanced");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function generate() {
    if (!prompt.trim()) return;
    setLoading(true);

    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated Policy (Mock)

Domain: ${domain}
Tone: ${tone}

Prompt:
${prompt}

This is placeholder metadata representing policies and regulations.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Policy Engine"
      description="Generate policies, regulations, and societal rules."
      aura="from-violet-500/20 to-fuchsia-500/20"
      left={
        <EnginePanel>
          <textarea
            placeholder="Describe the policy..."
            className="w-full h-28 bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <select
            className="mt-3 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          >
            <option>Social Policy</option>
            <option>Economic Policy</option>
            <option>Environmental Policy</option>
            <option>Security Policy</option>
            <option>Technological Policy</option>
          </select>

          <select
            className="mt-3 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          >
            <option>Balanced</option>
            <option>Strict</option>
            <option>Progressive</option>
            <option>Traditional</option>
          </select>

          <button
            onClick={generate}
            disabled={loading || !prompt.trim()}
            className="mt-3 px-4 py-2 text-xs rounded-lg bg-fuchsia-500/40 border border-fuchsia-400/40 text-fuchsia-100 disabled:opacity-40"
          >
            {loading ? "Generating…" : "Generate Policy"}
          </button>
        </EnginePanel>
      }
      right={<EngineOutput>{output}</EngineOutput>}
    />
  );
}

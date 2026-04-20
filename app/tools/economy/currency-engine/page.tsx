"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function CurrencyEnginePage() {
  const [prompt, setPrompt] = useState("");
  const [type, setType] = useState("Fiat");
  const [tone, setTone] = useState("Neutral");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function generate() {
    if (!prompt.trim()) return;
    setLoading(true);

    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated Currency (Mock)

Type: ${type}
Tone: ${tone}

Prompt:
${prompt}

This is placeholder metadata representing currency systems and value frameworks.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Currency Engine"
      description="Generate currencies, monetary systems, and value frameworks."
      aura="from-green-500/20 to-lime-500/20"
      left={
        <EnginePanel>
          <textarea
            placeholder="Describe the currency..."
            className="w-full h-28 bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <select
            className="mt-3 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option>Fiat</option>
            <option>Commodity‑Backed</option>
            <option>Digital</option>
            <option>Energy‑Based</option>
            <option>Barter Token</option>
          </select>

          <select
            className="mt-3 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          >
            <option>Neutral</option>
            <option>Stable</option>
            <option>Volatile</option>
            <option>Heroic</option>
          </select>

          <button
            onClick={generate}
            disabled={loading || !prompt.trim()}
            className="mt-3 px-4 py-2 text-xs rounded-lg bg-lime-500/40 border border-lime-400/40 text-lime-100 disabled:opacity-40"
          >
            {loading ? "Generating…" : "Generate Currency"}
          </button>
        </EnginePanel>
      }
      right={<EngineOutput>{output}</EngineOutput>}
    />
  );
}

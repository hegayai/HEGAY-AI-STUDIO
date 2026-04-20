"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function ArtifactEnginePage() {
  const [prompt, setPrompt] = useState("");
  const [type, setType] = useState("Relic");
  const [tone, setTone] = useState("Cultural");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function generate() {
    if (!prompt.trim()) return;
    setLoading(true);

    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated Artifact (Mock)

Type: ${type}
Tone: ${tone}

Prompt:
${prompt}

This is placeholder metadata representing cultural artifacts and relics.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Artifact Engine"
      description="Generate cultural artifacts, relics, tools, and symbolic objects."
      aura="from-pink-500/20 to-purple-500/20"
      left={
        <EnginePanel>
          <textarea
            placeholder="Describe the artifact..."
            className="w-full h-28 bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white"

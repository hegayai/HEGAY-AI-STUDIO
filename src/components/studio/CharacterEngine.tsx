"use client";

import { useState } from "react";

export default function CharacterEngine() {
  const [name, setName] = useState("");
  const [archetype, setArchetype] = useState("hero");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState<string>("");

  const generate = async () => {
    setLoading(true);
    setOutput("");

    const res = await fetch("/api/characters/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        archetype,
        prompt,
      }),
    });

    const data = await res.json();
    setOutput(data.text || "");
    setLoading(false);
  };

  return (
    <div className="glass-panel rounded-2xl p-6 border border-[rgba(255,255,255,0.06)] flex flex-col gap-6">
      {/* NAME */}
      <div className="flex flex-col gap-1 text-[12px]">
        <span className="text-[var(--diamond-white)]/60">Character Name</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Optional — leave empty for auto‑generated name"
          className="
            w-full rounded-xl p-3
            bg-[rgba(255,255,255,0.05)]
            border border-[rgba(255,255,255,0.08)]
            text-[13px] text-[var(--platinum)]
            outline-none
          "
        />
      </div>

      {/* ARCHETYPE */}
      <div className="flex flex-col gap-1 text-[12px]">
        <span className="text-[var(--diamond-white)]/60">Archetype</span>
        <select
          value={archetype}
          onChange={(e) => setArchetype(e.target.value)}
          className="
            bg-[rgba(255,255,255,0.05)]
            border border-[rgba(255,255,255,0.08)]
            rounded-xl p-2 text-[13px]
          "
        >
          <option value="hero">Hero</option>
          <option value="villain">Villain</option>
          <option value="mentor">Mentor</option>
          <option value="trickster">Trickster</option>
          <option value="guardian">Guardian</option>
          <option value="lover">Lover</option>
          <option value="sage">Sage</option>
          <option value="warrior">Warrior</option>
        </select>
      </div>

      {/* PROMPT */}
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe personality, appearance, powers, culture, mythic lineage, or role in the story…"
        className="
          w-full h-32 rounded-xl p-4
          bg-[rgba(255,255,255,0.05)]
          border border-[rgba(255,255,255,0.08)]
          text-[13px] text-[var(--platinum)]
          outline-none
        "
      />

      {/* GENERATE BUTTON */}
      <button
        onClick={generate}
        disabled={loading}
        className="
          px-5 py-3 rounded-xl
          bg-[var(--cosmic-blue)]
          text-black text-[13px]
          shadow-[0_0_20px_var(--cosmic-blue)]
          transition-all
          hover:scale-[1.03]
          disabled:opacity-50 disabled:hover:scale-100
        "
      >
        {loading ? "Generating…" : "Generate Character"}
      </button>

      {/* OUTPUT */}
      {output && (
        <div
          className="
            mt-4 p-4 rounded-2xl
            bg-[rgba(0,0,0,0.55)]
            border border-[rgba(255,255,255,0.08)]
            text-[13px]
            whitespace-pre-wrap
          "
        >
          {output}
        </div>
      )}
    </div>
  );
}

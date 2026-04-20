"use client";

import { useState } from "react";

type WriterMode = "copy" | "script" | "lore";

export default function WriterEngine() {
  const [mode, setMode] = useState<WriterMode>("copy");
  const [prompt, setPrompt] = useState("");
  const [tone, setTone] = useState("neutral");
  const [length, setLength] = useState("medium");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState<string>("");

  const generate = async () => {
    setLoading(true);
    setOutput("");

    const res = await fetch("/api/writer/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mode,
        prompt,
        tone,
        length,
      }),
    });

    const data = await res.json();
    setOutput(data.text || "");
    setLoading(false);
  };

  return (
    <div
      className="
        glass-panel rounded-2xl p-6
        border border-[rgba(255,255,255,0.06)]
        flex flex-col gap-6
      "
    >
      {/* MODE TABS */}
      <div className="flex gap-3 text-[12px]">
        <ModeTab
          label="Copywriting"
          active={mode === "copy"}
          onClick={() => setMode("copy")}
        />
        <ModeTab
          label="Script"
          active={mode === "script"}
          onClick={() => setMode("script")}
        />
        <ModeTab
          label="Lore / Worldbuilding"
          active={mode === "lore"}
          onClick={() => setMode("lore")}
        />
      </div>

      {/* PROMPT */}
      <div className="flex flex-col gap-2">
        <span className="text-[11px] text-[var(--diamond-white)]/65">
          Prompt
        </span>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder={
            mode === "copy"
              ? "Describe the product, audience, and goal for the copy…"
              : mode === "script"
              ? "Describe the scene, characters, and tone for the script…"
              : "Describe the world, pantheon, and mythic context you want to expand…"
          }
          className="
            w-full h-32 rounded-xl p-4
            bg-[rgba(255,255,255,0.05)]
            border border-[rgba(255,255,255,0.08)]
            text-[13px] text-[var(--platinum)]
            outline-none
          "
        />
      </div>

      {/* CONTROLS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[12px]">
        {/* TONE */}
        <div className="flex flex-col gap-1">
          <span className="text-[var(--diamond-white)]/60">Tone</span>
          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="
              bg-[rgba(255,255,255,0.05)]
              border border-[rgba(255,255,255,0.08)]
              rounded-xl p-2 text-[13px]
            "
          >
            <option value="neutral">Neutral</option>
            <option value="cinematic">Cinematic</option>
            <option value="mythic">Mythic</option>
            <option value="playful">Playful</option>
            <option value="formal">Formal</option>
            <option value="urgent">Urgent</option>
          </select>
        </div>

        {/* LENGTH */}
        <div className="flex flex-col gap-1">
          <span className="text-[var(--diamond-white)]/60">Length</span>
          <select
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="
              bg-[rgba(255,255,255,0.05)]
              border border-[rgba(255,255,255,0.08)]
              rounded-xl p-2 text-[13px]
            "
          >
            <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="long">Long</option>
          </select>
        </div>
      </div>

      {/* GENERATE BUTTON */}
      <button
        onClick={generate}
        disabled={loading || !prompt.trim()}
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
        {loading ? "Generating…" : "Generate Writing"}
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

/* ---------------------------------------------------------
   MODE TAB
   --------------------------------------------------------- */
function ModeTab({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-xl
        border text-[12px]
        transition
        ${
          active
            ? "bg-[rgba(255,255,255,0.12)] border-[var(--cosmic-blue)] text-[var(--platinum)]"
            : "bg-[rgba(255,255,255,0.04)] border-[rgba(255,255,255,0.08)] text-[var(--diamond-white)]/60"
        }
      `}
    >
      {label}
    </button>
  );
}

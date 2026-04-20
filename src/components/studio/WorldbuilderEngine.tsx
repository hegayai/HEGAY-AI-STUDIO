"use client";

import { useState } from "react";

export default function WorldbuilderEngine() {
  const [worldName, setWorldName] = useState("");
  const [genre, setGenre] = useState("fantasy");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState<string>("");

  const generate = async () => {
    setLoading(true);
    setOutput("");

    const res = await fetch("/api/worlds/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        worldName,
        genre,
        prompt,
      }),
    });

    const data = await res.json();
    setOutput(data.text || "");
    setLoading(false);
  };

  return (
    <div className="glass-panel rounded-2xl p-6 border border-[rgba(255,255,255,0.06)] flex flex-col gap-6">
      {/* WORLD NAME */}
      <div className="flex flex-col gap-1 text-[12px]">
        <span className="text-[var(--diamond-white)]/60">World Name</span>
        <input
          value={worldName}
          onChange={(e) => setWorldName(e.target.value)}
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

      {/* GENRE */}
      <div className="flex flex-col gap-1 text-[12px]">
        <span className="text-[var(--diamond-white)]/60">Genre</span>
        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="
            bg-[rgba(255,255,255,0.05)]
            border border-[rgba(255,255,255,0.08)]
            rounded-xl p-2 text-[13px]
          "
        >
          <option value="fantasy">Fantasy</option>
          <option value="sci-fi">Sci‑Fi</option>
          <option value="afrofuturism">Afrofuturism</option>
          <option value="mythic">Mythic</option>
          <option value="post-apocalyptic">Post‑Apocalyptic</option>
          <option value="historical">Historical</option>
        </select>
      </div>

      {/* PROMPT */}
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe geography, cultures, magic, technology, conflicts, pantheon, or world tone…"
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
        {loading ? "Generating…" : "Generate World"}
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

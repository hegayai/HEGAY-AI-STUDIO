"use client";

import { useState } from "react";

export default function AdsEngine() {
  const [brand, setBrand] = useState("");
  const [format, setFormat] = useState("hook");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState<string>("");

  const generate = async () => {
    setLoading(true);
    setOutput("");

    const res = await fetch("/api/ads/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        brand,
        format,
        prompt,
      }),
    });

    const data = await res.json();
    setOutput(data.text || "");
    setLoading(false);
  };

  return (
    <div className="glass-panel rounded-2xl p-6 border border-[rgba(255,255,255,0.06)] flex flex-col gap-6">
      {/* BRAND */}
      <div className="flex flex-col gap-1 text-[12px]">
        <span className="text-[var(--diamond-white)]/60">Brand</span>
        <input
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          placeholder="Optional — leave empty for generic brand voice"
          className="
            w-full rounded-xl p-3
            bg-[rgba(255,255,255,0.05)]
            border border-[rgba(255,255,255,0.08)]
            text-[13px] text-[var(--platinum)]
            outline-none
          "
        />
      </div>

      {/* FORMAT */}
      <div className="flex flex-col gap-1 text-[12px]">
        <span className="text-[var(--diamond-white)]/60">Ad Format</span>
        <select
          value={format}
          onChange={(e) => setFormat(e.target.value)}
          className="
            bg-[rgba(255,255,255,0.05)]
            border border-[rgba(255,255,255,0.08)]
            rounded-xl p-2 text-[13px]
          "
        >
          <option value="hook">Hook</option>
          <option value="tagline">Tagline</option>
          <option value="script-15">15‑Second Script</option>
          <option value="script-30">30‑Second Script</option>
          <option value="campaign">Campaign Concept</option>
          <option value="social">Social Ad</option>
          <option value="radio">Radio Ad</option>
          <option value="youtube">YouTube Ad</option>
        </select>
      </div>

      {/* PROMPT */}
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe the product, audience, tone, emotion, or message…"
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
        {loading ? "Generating…" : "Generate Ad"}
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

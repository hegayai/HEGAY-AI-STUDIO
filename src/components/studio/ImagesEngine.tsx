"use client";

import { useState } from "react";

export default function ImagesEngine() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("realistic");
  const [loading, setLoading] = useState(false);
  const [imageURL, setImageURL] = useState<string | null>(null);

  const generate = async () => {
    setLoading(true);
    setImageURL(null);

    const res = await fetch("/api/images/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt,
        style,
      }),
    });

    const data = await res.json();
    setImageURL(data.url);
    setLoading(false);
  };

  return (
    <div className="glass-panel rounded-2xl p-6 border border-[rgba(255,255,255,0.06)] flex flex-col gap-6">
      {/* PROMPT */}
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe the image, scene, concept art, or visual idea…"
        className="
          w-full h-32 rounded-xl p-4
          bg-[rgba(255,255,255,0.05)]
          border border-[rgba(255,255,255,0.08)]
          text-[13px] text-[var(--platinum)]
          outline-none
        "
      />

      {/* STYLE */}
      <div className="flex flex-col gap-1 text-[12px]">
        <span className="text-[var(--diamond-white)]/60">Style</span>
        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          className="
            bg-[rgba(255,255,255,0.05)]
            border border-[rgba(255,255,255,0.08)]
            rounded-xl p-2 text-[13px]
          "
        >
          <option value="realistic">Realistic</option>
          <option value="cinematic">Cinematic</option>
          <option value="anime">Anime</option>
          <option value="digital-art">Digital Art</option>
          <option value="watercolor">Watercolor</option>
          <option value="sketch">Sketch</option>
          <option value="afrofuturism">Afrofuturism</option>
        </select>
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
        {loading ? "Generating…" : "Generate Image"}
      </button>

      {/* RESULT */}
      {imageURL && (
        <img
          src={imageURL}
          alt="Generated"
          className="w-full rounded-xl mt-4 shadow-[0_0_40px_rgba(0,0,0,0.6)]"
        />
      )}
    </div>
  );
}

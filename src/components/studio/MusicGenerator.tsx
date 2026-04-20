"use client";

import { useState } from "react";

export default function MusicGenerator() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("cinematic");
  const [duration, setDuration] = useState("30");
  const [loading, setLoading] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);

  const generate = async () => {
    setLoading(true);
    setAudioURL(null);

    const form = new FormData();
    form.append("prompt", prompt);
    form.append("style", style);
    form.append("duration", duration);

    const res = await fetch("/api/music/generate", {
      method: "POST",
      body: form,
    });

    const data = await res.json();
    setAudioURL(data.url);
    setLoading(false);
  };

  return (
    <div className="glass-panel rounded-2xl p-6 border border-[rgba(255,255,255,0.06)] flex flex-col gap-6">
      {/* PROMPT */}
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe the mood, genre, instruments, or cinematic emotion…"
        className="
          w-full h-28 rounded-xl p-4
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
          <option value="cinematic">Cinematic</option>
          <option value="ambient">Ambient</option>
          <option value="afrobeat">Afrobeat</option>
          <option value="trap">Trap</option>
          <option value="orchestral">Orchestral</option>
          <option value="electronic">Electronic</option>
        </select>
      </div>

      {/* DURATION */}
      <div className="flex flex-col gap-1 text-[12px]">
        <span className="text-[var(--diamond-white)]/60">Duration</span>
        <select
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="
            bg-[rgba(255,255,255,0.05)]
            border border-[rgba(255,255,255,0.08)]
            rounded-xl p-2 text-[13px]
          "
        >
          <option value="15">15 seconds</option>
          <option value="30">30 seconds</option>
          <option value="60">60 seconds</option>
        </select>
      </div>

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
        "
      >
        {loading ? "Generating…" : "Generate Music"}
      </button>

      {/* RESULT */}
      {audioURL && (
        <audio
          controls
          src={audioURL}
          className="w-full mt-4 rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.6)]"
        />
      )}
    </div>
  );
}

"use client";

import { useState } from "react";

export default function VideoGenerator() {
  const [mode, setMode] = useState<"t2v" | "i2v" | "v2v">("t2v");
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [video, setVideo] = useState<File | null>(null);
  const [duration, setDuration] = useState("6");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const generate = async () => {
    setLoading(true);
    setResult(null);

    const form = new FormData();
    form.append("mode", mode);
    form.append("prompt", prompt);
    form.append("duration", duration);

    if (image) form.append("image", image);
    if (video) form.append("video", video);

    const res = await fetch("/api/video/generate", {
      method: "POST",
      body: form,
    });

    const data = await res.json();
    setResult(data.url);
    setLoading(false);
  };

  return (
    <div className="glass-panel rounded-2xl p-6 border border-[rgba(255,255,255,0.06)] flex flex-col gap-6">
      {/* MODE SELECTOR */}
      <div className="flex gap-3 text-[12px]">
        <ModeTab label="Text → Video" active={mode === "t2v"} onClick={() => setMode("t2v")} />
        <ModeTab label="Image → Video" active={mode === "i2v"} onClick={() => setMode("i2v")} />
        <ModeTab label="Video → Video" active={mode === "v2v"} onClick={() => setMode("v2v")} />
      </div>

      {/* PROMPT */}
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe the scene, motion, style, or cinematic moment…"
        className="
          w-full h-28 rounded-xl p-4
          bg-[rgba(255,255,255,0.05)]
          border border-[rgba(255,255,255,0.08)]
          text-[13px] text-[var(--platinum)]
          outline-none
        "
      />

      {/* INPUTS */}
      {mode === "i2v" && (
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="text-[12px] text-[var(--diamond-white)]/70"
        />
      )}

      {mode === "v2v" && (
        <input
          type="file"
          accept="video/*"
          onChange={(e) => setVideo(e.target.files?.[0] || null)}
          className="text-[12px] text-[var(--diamond-white)]/70"
        />
      )}

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
          <option value="6">6 seconds</option>
          <option value="10">10 seconds</option>
          <option value="15">15 seconds</option>
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
        {loading ? "Generating…" : "Generate Video"}
      </button>

      {/* RESULT */}
      {result && (
        <video
          src={result}
          controls
          className="w-full rounded-xl mt-4 shadow-[0_0_40px_rgba(0,0,0,0.6)]"
        />
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

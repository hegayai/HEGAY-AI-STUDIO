"use client";

import { useState } from "react";

export default function SubtitlesEngine() {
  const [mode, setMode] = useState<"video" | "audio">("video");
  const [file, setFile] = useState<File | null>(null);
  const [language, setLanguage] = useState("en");
  const [loading, setLoading] = useState(false);
  const [subtitles, setSubtitles] = useState<string>("");

  const generate = async () => {
    if (!file) return;

    setLoading(true);
    setSubtitles("");

    const form = new FormData();
    form.append("mode", mode);
    form.append("language", language);
    form.append("file", file);

    const res = await fetch("/api/subtitles/generate", {
      method: "POST",
      body: form,
    });

    const data = await res.json();
    setSubtitles(data.text || "");
    setLoading(false);
  };

  return (
    <div className="glass-panel rounded-2xl p-6 border border-[rgba(255,255,255,0.06)] flex flex-col gap-6">
      {/* MODE SELECTOR */}
      <div className="flex gap-3 text-[12px]">
        <ModeTab label="Video → Subtitles" active={mode === "video"} onClick={() => setMode("video")} />
        <ModeTab label="Audio → Subtitles" active={mode === "audio"} onClick={() => setMode("audio")} />
      </div>

      {/* FILE INPUT */}
      <div className="flex flex-col gap-2 text-[12px]">
        <span className="text-[var(--diamond-white)]/60">Upload {mode === "video" ? "Video" : "Audio"}</span>
        <input
          type="file"
          accept={mode === "video" ? "video/*" : "audio/*"}
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="text-[var(--diamond-white)]/70"
        />
      </div>

      {/* LANGUAGE */}
      <div className="flex flex-col gap-1 text-[12px]">
        <span className="text-[var(--diamond-white)]/60">Language</span>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="
            bg-[rgba(255,255,255,0.05)]
            border border-[rgba(255,255,255,0.08)]
            rounded-xl p-2 text-[13px]
          "
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="pt">Portuguese</option>
          <option value="sw">Swahili</option>
          <option value="yo">Yoruba</option>
        </select>
      </div>

      {/* GENERATE BUTTON */}
      <button
        onClick={generate}
        disabled={loading || !file}
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
        {loading ? "Generating…" : "Generate Subtitles"}
      </button>

      {/* RESULT */}
      {subtitles && (
        <div
          className="
            mt-4 p-4 rounded-2xl
            bg-[rgba(0,0,0,0.55)]
            border border-[rgba(255,255,255,0.08)]
            text-[13px]
            whitespace-pre-wrap
          "
        >
          {subtitles}
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

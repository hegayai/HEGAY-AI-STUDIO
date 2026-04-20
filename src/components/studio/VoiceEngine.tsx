"use client";

import { useState } from "react";

export default function VoiceEngine() {
  const [prompt, setPrompt] = useState("");
  const [voice, setVoice] = useState("default");
  const [emotion, setEmotion] = useState("neutral");
  const [loading, setLoading] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);

  const generate = async () => {
    setLoading(true);
    setAudioURL(null);

    const res = await fetch("/api/voice/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt,
        voice,
        emotion,
      }),
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
        placeholder="Enter the script, narration, dialogue, or voice line…"
        className="
          w-full h-32 rounded-xl p-4
          bg-[rgba(255,255,255,0.05)]
          border border-[rgba(255,255,255,0.08)]
          text-[13px] text-[var(--platinum)]
          outline-none
        "
      />

      {/* VOICE SELECT */}
      <div className="flex flex-col gap-1 text-[12px]">
        <span className="text-[var(--diamond-white)]/60">Voice</span>
        <select
          value={voice}
          onChange={(e) => setVoice(e.target.value)}
          className="
            bg-[rgba(255,255,255,0.05)]
            border border-[rgba(255,255,255,0.08)]
            rounded-xl p-2 text-[13px]
          "
        >
          <option value="default">Default</option>
          <option value="warm">Warm</option>
          <option value="deep">Deep</option>
          <option value="bright">Bright</option>
          <option value="african">African Accent</option>
          <option value="female-soft">Female Soft</option>
          <option value="male-strong">Male Strong</option>
        </select>
      </div>

      {/* EMOTION */}
      <div className="flex flex-col gap-1 text-[12px]">
        <span className="text-[var(--diamond-white)]/60">Emotion</span>
        <select
          value={emotion}
          onChange={(e) => setEmotion(e.target.value)}
          className="
            bg-[rgba(255,255,255,0.05)]
            border border-[rgba(255,255,255,0.08)]
            rounded-xl p-2 text-[13px]
          "
        >
          <option value="neutral">Neutral</option>
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="angry">Angry</option>
          <option value="dramatic">Dramatic</option>
          <option value="whisper">Whisper</option>
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
        {loading ? "Generating…" : "Generate Voice"}
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

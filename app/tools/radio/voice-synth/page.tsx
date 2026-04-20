"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function VoiceSynthPage() {
  const [text, setText] = useState("");
  const [voice, setVoice] = useState("Warm");
  const [pitch, setPitch] = useState("Normal");
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState("");

  async function handleGenerate() {
    if (!text.trim()) return;
    setLoading(true);

    await new Promise((r) => setTimeout(r, 1000));

    setAudioUrl("/placeholder-voice.mp3");

    setLoading(false);
  }

  return (
    <EngineCore
      title="Voice Synth"
      description="Generate voices, tones, and vocal textures from text."
      aura="from-amber-500/20 to-red-500/20"
      left={
        <EnginePanel>
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Text to Speak
            </label>
            <textarea
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 h-24 outline-none"
              placeholder="Type something to synthesize..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
                Voice
              </label>
              <select
                className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
                value={voice}
                onChange={(e) => setVoice(e.target.value)}
              >
                <option>Warm</option>
                <option>Deep</option>
                <option>Soft</option>
                <option>Robotic</option>
                <option>Whisper</option>
              </select>
            </div>

            <div>
              <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
                Pitch
              </label>
              <select
                className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
                value={pitch}
                onChange={(e) => setPitch(e.target.value)}
              >
                <option>Low</option>
                <option>Normal</option>
                <option>High</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading || !text.trim()}
            className="rounded-lg border border-red-400/60 bg-red-500/30 px-4 py-2 text-xs text-red-50"
          >
            {loading ? "Synthesizing…" : "Generate Voice"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {loading && (
            <p className="text-xs text-slate-300">Synthesizing voice…</p>
          )}

          {!loading && audioUrl && (
            <audio controls className="w-full">
              <source src={audioUrl} type="audio/mpeg" />
            </audio>
          )}

          {!loading && !audioUrl && (
            <p className="text-xs text-slate-500">
              Enter text to synthesize a voice.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}

"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function ToneEnginePage() {
  const [inputText, setInputText] = useState("");
  const [tone, setTone] = useState("Cinematic");
  const [style, setStyle] = useState("Neutral");
  const [intensity, setIntensity] = useState(50);
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function handleTransform() {
    if (!inputText.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real tone transformation API
    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Transformed Text (Mock)

Tone: ${tone}
Style: ${style}
Intensity: ${intensity}%

${inputText}

This is placeholder text representing the transformed writing output.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Tone Engine"
      description="Rewrite text into emotional tones, styles, voices, and narrative identities."
      aura="from-pink-500/20 to-purple-500/20"
      left={
        <EnginePanel>
          {/* Input Text */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Input Text
            </label>
            <textarea
              placeholder="Paste or write text to transform..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 h-32 outline-none"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>

          {/* Tone */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Tone
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={tone}
              onChange={(e) => setTone(e.target.value)}
            >
              <option>Cinematic</option>
              <option>Poetic</option>
              <option>Dark</option>
              <option>Epic</option>
              <option>Playful</option>
              <option>Academic</option>
              <option>Mythic</option>
              <option>Spiritual</option>
            </select>
          </div>

          {/* Style */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Style
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
            >
              <option>Neutral</option>
              <option>Formal</option>
              <option>Casual</option>
              <option>Journalistic</option>
              <option>Mythic</option>
              <option>Minimalist</option>
              <option>Verbose</option>
            </select>
          </div>

          {/* Intensity */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Intensity ({intensity}%)
            </label>
            <input
              type="range"
              min={0}
              max={100}
              value={intensity}
              onChange={(e) => setIntensity(Number(e.target.value))}
              className="mt-1 w-full"
            />
          </div>

          {/* Button */}
          <button
            onClick={handleTransform}
            disabled={loading || !inputText.trim()}
            className="mt-3 rounded-lg border border-purple-400/60 bg-purple-500/30 px-4 py-2 text-xs text-purple-50 transition hover:bg-purple-500/50 disabled:opacity-40"
          >
            {loading ? "Transforming Tone…" : "Transform Text"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-purple-400/40 border-t-transparent" />
              <p>Shaping narrative voice…</p>
            </div>
          )}

          {/* Output */}
          {!loading && output && (
            <pre className="text-xs text-slate-200 whitespace-pre-line bg-white/5 border border-white/10 rounded-lg p-3">
              {output}
            </pre>
          )}

          {/* Empty */}
          {!loading && !output && (
            <p className="text-xs text-slate-500 text-center px-4">
              Paste text and choose tone settings to transform your writing.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}

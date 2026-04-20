"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function EmotionalPhysicsPage() {
  const [emotionA, setEmotionA] = useState("Joy");
  const [emotionB, setEmotionB] = useState("Fear");
  const [intensity, setIntensity] = useState(50);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function handleSimulate() {
    setLoading(true);

    // 🔮 Placeholder for real emotional physics simulation API
    await new Promise((r) => setTimeout(r, 1200));

    setResult(
      `Emotional Field Simulation:
- Primary Force: ${emotionA}
- Opposing Force: ${emotionB}
- Intensity: ${intensity}%

Resulting emotional vector suggests a dynamic tension between ${emotionA.toLowerCase()} and ${emotionB.toLowerCase()}, producing a resonance field with ${intensity}% charge.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Emotional Physics Engine"
      description="Simulate emotional forces, resonance fields, and subconscious energy vectors."
      aura="from-indigo-500/20 to-blue-500/20"
      left={
        <EnginePanel>
          {/* Emotion A */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Primary Emotion
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={emotionA}
              onChange={(e) => setEmotionA(e.target.value)}
            >
              <option>Joy</option>
              <option>Fear</option>
              <option>Anger</option>
              <option>Love</option>
              <option>Sadness</option>
              <option>Wonder</option>
            </select>
          </div>

          {/* Emotion B */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Opposing Emotion
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={emotionB}
              onChange={(e) => setEmotionB(e.target.value)}
            >
              <option>Fear</option>
              <option>Joy</option>
              <option>Anger</option>
              <option>Love</option>
              <option>Sadness</option>
              <option>Wonder</option>
            </select>
          </div>

          {/* Intensity */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Field Intensity ({intensity}%)
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
            onClick={handleSimulate}
            disabled={loading}
            className="rounded-lg border border-blue-400/60 bg-blue-500/30 px-4 py-2 text-xs text-blue-50 transition hover:bg-blue-500/50 disabled:opacity-40"
          >
            {loading ? "Simulating…" : "Run Simulation"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-blue-400/40 border-t-transparent" />
              <p>Calculating emotional resonance field…</p>
            </div>
          )}

          {!loading && result && (
            <pre className="text-xs text-slate-200 whitespace-pre-line">
              {result}
            </pre>
          )}

          {!loading && !result && (
            <p className="text-xs text-slate-500 text-center px-4">
              Choose two emotional forces and intensity to simulate the field.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}

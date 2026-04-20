"use client";

import { useState } from "react";

export default function PipelineEngine() {
  const [steps, setSteps] = useState<string[]>([]);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState<string>("");

  const toggleStep = (step: string) => {
    setSteps((prev) =>
      prev.includes(step) ? prev.filter((s) => s !== step) : [...prev, step]
    );
  };

  const runPipeline = async () => {
    setLoading(true);
    setOutput("");

    const res = await fetch("/api/pipeline/run", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        steps,
        prompt,
      }),
    });

    const data = await res.json();
    setOutput(data.text || "");
    setLoading(false);
  };

  const stepList = [
    "story",
    "characters",
    "world",
    "images",
    "voice",
    "video",
    "ads",
    "brand",
  ];

  return (
    <div className="glass-panel rounded-2xl p-6 border border-[rgba(255,255,255,0.06)] flex flex-col gap-8">
      {/* PROMPT */}
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe the project, idea, or pipeline goal…"
        className="
          w-full h-32 rounded-xl p-4
          bg-[rgba(255,255,255,0.05)]
          border border-[rgba(255,255,255,0.08)]
          text-[13px] text-[var(--platinum)]
          outline-none
        "
      />

      {/* STEPS */}
      <div className="flex flex-col gap-3">
        <span className="text-[12px] text-[var(--diamond-white)]/60">
          Pipeline Steps
        </span>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {stepList.map((step) => (
            <button
              key={step}
              onClick={() => toggleStep(step)}
              className={`
                px-3 py-2 rounded-xl text-[12px] border transition
                ${
                  steps.includes(step)
                    ? "bg-[var(--cosmic-blue)] text-black border-[var(--cosmic-blue)]"
                    : "bg-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.08)] text-[var(--platinum)]"
                }
              `}
            >
              {step.charAt(0).toUpperCase() + step.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* RUN BUTTON */}
      <button
        onClick={runPipeline}
        disabled={loading || steps.length === 0}
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
        {loading ? "Running Pipeline…" : "Run Pipeline"}
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

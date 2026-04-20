"use client";

import { GlowShell } from "@/components/MotionProvider";
import { motion } from "framer-motion";
import { useState } from "react";
import { generatePreset } from "@/lib/presetGenerator";

export default function PresetDetailPage() {
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const presetId = "mythic-desert-world"; // ← change per preset

  const template = `
World Type: Mythic Desert World
Tone: Ancient, spiritual, wind‑carved
Key Features:
• Endless dunes shaped by ancestral spirits
• Sacred oases protected by guardian entities
• Wind‑borne rituals and nomadic tribes
• Mythic storms revealing hidden truths
`;

  async function handleGenerate() {
    setLoading(true);
    const result = await generatePreset(presetId, template);
    setOutput(result);
    setLoading(false);
  }

  return (
    <div className="min-h-screen w-full">
      <div className="mx-auto max-w-5xl pt-10 pb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h1 className="text-4xl font-semibold text-white">
            Mythic Desert World
          </h1>
          <p className="text-slate-400 text-sm mt-2">
            One‑click world blueprint
          </p>
        </motion.div>

        <GlowShell>
          <div className="space-y-10">
            <section>
              <h2 className="text-xl font-medium text-white mb-2">
                Template Overview
              </h2>
              <pre className="whitespace-pre-line text-slate-300 text-sm bg-white/5 p-4 rounded-xl border border-white/10">
{template}
              </pre>
            </section>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGenerate}
              disabled={loading}
              className="w-full py-4 rounded-xl bg-white/10 border border-white/20 text-white font-medium backdrop-blur-xl hover:bg-white/20 transition-all"
            >
              {loading ? "Generating..." : "Generate"}
            </motion.button>

            {output && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <h2 className="text-xl font-medium text-white mb-4">
                  Generated Output
                </h2>
                <pre className="whitespace-pre-line text-slate-300 text-sm">
{output}
                </pre>
              </motion.div>
            )}
          </div>
        </GlowShell>
      </div>
    </div>
  );
}

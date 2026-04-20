"use client";

import { GlowShell } from "@/components/MotionProvider";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { generatePreset } from "@/lib/presetGenerator";

import { autoExpandTemplate, autoGenerateFields } from "@/lib/presetIntelligence";
import { rewriteTemplateV3 } from "@/lib/presetRewrite";
import { applyReasoningV4 } from "@/lib/presetReasoning";
import { evolvePresetV5 } from "@/lib/presetEvolution";
import { applyLongTermEvolutionV6 } from "@/lib/presetLongEvolution";
import { recordPresetGeneration } from "@/lib/presetMemory";
import { simulateFutureV7 } from "@/lib/presetSimulation";

import { computeInteractionsV8 } from "@/lib/presetInteraction";
import { simulateRealmDynamicsV8 } from "@/lib/presetRealmSimulation";
import { generateWorldStateV8 } from "@/lib/presetWorldState";

export function UltraAdaptivePresetPage(config) {
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const autoVars = useMemo(() => autoExpandTemplate(config.template), [config.template]);
  const autoFields = useMemo(() => autoGenerateFields(autoVars), [autoVars]);
  const allFields = [...config.fields, ...autoFields];

  const [values, setValues] = useState(() =>
    allFields.reduce((acc, f) => {
      acc[f.key] = f.defaultValue ?? "";
      return acc;
    }, {})
  );

  const handleChange = (key, value) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  async function handleGenerate() {
    setLoading(true);

    // v3 rewrite
    const rewritten = rewriteTemplateV3(config.template, values);

    // v4 reasoning
    const reasoned = applyReasoningV4(rewritten, values);

    // v5 evolution
    const evolved = evolvePresetV5(reasoned, values, config.relatedPresets || []);

    // v6 long-term evolution
    const longEvolved = applyLongTermEvolutionV6(config.presetId, evolved, values);

    // v7 future simulation
    const simulatedFuture = simulateFutureV7(config.presetId, values);

    // v8 multi-realm interaction
    const interactions = computeInteractionsV8(config.relatedPresets || [], values);
    const realmDynamics = simulateRealmDynamicsV8(interactions);
    const worldState = generateWorldStateV8(config.presetId, interactions);

    const final =
      longEvolved +
      "\n\n" +
      simulatedFuture +
      "\n\n" +
      realmDynamics +
      "\n\n" +
      worldState;

    const params = allFields.map((f) => ({
      key: f.key,
      value: values[f.key] ?? "",
    }));

    const result = await generatePreset(config.presetId, final, params);

    recordPresetGeneration(config.presetId, result);

    setOutput(result);
    setLoading(false);
  }

  const autoSections = Array.from(new Set(autoFields.map((f) => f.section))).map((name) => ({ name }));
  const sections = [...config.sections, ...autoSections];

  return (
    <div className="min-h-screen w-full">
      <div className="mx-auto max-w-5xl pt-10 pb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h1 className="text-4xl font-semibold text-white">{config.title}</h1>
          <p className="text-slate-400 text-sm mt-2">{config.subtitle}</p>
        </motion.div>

        <GlowShell>
          <div className="space-y-10">
            {/* PARAMETERS */}
            <section className="space-y-6">
              <h2 className="text-xl font-medium text-white">Parameters</h2>

              <div className="space-y-8">
                {sections.map((section) => {
                  const sectionFields = allFields.filter((f) => f.section === section.name);
                  if (!sectionFields.length) return null;

                  return (
                    <div key={section.name} className="space-y-3">
                      <h3 className="text-lg font-semibold text-white">{section.name}</h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {sectionFields.map((field) => (
                          <div key={field.key} className="space-y-2">
                            <label className="text-sm text-slate-300">{field.label}</label>
                            <input
                              value={values[field.key] ?? ""}
                              onChange={(e) => handleChange(field.key, e.target.value)}
                              className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/20"
                              placeholder={field.placeholder}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* OUTPUT */}
            {output && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <h2 className="text-xl font-medium text-white mb-4">Generated Output</h2>
                <pre className="whitespace-pre-line text-slate-300 text-sm">{output}</pre>
              </motion.div>
            )}
          </div>
        </GlowShell>
      </div>
    </div>
  );
}

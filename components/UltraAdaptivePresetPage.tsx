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

/* -------------------------------------------------------
   TYPES — STRICT MODE SAFE
------------------------------------------------------- */

type PresetField = {
  key: string;
  label: string;
  section: string;
  placeholder?: string;
  defaultValue?: string;
};

type AutoField = {
  key: string;
  label: string;
  section: string;
  placeholder?: string; // ⭐ FIX: allow placeholder on auto fields
  defaultValue?: string;
};

type PresetSection = {
  name: string;
  description?: string; // ⭐ FIX: allow description
};

type UltraAdaptivePresetConfig = {
  title: string;
  subtitle?: string;
  presetId: string;
  template: string;
  fields: PresetField[];
  sections: PresetSection[];
  relatedPresets?: string[];
};

/* -------------------------------------------------------
   MAIN COMPONENT
------------------------------------------------------- */

export function UltraAdaptivePresetPage(config: UltraAdaptivePresetConfig) {
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  // Auto‑expansion logic
  const autoVars = useMemo(() => autoExpandTemplate(config.template), [config.template]);
  const autoFields: AutoField[] = useMemo(() => autoGenerateFields(autoVars), [autoVars]);
  const allFields = [...config.fields, ...autoFields];

  // Form values
  const [values, setValues] = useState<Record<string, string>>(() =>
    allFields.reduce((acc, f) => {
      acc[f.key] = f.defaultValue ?? "";
      return acc;
    }, {} as Record<string, string>)
  );

  const handleChange = (key: string, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  /* -------------------------------------------------------
     GENERATION PIPELINE
  ------------------------------------------------------- */

  async function handleGenerate() {
    setLoading(true);

    const rewritten = rewriteTemplateV3(config.template, values);
    const reasoned = applyReasoningV4(rewritten, values);
    const evolved = evolvePresetV5(reasoned, values, config.relatedPresets || []);
    const longEvolved = applyLongTermEvolutionV6(config.presetId, evolved, values);
    const simulatedFuture = simulateFutureV7(config.presetId, values);

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

  /* -------------------------------------------------------
     SECTIONS
  ------------------------------------------------------- */

  const autoSections = Array.from(new Set(autoFields.map((f) => f.section))).map((name) => ({ name }));
  const sections = [...config.sections, ...autoSections];

  /* -------------------------------------------------------
     RENDER
  ------------------------------------------------------- */

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
                              placeholder={field.placeholder ?? ""}
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

            {/* GENERATE BUTTON */}
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="rounded-xl bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-500 disabled:opacity-50"
            >
              {loading ? "Generating..." : "Generate Preset"}
            </button>
          </div>
        </GlowShell>
      </div>
    </div>
  );
}

"use client";

import { UltraAdaptivePresetPage } from "@/components/UltraAdaptivePresetPage";

export default function HarmonyCollectivePage() {
  const template = `
Civilization Name: {{civ_name}}
Founding Myth: {{founding_myth}}
Core Value: {{core_value}}
Governance Structure: {{governance_structure}}
Ritual System: {{ritual_system}}
Primary Emotion: {{primary_emotion}}
Cultural Expression: {{cultural_expression}}
Economic Model: {{economic_model}}
Trade Specialty: {{trade_specialty}}
Education Path: {{education_path}}
Spiritual Framework: {{spiritual_framework}}
Conflict Resolution Style: {{conflict_resolution}}
Architectural Identity: {{architectural_identity}}
Social Hierarchy: {{social_hierarchy}}
Collective Memory Source: {{memory_source}}
Primary Resource: {{primary_resource}}
Diplomatic Stance: {{diplomatic_stance}}
Migration Pattern: {{migration_pattern}}
Artistic Signature: {{artistic_signature}}
Hidden Weakness: {{hidden_weakness}}
`;

  return (
    <UltraAdaptivePresetPage
      presetId="harmony-collective"
      title="Harmony Collective"
      subtitle="Ultra Adaptive civilization blueprint"
      template={template}
      sections={[
        { name: "Identity", description: "Core identity of the civilization." },
        { name: "Culture", description: "Rituals, emotions, and expression." },
        { name: "Structure", description: "Governance, economy, and hierarchy." },
        { name: "Spirit", description: "Myth, memory, and spiritual systems." },
        { name: "Flow", description: "Trade, diplomacy, conflict, and movement." },
      ]}
      fields={[
        // Identity
        { key: "civ_name", label: "Civilization Name", defaultValue: "Harmony Collective", section: "Identity" },
        { key: "founding_myth", label: "Founding Myth", defaultValue: "Born from the First Resonance", section: "Identity" },
        { key: "core_value", label: "Core Value", defaultValue: "Balance through shared emotion", section: "Identity" },

        // Culture
        { key: "ritual_system", label: "Ritual System", defaultValue: "Ceremonies of synchronized breath", section: "Culture" },
        { key: "primary_emotion", label: "Primary Emotion", defaultValue: "Collective serenity", section: "Culture" },
        { key: "cultural_expression", label: "Cultural Expression", defaultValue: "Harmonic chanting and fluid movement", section: "Culture" },
        { key: "artistic_signature", label: "Artistic Signature", defaultValue: "Living sculptures that shift with sound", section: "Culture" },

        // Structure
        { key: "governance_structure", label: "Governance Structure", defaultValue: "Council of Resonant Voices", section: "Structure" },
        { key: "economic_model", label: "Economic Model", defaultValue: "Shared abundance economy", section: "Structure" },
        { key: "trade_specialty", label: "Trade Specialty", defaultValue: "Emotion‑infused artifacts", section: "Structure" },
        { key: "social_hierarchy", label: "Social Hierarchy", defaultValue: "Fluid roles based on emotional clarity", section: "Structure" },
        { key: "primary_resource", label: "Primary Resource", defaultValue: "Crystals that store collective memory", section: "Structure" },

        // Spirit
        { key: "spiritual_framework", label: "Spiritual Framework", defaultValue: "The Path of Inner Echoes", section: "Spirit" },
        { key: "memory_source", label: "Collective Memory Source", defaultValue: "Ancestral resonance wells", section: "Spirit" },
        { key: "hidden_weakness", label: "Hidden Weakness", defaultValue: "Over‑dependence on emotional harmony", section: "Spirit" },

        // Flow
        { key: "conflict_resolution", label: "Conflict Resolution Style", defaultValue: "Ritualized emotional alignment", section: "Flow" },
        { key: "diplomatic_stance", label: "Diplomatic Stance", defaultValue: "Peaceful but firm in values", section: "Flow" },
        { key: "migration_pattern", label: "Migration Pattern", defaultValue: "Seasonal movement guided by resonance fields", section: "Flow" },
      ]}
    />
  );
}

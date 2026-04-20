"use client";

import { UltraAdaptivePresetPage } from "@/components/UltraAdaptivePresetPage";

export default function FiveRealmOmniPresetPage() {
  const template = `
Hybrid Name: {{hybrid_name}}
Origin Realm: {{origin_realm}}
Cultural Core: {{cultural_core}}
Governance Model: {{governance_model}}
Economic Flow: {{economic_flow}}
Educational Path: {{educational_path}}
Mythic Fusion: {{mythic_fusion}}
Primary Conflict: {{primary_conflict}}
Spiritual Axis: {{spiritual_axis}}
Key Artifact: {{key_artifact}}
Signature Ritual: {{signature_ritual}}
Architectural Identity: {{architectural_identity}}
Trade Specialty: {{trade_specialty}}
Diplomatic Stance: {{diplomatic_stance}}
Migration Pattern: {{migration_pattern}}
Emotional Atmosphere: {{emotional_atmosphere}}
Hidden Weakness: {{hidden_weakness}}
Realm Synergy: {{realm_synergy}}
Forbidden Combination: {{forbidden_combination}}
Ultimate Purpose: {{ultimate_purpose}}
`;

  return (
    <UltraAdaptivePresetPage
      presetId="five-realm-omni-preset"
      title="Five‑Realm Omni‑Preset"
      subtitle="Ultra Adaptive hybrid civilization blueprint"
      template={template}
      sections={[
        { name: "Identity", description: "Core identity of the hybrid civilization." },
        { name: "Realm Fusion", description: "How the realms merge and interact." },
        { name: "Structure", description: "Governance, economy, and architecture." },
        { name: "Flow", description: "Trade, diplomacy, conflict, and movement." },
        { name: "Myth & Spirit", description: "Spiritual and mythic layers." },
        { name: "Shadow", description: "Weaknesses, forbidden elements, hidden truths." },
      ]}
      fields={[
        // Identity
        { key: "hybrid_name", label: "Hybrid Name", defaultValue: "Five‑Realm Omni‑Collective", section: "Identity" },
        { key: "origin_realm", label: "Origin Realm", defaultValue: "Convergence Point of the Five", section: "Identity" },
        { key: "ultimate_purpose", label: "Ultimate Purpose", defaultValue: "To unify the realms into a single harmonic destiny", section: "Identity" },

        // Realm Fusion
        { key: "realm_synergy", label: "Realm Synergy", defaultValue: "Culture shapes governance; governance shapes economy; economy fuels education; education preserves myth", section: "Realm Fusion" },
        { key: "mythic_fusion", label: "Mythic Fusion", defaultValue: "Ancestral spirits woven with elemental forces", section: "Realm Fusion" },
        { key: "forbidden_combination", label: "Forbidden Combination", defaultValue: "Binding governance and myth without ritual approval", section: "Realm Fusion" },

        // Structure
        { key: "governance_model", label: "Governance Model", defaultValue: "Tri‑Council of Culture, Spirit, and Flow", section: "Structure" },
        { key: "economic_flow", label: "Economic Flow", defaultValue: "Trade of realm‑infused artifacts", section: "Structure" },
        { key: "architectural_identity", label: "Architectural Identity", defaultValue: "Floating structures anchored by elemental cores", section: "Structure" },
        { key: "educational_path", label: "Educational Path", defaultValue: "Five‑phase ascension training", section: "Structure" },

        // Flow
        { key: "trade_specialty", label: "Trade Specialty", defaultValue: "Cross‑realm resonance crystals", section: "Flow" },
        { key: "diplomatic_stance", label: "Diplomatic Stance", defaultValue: "Bridge‑builders between realms", section: "Flow" },
        { key: "migration_pattern", label: "Migration Pattern", defaultValue: "Seasonal realm‑shifting", section: "Flow" },
        { key: "primary_conflict", label: "Primary Conflict", defaultValue: "Realm imbalance caused by over‑fusion", section: "Flow" },

        // Myth & Spirit
        { key: "spiritual_axis", label: "Spiritual Axis", defaultValue: "The Convergence Spire", section: "Myth & Spirit" },
        { key: "signature_ritual", label: "Signature Ritual", defaultValue: "The Rite of Five Lights", section: "Myth & Spirit" },
        { key: "key_artifact", label: "Key Artifact", defaultValue: "The Omni‑Core Prism", section: "Myth & Spirit" },
        { key: "emotional_atmosphere", label: "Emotional Atmosphere", defaultValue: "Reverent, unified, cosmically aware", section: "Myth & Spirit" },

        // Shadow
        { key: "hidden_weakness", label: "Hidden Weakness", defaultValue: "Realm fusion can destabilize identity", section: "Shadow" },
      ]}
    />
  );
}

"use client";

import { UltraAdaptivePresetPage } from "@/components/UltraAdaptivePresetPage";

export default function CouncilOfEldersPage() {
  const template = `
Council Name: {{council_name}}
Founding Principle: {{founding_principle}}
Selection Method: {{selection_method}}
Term Length: {{term_length}}
Decision Ritual: {{decision_ritual}}
Conflict Resolution: {{conflict_resolution}}
Law Philosophy: {{law_philosophy}}
Symbol of Authority: {{symbol_of_authority}}
Meeting Place: {{meeting_place}}
Council Size: {{council_size}}
Primary Virtue: {{primary_virtue}}
Forbidden Act: {{forbidden_act}}
Public Ceremony: {{public_ceremony}}
Spiritual Advisor Role: {{spiritual_advisor_role}}
Economic Influence: {{economic_influence}}
Cultural Influence: {{cultural_influence}}
Military Relationship: {{military_relationship}}
Diplomatic Stance: {{diplomatic_stance}}
Hidden Weakness: {{hidden_weakness}}
`;

  return (
    <UltraAdaptivePresetPage
      presetId="council-of-elders"
      title="Council of Elders"
      subtitle="Ultra Adaptive governance blueprint"
      template={template}
      sections={[
        { name: "Identity" },
        { name: "Structure" },
        { name: "Ritual & Law" },
        { name: "Influence" },
        { name: "Weakness" },
      ]}
      fields={[
        // Identity
        { key: "council_name", label: "Council Name", defaultValue: "Council of Elders", section: "Identity" },
        { key: "founding_principle", label: "Founding Principle", defaultValue: "Wisdom through lived experience", section: "Identity" },
        { key: "meeting_place", label: "Meeting Place", defaultValue: "The Hall of Echoing Stone", section: "Identity" },

        // Structure
        { key: "selection_method", label: "Selection Method", defaultValue: "Chosen by ancestral signs", section: "Structure" },
        { key: "term_length", label: "Term Length", defaultValue: "Lifetime appointment", section: "Structure" },
        { key: "council_size", label: "Council Size", defaultValue: "Nine elders", section: "Structure" },

        // Ritual & Law
        { key: "decision_ritual", label: "Decision Ritual", defaultValue: "Circle of Resonant Voices", section: "Ritual & Law" },
        { key: "law_philosophy", label: "Law Philosophy", defaultValue: "Harmony over punishment", section: "Ritual & Law" },
        { key: "forbidden_act", label: "Forbidden Act", defaultValue: "Breaking ancestral oaths", section: "Ritual & Law" },
        { key: "conflict_resolution", label: "Conflict Resolution", defaultValue: "Mediation through memory‑sharing", section: "Ritual & Law" },

        // Influence
        { key: "symbol_of_authority", label: "Symbol of Authority", defaultValue: "The Elder’s Staff of Echoes", section: "Influence" },
        { key: "economic_influence", label: "Economic Influence", defaultValue: "Controls resource distribution", section: "Influence" },
        { key: "cultural_influence", label: "Cultural Influence", defaultValue: "Guides rituals and festivals", section: "Influence" },
        { key: "military_relationship", label: "Military Relationship", defaultValue: "Advisory but not commanding", section: "Influence" },
        { key: "diplomatic_stance", label: "Diplomatic Stance", defaultValue: "Peace‑first, wisdom‑guided", section: "Influence" },

        // Weakness
        { key: "hidden_weakness", label: "Hidden Weakness", defaultValue: "Slow to adapt to rapid change", section: "Weakness" },
      ]}
    />
  );
}

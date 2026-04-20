"use client";

import { UltraAdaptivePresetPage } from "@/components/UltraAdaptivePresetPage";

export default function FireDanceTraditionPage() {
  const template = `
Tradition Name: {{tradition_name}}
Origin Story: {{origin_story}}
Cultural Purpose: {{cultural_purpose}}
Primary Emotion: {{primary_emotion}}
Movement Style: {{movement_style}}
Fire Symbolism: {{fire_symbolism}}
Ritual Sequence: {{ritual_sequence}}
Musical Backbone: {{musical_backbone}}
Dress Style: {{dress_style}}
Sacred Material: {{sacred_material}}
Community Role: {{community_role}}
Mythic Influence: {{mythic_influence}}
Spiritual Outcome: {{spiritual_outcome}}
Performance Setting: {{performance_setting}}
Generational Transmission: {{generational_transmission}}
Forbidden Variation: {{forbidden_variation}}
Key Artifact: {{key_artifact}}
Emotional Atmosphere: {{emotional_atmosphere}}
Hidden Meaning: {{hidden_meaning}}
`;

  return (
    <UltraAdaptivePresetPage
      presetId="fire-dance-tradition"
      title="Fire Dance Tradition"
      subtitle="Ultra Adaptive cultural blueprint"
      template={template}
      sections={[
        { name: "Identity" },
        { name: "Expression" },
        { name: "Myth & Spirit" },
        { name: "Community" },
        { name: "Atmosphere" },
      ]}
      fields={[
        // Identity
        { key: "tradition_name", label: "Tradition Name", defaultValue: "Fire Dance of the Ancestors", section: "Identity" },
        { key: "origin_story", label: "Origin Story", defaultValue: "Born from the First Flame", section: "Identity" },
        { key: "cultural_purpose", label: "Cultural Purpose", defaultValue: "To retell ancestral journeys", section: "Identity" },

        // Expression
        { key: "movement_style", label: "Movement Style", defaultValue: "Circular, rhythmic, trance‑like", section: "Expression" },
        { key: "musical_backbone", label: "Musical Backbone", defaultValue: "Drums echoing heartbeat patterns", section: "Expression" },
        { key: "dress_style", label: "Dress Style", defaultValue: "Ember‑woven fabrics", section: "Expression" },
        { key: "sacred_material", label: "Sacred Material", defaultValue: "Flame‑reactive ash powder", section: "Expression" },

        // Myth & Spirit
        { key: "fire_symbolism", label: "Fire Symbolism", defaultValue: "Memory, rebirth, ancestral presence", section: "Myth & Spirit" },
        { key: "mythic_influence", label: "Mythic Influence", defaultValue: "The Flame‑Bearer deity", section: "Myth & Spirit" },
        { key: "spiritual_outcome", label: "Spiritual Outcome", defaultValue: "Emotional purification", section: "Myth & Spirit" },
        { key: "hidden_meaning", label: "Hidden Meaning", defaultValue: "The fire reveals unspoken truths", section: "Myth & Spirit" },

        // Community
        { key: "community_role", label: "Community Role", defaultValue: "Unifies clans during solstice", section: "Community" },
        { key: "performance_setting", label: "Performance Setting", defaultValue: "Sacred night‑time circles", section: "Community" },
        { key: "generational_transmission", label: "Generational Transmission", defaultValue: "Taught through dream‑rituals", section: "Community" },
        { key: "forbidden_variation", label: "Forbidden Variation", defaultValue: "Dancing without flame", section: "Community" },

        // Atmosphere
        { key: "primary_emotion", label: "Primary Emotion", defaultValue: "Ecstatic release", section: "Atmosphere" },
        { key: "emotional_atmosphere", label: "Emotional Atmosphere", defaultValue: "Intense, reverent, transformative", section: "Atmosphere" },
        { key: "key_artifact", label: "Key Artifact", defaultValue: "The Ember‑Heart Totem", section: "Atmosphere" },
      ]}
    />
  );
}

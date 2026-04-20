"use client";

import { UltraAdaptivePresetPage } from "@/components/UltraAdaptivePresetPage";

export default function MythicDesertWorldPage() {
  const template = `
World Name: {{world_name}}
Primary Region: {{primary_region}}
Climate: {{climate}}
Dominant Element: {{dominant_element}}
Ancestral Force: {{ancestral_force}}
Primary People: {{primary_people}}
Core Myth: {{core_myth}}
Spiritual Axis: {{spiritual_axis}}
Key Resource: {{key_resource}}
Main Conflict: {{main_conflict}}
Travel Mode: {{travel_mode}}
Signature Ritual: {{signature_ritual}}
Architectural Style: {{architectural_style}}
Cultural Tone: {{cultural_tone}}
Economic Backbone: {{economic_backbone}}
Hidden Truth: {{hidden_truth}}
Guardian Entity: {{guardian_entity}}
Sacred Location: {{sacred_location}}
Primary Language Vibe: {{language_vibe}}
Emotional Atmosphere: {{emotional_atmosphere}}
`;

  return (
    <UltraAdaptivePresetPage
      presetId="mythic-desert-world"
      title="Mythic Desert World"
      subtitle="Ultra Adaptive parametric world blueprint"
      template={template}
      sections={[
        {
          name: "Identity",
          description: "Core identity of this mythic desert world.",
        },
        {
          name: "Environment",
          description: "Climate, elements, and physical reality.",
        },
        {
          name: "People & Culture",
          description: "Who lives here and how they express themselves.",
        },
        {
          name: "Myth & Spirit",
          description: "Spiritual, mythic, and unseen layers.",
        },
        {
          name: "Structure & Flow",
          description: "Economy, conflict, travel, and architecture.",
        },
      ]}
      fields={[
        // Identity
        {
          key: "world_name",
          label: "World Name",
          placeholder: "e.g. Sah’Rael",
          defaultValue: "Sah’Rael",
          section: "Identity",
        },
        {
          key: "primary_region",
          label: "Primary Region",
          placeholder: "e.g. Eastern Dune Sea",
          defaultValue: "Eastern Dune Sea",
          section: "Identity",
        },
        {
          key: "cultural_tone",
          label: "Cultural Tone",
          placeholder: "e.g. solemn, ecstatic, contemplative",
          defaultValue: "solemn and ecstatic",
          section: "Identity",
        },

        // Environment
        {
          key: "climate",
          label: "Climate",
          placeholder: "e.g. scorching days, freezing nights",
          defaultValue: "scorching days, freezing nights",
          section: "Environment",
        },
        {
          key: "dominant_element",
          label: "Dominant Element",
          placeholder: "e.g. wind, sand, fire",
          defaultValue: "wind and sand",
          section: "Environment",
        },
        {
          key: "key_resource",
          label: "Key Resource",
          placeholder: "e.g. hidden aquifers, crystal dunes",
          defaultValue: "hidden aquifers beneath crystal dunes",
          section: "Environment",
        },

        // People & Culture
        {
          key: "primary_people",
          label: "Primary People",
          placeholder: "e.g. nomadic clans, caravan guilds",
          defaultValue: "nomadic clans bound by caravan guilds",
          section: "People & Culture",
        },
        {
          key: "signature_ritual",
          label: "Signature Ritual",
          placeholder: "e.g. night‑long fire dances",
          defaultValue: "night‑long fire dances atop dune ridges",
          section: "People & Culture",
        },
        {
          key: "architectural_style",
          label: "Architectural Style",
          placeholder: "e.g. carved canyon cities",
          defaultValue: "carved canyon cities and tent‑cities of light",
          section: "People & Culture",
        },
        {
          key: "language_vibe",
          label: "Language Vibe",
          placeholder: "e.g. breathy, sung, harsh, melodic",
          defaultValue: "breathy, sung, and carried by the wind",
          section: "People & Culture",
        },

        // Myth & Spirit
        {
          key: "ancestral_force",
          label: "Ancestral Force",
          placeholder: "e.g. desert spirits, wind ancestors",
          defaultValue: "wind‑borne desert ancestors",
          section: "Myth & Spirit",
        },
        {
          key: "core_myth",
          label: "Core Myth",
          placeholder: "e.g. origin story of the dunes",
          defaultValue: "the dunes were once a sleeping titan",
          section: "Myth & Spirit",
        },
        {
          key: "spiritual_axis",
          label: "Spiritual Axis",
          placeholder: "e.g. a central oasis, a sky rift",
          defaultValue: "a central oasis where stars reflect perfectly",
          section: "Myth & Spirit",
        },
        {
          key: "guardian_entity",
          label: "Guardian Entity",
          placeholder: "e.g. sand serpent, storm eagle",
          defaultValue: "a colossal sand serpent woven from starlight",
          section: "Myth & Spirit",
        },
        {
          key: "sacred_location",
          label: "Sacred Location",
          placeholder: "e.g. whispering canyon, mirrored dune",
          defaultValue: "the Whispering Glass Dune",
          section: "Myth & Spirit",
        },

        // Structure & Flow
        {
          key: "economic_backbone",
          label: "Economic Backbone",
          placeholder: "e.g. spice trade, memory crystals",
          defaultValue: "spice caravans and memory‑holding crystals",
          section: "Structure & Flow",
        },
        {
          key: "main_conflict",
          label: "Main Conflict",
          placeholder: "e.g. water rights, spiritual schism",
          defaultValue: "a spiritual schism over who may access the oasis",
          section: "Structure & Flow",
        },
        {
          key: "travel_mode",
          label: "Travel Mode",
          placeholder: "e.g. sand skiffs, giant beasts",
          defaultValue: "wind‑sails on sand skiffs and titan‑beasts",
          section: "Structure & Flow",
        },
        {
          key: "emotional_atmosphere",
          label: "Emotional Atmosphere",
          placeholder: "e.g. tense, reverent, hopeful",
          defaultValue: "reverent, tense, and quietly hopeful",
          section: "Structure & Flow",
        },
        {
          key: "hidden_truth",
          label: "Hidden Truth",
          placeholder: "e.g. the desert is alive, the oasis is artificial",
          defaultValue: "the desert itself is a sleeping, listening mind",
          section: "Structure & Flow",
        },
      ]}
    />
  );
}

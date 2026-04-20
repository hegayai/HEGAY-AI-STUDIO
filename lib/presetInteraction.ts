export type RealmInteraction = {
  source: string;
  target: string;
  influence: string;
  intensity: number; // 0–1
};

export function computeInteractionsV8(
  presets: string[],
  values: Record<string, string>
): RealmInteraction[] {
  const interactions: RealmInteraction[] = [];

  for (let i = 0; i < presets.length; i++) {
    for (let j = 0; j < presets.length; j++) {
      if (i === j) continue;

      const source = presets[i];
      const target = presets[j];

      const intensity = Math.random() * 0.6 + 0.2; // 0.2–0.8

      const influence = inferInfluence(values);

      interactions.push({
        source,
        target,
        influence,
        intensity,
      });
    }
  }

  return interactions;
}

function inferInfluence(values: Record<string, string>) {
  if (values["cultural_tone"]) return "Cultural Diffusion";
  if (values["economic_flow"]) return "Economic Pressure";
  if (values["governance_model"]) return "Governance Influence";
  if (values["mythic_fusion"]) return "Mythic Resonance";
  return "General Influence";
}

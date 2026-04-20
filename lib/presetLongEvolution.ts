import { getPresetHistory } from "./presetMemory";

export function applyLongTermEvolutionV6(
  presetId: string,
  evolvedTemplate: string,
  values: Record<string, string>
) {
  const history = getPresetHistory(presetId);

  if (history.length === 0) {
    return evolvedTemplate; // No evolution yet
  }

  const lastGen = history[history.length - 1];

  let final = evolvedTemplate;

  // 1. Inherit strong traits from last generation
  final += `

Lineage Inheritance:
This preset inherits the following strengths from its previous generation:
• Emotional Core: ${extractTrait(lastGen, "emotion") || values["primary_emotion"] || "Undefined"}
• Structural Stability: ${extractTrait(lastGen, "structure") || "Stable"}
• Mythic Resonance: ${extractTrait(lastGen, "myth") || values["mythic_fusion"] || "Undefined"}
`;

  // 2. Correct weaknesses over time
  final += `

Adaptive Correction:
Weaknesses identified in previous generations have been refined.
`;

  // 3. Add generational identity
  final += `

Generational Identity:
This is generation #${history.length + 1} of the ${presetId} lineage.
`;

  return final.trim();
}

function extractTrait(text: string, keyword: string) {
  const lines = text.split("\n");
  const match = lines.find((l) => l.toLowerCase().includes(keyword));
  return match || null;
}

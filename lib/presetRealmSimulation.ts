import { RealmInteraction } from "./presetInteraction";

export function simulateRealmDynamicsV8(interactions: RealmInteraction[]) {
  const summary: string[] = [];

  interactions.forEach((i) => {
    summary.push(`
${i.source} → ${i.target}
• Influence Type: ${i.influence}
• Intensity: ${(i.intensity * 100).toFixed(0)}%
• Outcome: ${predictOutcome(i)}
`);
  });

  return summary.join("\n");
}

function predictOutcome(i: RealmInteraction) {
  if (i.intensity > 0.7) return "Major structural shift";
  if (i.intensity > 0.5) return "Moderate cultural blending";
  if (i.intensity > 0.3) return "Minor influence detected";
  return "Negligible impact";
}

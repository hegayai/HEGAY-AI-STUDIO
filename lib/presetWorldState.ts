import { RealmInteraction } from "./presetInteraction";

export function generateWorldStateV8(
  presetId: string,
  interactions: RealmInteraction[]
) {
  const total = interactions.length;
  const avgIntensity =
    interactions.reduce((sum, i) => sum + i.intensity, 0) / total;

  return `
World-State Snapshot for ${presetId}:

Total Interactions: ${total}
Average Influence Intensity: ${(avgIntensity * 100).toFixed(0)}%

Dominant Influence Type:
${dominantInfluence(interactions)}

System Stability:
${stability(avgIntensity)}
`;
}

function dominantInfluence(interactions: RealmInteraction[]) {
  const counts: Record<string, number> = {};

  interactions.forEach((i) => {
    counts[i.influence] = (counts[i.influence] || 0) + 1;
  });

  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);

  return sorted[0][0];
}

function stability(avg: number) {
  if (avg > 0.7) return "Highly Unstable";
  if (avg > 0.5) return "Moderately Unstable";
  if (avg > 0.3) return "Stable with fluctuations";
  return "Highly Stable";
}

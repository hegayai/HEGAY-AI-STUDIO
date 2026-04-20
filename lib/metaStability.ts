import { MetaGraph } from "./metaGraph";

export function analyzeMetaStabilityV10(meta: MetaGraph) {
  const avgWeight =
    meta.metaEdges.reduce((sum, e) => sum + e.weight, 0) /
    meta.metaEdges.length;

  return `
Meta‑Realm Stability:
• Total Realm Graphs: ${meta.graphs.length}
• Average Cross‑Graph Influence: ${(avgWeight * 100).toFixed(0)}%
• Stability Level: ${stability(avgWeight)}
`;
}

function stability(avg: number) {
  if (avg > 0.75) return "Highly Unstable Meta‑Realm";
  if (avg > 0.55) return "Moderately Unstable Meta‑Realm";
  if (avg > 0.35) return "Stable with Inter‑Realm Tension";
  return "Highly Stable Meta‑Realm";
}

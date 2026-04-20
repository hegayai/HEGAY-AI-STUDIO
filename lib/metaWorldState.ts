import { MetaGraph } from "./metaGraph";
import { detectMetaClustersV10 } from "./metaClusters";

export function generateMetaWorldStateV10(meta: MetaGraph) {
  const clusters = detectMetaClustersV10(meta);

  return `
Meta‑Realm World‑State Summary:

Constellations:
${Object.entries(clusters)
  .map(([type, nodes]) => `• ${type}: ${nodes.join(", ")}`)
  .join("\n")}

Dominant Constellation:
${dominant(clusters)}

Meta‑Realm Density:
${density(meta)}
`;
}

function dominant(clusters: Record<string, string[]>) {
  const sorted = Object.entries(clusters).sort((a, b) => b[1].length - a[1].length);
  return sorted[0][0];
}

function density(meta: MetaGraph) {
  const n = meta.metaNodes.length;
  const e = meta.metaEdges.length;
  const max = n * (n - 1);
  return `${((e / max) * 100).toFixed(0)}%`;
}

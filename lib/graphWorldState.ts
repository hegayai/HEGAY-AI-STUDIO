import { CivilizationGraph } from "./civilizationGraph";
import { detectClustersV9 } from "./graphClusters";

export function generateGraphWorldStateV9(graph: CivilizationGraph) {
  const clusters = detectClustersV9(graph);

  return `
Civilization Graph World-State:

Realm Clusters:
${Object.entries(clusters)
  .map(([realm, nodes]) => `• ${realm}: ${nodes.join(", ")}`)
  .join("\n")}

Dominant Realm Type:
${dominantRealm(clusters)}

Graph Density:
${density(graph)}
`;
}

function dominantRealm(clusters: Record<string, string[]>) {
  const sorted = Object.entries(clusters).sort((a, b) => b[1].length - a[1].length);
  return sorted[0][0];
}

function density(graph: CivilizationGraph) {
  const n = graph.nodes.length;
  const e = graph.edges.length;
  const max = n * (n - 1);
  return `${((e / max) * 100).toFixed(0)}%`;
}

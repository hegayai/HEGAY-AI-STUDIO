import { CivilizationGraph } from "./civilizationGraph";

export function detectClustersV9(graph: CivilizationGraph) {
  const clusters: Record<string, string[]> = {};

  graph.nodes.forEach((node) => {
    if (!clusters[node.realmType]) clusters[node.realmType] = [];
    clusters[node.realmType].push(node.id);
  });

  return clusters;
}

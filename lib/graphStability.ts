import { CivilizationGraph } from "./civilizationGraph";

export function analyzeGraphStabilityV9(graph: CivilizationGraph) {
  const avgWeight =
    graph.edges.reduce((sum, e) => sum + e.weight, 0) / graph.edges.length;

  return `
Graph Stability Analysis:
• Total Nodes: ${graph.nodes.length}
• Total Edges: ${graph.edges.length}
• Average Influence Weight: ${(avgWeight * 100).toFixed(0)}%
• System Stability: ${stability(avgWeight)}
`;
}

function stability(avg: number) {
  if (avg > 0.75) return "Highly Unstable";
  if (avg > 0.55) return "Moderately Unstable";
  if (avg > 0.35) return "Stable with fluctuations";
  return "Highly Stable";
}

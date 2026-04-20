import { CivilizationGraph } from "./civilizationGraph";

export type MetaGraph = {
  graphs: CivilizationGraph[];
  metaNodes: string[];
  metaEdges: { from: string; to: string; weight: number }[];
};

export function buildMetaGraphV10(graphs: CivilizationGraph[]): MetaGraph {
  const metaNodes = graphs.map((g, i) => `RealmGraph_${i + 1}`);

  const metaEdges = [];

  for (let i = 0; i < graphs.length; i++) {
    for (let j = 0; j < graphs.length; j++) {
      if (i === j) continue;

      const weight = computeMetaWeight(graphs[i], graphs[j]);

      metaEdges.push({
        from: metaNodes[i],
        to: metaNodes[j],
        weight,
      });
    }
  }

  return { graphs, metaNodes, metaEdges };
}

function computeMetaWeight(a: CivilizationGraph, b: CivilizationGraph) {
  const aDensity = a.edges.length / (a.nodes.length * (a.nodes.length - 1));
  const bDensity = b.edges.length / (b.nodes.length * (b.nodes.length - 1));

  return (aDensity + bDensity) / 2;
}

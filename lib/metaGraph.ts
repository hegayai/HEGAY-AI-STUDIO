// lib/metaGraph.ts

import { CivilizationGraph } from "./civilizationGraph";

/**
 * Legacy meta‑graph structure (graph of CivilizationGraphs).
 */
export interface MetaGraph {
  graphs: CivilizationGraph[];
  metaNodes: string[];
  metaEdges: { from: string; to: string; weight: number }[];
}

/**
 * Premium‑OS compatible node structure for cluster detection.
 */
export interface MetaNode {
  id: string;
  realmType: string;
  connections: string[];
}

/**
 * Premium‑OS compatible edge structure.
 */
export interface MetaEdge {
  from: string;
  to: string;
}

/**
 * Convert the legacy MetaGraph into a Premium‑OS RealmGraph.
 * This allows buildMetaClusters(meta) to work correctly.
 */
export function toRealmGraph(meta: MetaGraph) {
  const nodes: MetaNode[] = meta.metaNodes.map((id) => ({
    id,
    realmType: "meta", // meta‑realm type
    connections: meta.metaEdges
      .filter((e) => e.from === id)
      .map((e) => e.to),
  }));

  const edges: MetaEdge[] = meta.metaEdges.map((e) => ({
    from: e.from,
    to: e.to,
  }));

  return { nodes, edges };
}

/**
 * Build the legacy meta‑graph (graph of CivilizationGraphs).
 */
export function buildMetaGraphV10(graphs: CivilizationGraph[]): MetaGraph {
  const metaNodes = graphs.map((g, i) => `RealmGraph_${i + 1}`);

  const metaEdges: { from: string; to: string; weight: number }[] = [];

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

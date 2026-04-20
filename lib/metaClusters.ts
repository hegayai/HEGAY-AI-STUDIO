import { MetaGraph } from "./metaGraph";

export function detectMetaClustersV10(meta: MetaGraph) {
  const clusters: Record<string, string[]> = {};

  meta.metaNodes.forEach((node, i) => {
    const realmType = inferMetaType(meta.graphs[i]);
    if (!clusters[realmType]) clusters[realmType] = [];
    clusters[realmType].push(node);
  });

  return clusters;
}

function inferMetaType(graph) {
  const types = graph.nodes.map((n) => n.realmType);
  const dominant = types.sort(
    (a, b) =>
      types.filter((t) => t === b).length -
      types.filter((t) => t === a).length
  )[0];
  return dominant;
}

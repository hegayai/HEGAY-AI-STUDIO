// lib/metaClusters.ts

export interface RealmNode {
  id: string;
  realmType: string;
  connections: string[];
}

export interface RealmGraph {
  nodes: RealmNode[];
  edges: Array<{ from: string; to: string }>;
}

/**
 * Infer the dominant meta‑type of a cluster based on its nodes.
 */
function inferMetaType(graph: RealmGraph): string {
  const types = graph.nodes.map((n) => n.realmType);

  const dominant = types.sort(
    (a, b) =>
      types.filter((t) => t === b).length -
      types.filter((t) => t === a).length
  )[0];

  return dominant ?? "unknown";
}

/**
 * Group nodes into meta‑clusters based on connectivity.
 */
export function buildMetaClusters(graph: RealmGraph) {
  const visited = new Set<string>();
  const clusters: Array<{ nodes: RealmNode[]; metaType: string }> = [];

  function dfs(nodeId: string, cluster: RealmNode[]) {
    if (visited.has(nodeId)) return;
    visited.add(nodeId);

    const node = graph.nodes.find((n) => n.id === nodeId);
    if (!node) return;

    cluster.push(node);

    node.connections.forEach((nextId) => dfs(nextId, cluster));
  }

  for (const node of graph.nodes) {
    if (!visited.has(node.id)) {
      const cluster: RealmNode[] = [];
      dfs(node.id, cluster);

      clusters.push({
        nodes: cluster,
        metaType: inferMetaType({ nodes: cluster, edges: [] }),
      });
    }
  }

  return clusters;
}

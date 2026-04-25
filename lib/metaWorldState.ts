// lib/metaWorldState.ts

import { MetaGraph, toRealmGraph } from "./metaGraph";
import { buildMetaClusters } from "./metaClusters";

/**
 * Generate a Premium‑OS meta‑realm world‑state snapshot.
 */
export function generateMetaWorldStateV10(meta: MetaGraph) {
  // Convert legacy MetaGraph → Premium‑OS RealmGraph
  const realmGraph = toRealmGraph(meta);

  // Now cluster detection works correctly
  const clusters = buildMetaClusters(realmGraph);

  return {
    clusterCount: clusters.length,

    clusters: clusters.map((c) => ({
      metaType: c.metaType,
      nodeCount: c.nodes.length,
      nodes: c.nodes.map((n) => ({
        id: n.id,
        realmType: n.realmType,
      })),
    })),

    density: computeDensity(realmGraph),
    dominantMetaType: computeDominant(clusters),
  };
}

/**
 * Compute the dominant meta‑type across all clusters.
 */
function computeDominant(
  clusters: Array<{ metaType: string; nodes: any[] }>
): string {
  if (clusters.length === 0) return "unknown";

  const counts: Record<string, number> = {};

  for (const c of clusters) {
    counts[c.metaType] = (counts[c.metaType] || 0) + c.nodes.length;
  }

  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
}

/**
 * Compute graph density for the meta‑realm.
 */
function computeDensity(graph: { nodes: any[]; edges: any[] }): string {
  const n = graph.nodes.length;
  const e = graph.edges.length;

  if (n <= 1) return "0%";

  const max = n * (n - 1);
  return `${((e / max) * 100).toFixed(1)}%`;
}

export type GraphNode = {
  id: string;
  label: string;
  realmType: string;
};

export type GraphEdge = {
  source: string;
  target: string;
  weight: number; // 0–1
  influenceType: string;
};

export type CivilizationGraph = {
  nodes: GraphNode[];
  edges: GraphEdge[];
};

export function buildGraphV9(
  presetIds: string[],
  values: Record<string, string>
): CivilizationGraph {
  const nodes: GraphNode[] = presetIds.map((id) => ({
    id,
    label: id.replace(/-/g, " "),
    realmType: inferRealmType(id),
  }));

  const edges: GraphEdge[] = [];

  for (let i = 0; i < nodes.length; i++) {
    for (let j = 0; j < nodes.length; j++) {
      if (i === j) continue;

      edges.push({
        source: nodes[i].id,
        target: nodes[j].id,
        weight: Math.random() * 0.7 + 0.3, // 0.3–1.0
        influenceType: inferInfluence(values),
      });
    }
  }

  return { nodes, edges };
}

function inferRealmType(id: string) {
  if (id.includes("world")) return "World";
  if (id.includes("culture")) return "Culture";
  if (id.includes("govern")) return "Governance";
  if (id.includes("econom")) return "Economy";
  if (id.includes("educat")) return "Education";
  if (id.includes("realm") || id.includes("hybrid")) return "Hybrid";
  return "General";
}

function inferInfluence(values: Record<string, string>) {
  if (values["cultural_tone"]) return "Cultural";
  if (values["economic_flow"]) return "Economic";
  if (values["governance_model"]) return "Governance";
  if (values["mythic_fusion"]) return "Mythic";
  return "General";
}

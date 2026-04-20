export type OriginLaw = {
  id: string;
  description: string;
  appliesTo: string[]; // realm types
};

export function applyOriginCodexV11(
  laws: OriginLaw[],
  presetId: string,
  realmType: string,
  content: string
) {
  const applicable = laws.filter((law) =>
    law.appliesTo.includes(realmType)
  );

  if (applicable.length === 0) return content;

  let codexApplied = content + `

Origin‑System Codex Application:
`;

  applicable.forEach((law) => {
    codexApplied += `
• Law: ${law.description}
  Effect: ${interpretLaw(law, presetId, realmType)}
`;
  });

  return codexApplied.trim();
}

function interpretLaw(law: OriginLaw, presetId: string, realmType: string) {
  if (law.description.toLowerCase().includes("balance"))
    return `Ensures ${presetId} maintains equilibrium within the ${realmType} realm`;

  if (law.description.toLowerCase().includes("memory"))
    return `Strengthens lineage continuity and ancestral resonance`;

  if (law.description.toLowerCase().includes("expansion"))
    return `Guides controlled growth across interconnected realms`;

  return `Influences ${presetId} according to codex principles`;
}

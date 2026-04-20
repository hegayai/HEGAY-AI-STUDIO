import { OriginLaw } from "./originCodex";

export function generateOriginWorldStateV11(laws: OriginLaw[]) {
  return `
Origin‑System Codex Summary:

Total Laws: ${laws.length}

Laws:
${laws
  .map((l) => `• ${l.id}: ${l.description} (applies to: ${l.appliesTo.join(", ")})`)
  .join("\n")}
`;
}

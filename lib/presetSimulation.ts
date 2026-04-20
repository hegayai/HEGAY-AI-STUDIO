export function simulateFutureV7(
  presetId: string,
  values: Record<string, string>
) {
  const future: string[] = [];

  // 1. 10-year projection
  future.push(`
10-Year Projection:
• Cultural Shift: ${predict(values["cultural_tone"])}
• Economic Trend: ${predict(values["economic_flow"])}
• Governance Stability: ${stability(values["governance_model"])}
`);

  // 2. 50-year projection
  future.push(`
50-Year Projection:
• Mythic Resonance Cycle: ${cycle(values["mythic_fusion"])}
• Realm Influence: ${realmInfluence(values["realm_synergy"])}
• Conflict Evolution: ${conflict(values["primary_conflict"])}
`);

  // 3. 100-year projection
  future.push(`
100-Year Projection:
• Civilization Identity Drift: ${drift(values["world_name"] || values["civ_name"])}
• Hybrid Stability: ${hybrid(values["forbidden_combination"])}
• Spiritual Axis Shift: ${axis(values["spiritual_axis"])}
`);

  // 4. 500-year projection
  future.push(`
500-Year Projection:
• Long-Term Destiny: ${destiny(presetId, values)}
• Collapse Probability: ${collapse(values)}
• Mythic Legacy: ${legacy(values)}
`);

  return future.join("\n");
}

function predict(input?: string) {
  if (!input) return "Uncertain";
  return `Likely evolution toward a more ${input} expression`;
}

function stability(model?: string) {
  if (!model) return "Unknown";
  return `${model} shows moderate long-term stability`;
}

function cycle(myth?: string) {
  if (!myth) return "Cycle undefined";
  return `${myth} enters a renewal phase every 50 years`;
}

function realmInfluence(synergy?: string) {
  if (!synergy) return "Low influence";
  return `Realm synergy increases cross-realm cultural blending`;
}

function conflict(conflict?: string) {
  if (!conflict) return "Conflict unpredictable";
  return `${conflict} intensifies before resolving through cultural adaptation`;
}

function drift(name?: string) {
  if (!name) return "Identity drift unknown";
  return `${name} evolves into a new mythic archetype`;
}

function hybrid(forbidden?: string) {
  if (!forbidden) return "Stable hybrid state";
  return `Hybrid stability threatened by ${forbidden}`;
}

function axis(axis?: string) {
  if (!axis) return "Axis undefined";
  return `${axis} shifts toward a higher resonance alignment`;
}

function destiny(presetId: string, values: Record<string, string>) {
  return `The ${presetId} civilization becomes a central mythic force`;
}

function collapse(values: Record<string, string>) {
  if (values["forbidden_combination"]) return "Medium risk";
  return "Low risk";
}

function legacy(values: Record<string, string>) {
  return `Legacy defined by ${values["key_artifact"] || "its mythic artifacts"}`;
}

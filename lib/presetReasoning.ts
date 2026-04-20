export function applyReasoningV4(template: string, values: Record<string, string>) {
  const lower = template.toLowerCase();

  let mode: "world" | "culture" | "governance" | "economy" | "education" | "hybrid" = "world";

  if (lower.includes("civilization")) mode = "world";
  if (lower.includes("culture")) mode = "culture";
  if (lower.includes("govern")) mode = "governance";
  if (lower.includes("econom")) mode = "economy";
  if (lower.includes("educat")) mode = "education";
  if (lower.includes("realm") || lower.includes("hybrid")) mode = "hybrid";

  switch (mode) {
    case "world":
      return worldReasoning(template, values);
    case "culture":
      return cultureReasoning(template, values);
    case "governance":
      return governanceReasoning(template, values);
    case "economy":
      return economyReasoning(template, values);
    case "education":
      return educationReasoning(template, values);
    case "hybrid":
      return hybridReasoning(template, values);
    default:
      return template;
  }
}

function worldReasoning(template: string, values: Record<string, string>) {
  return (
    template +
    `

World Logic Expansion:
• Climate influences culture: ${values["climate"] || "Unknown"} shapes ${values["cultural_tone"] || "Undefined"}.
• Geography defines conflict: ${values["primary_region"] || "Unknown region"} drives ${values["main_conflict"] || "Undefined conflict"}.
`
  );
}

function cultureReasoning(template: string, values: Record<string, string>) {
  return (
    template +
    `

Cultural Logic Expansion:
• Rituals reflect emotion: ${values["signature_ritual"] || "Unknown ritual"} expresses ${values["primary_emotion"] || "Undefined emotion"}.
• Myth shapes expression: ${values["mythic_influence"] || "Unknown myth"} guides ${values["movement_style"] || "Undefined movement"}.
`
  );
}

function governanceReasoning(template: string, values: Record<string, string>) {
  return (
    template +
    `

Governance Logic Expansion:
• Law philosophy (${values["law_philosophy"] || "Undefined"}) determines conflict resolution (${values["conflict_resolution"] || "Unknown"}).
• Council structure (${values["council_size"] || "Unknown size"}) influences cultural stability.
`
  );
}

function economyReasoning(template: string, values: Record<string, string>) {
  return (
    template +
    `

Economic Logic Expansion:
• Commodity (${values["primary_commodity"] || "Unknown"}) drives trade routes (${values["trade_routes"] || "Undefined"}).
• Risk factor (${values["risk_factor"] || "Unknown"}) affects seasonal profit (${values["seasonal_influence"] || "Undefined"}).
`
  );
}

function educationReasoning(template: string, values: Record<string, string>) {
  return (
    template +
    `

Educational Logic Expansion:
• Learning method (${values["learning_method"] || "Unknown"}) shapes student journey (${values["student_journey"] || "Undefined"}).
• Knowledge source (${values["knowledge_source"] || "Unknown"}) defines spiritual alignment (${values["spiritual_alignment"] || "Undefined"}).
`
  );
}

function hybridReasoning(template: string, values: Record<string, string>) {
  return (
    template +
    `

Hybrid Realm Logic Expansion:
• Realm synergy (${values["realm_synergy"] || "Undefined"}) determines fusion stability.
• Forbidden combination (${values["forbidden_combination"] || "Unknown"}) impacts hybrid identity.
• Mythic fusion (${values["mythic_fusion"] || "Undefined"}) shapes emotional atmosphere (${values["emotional_atmosphere"] || "Undefined"}).
`
  );
}

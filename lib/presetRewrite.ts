export function rewriteTemplateV3(template: string, values: Record<string, string>) {
  let rewritten = template;

  // 1. Fill known variables
  for (const key in values) {
    const pattern = new RegExp(`{{\\s*${key}\\s*}}`, "g");
    rewritten = rewritten.replace(pattern, values[key] || "");
  }

  // 2. Add missing sections if template feels incomplete
  if (!rewritten.includes("Mythic Layer")) {
    rewritten += `

Mythic Layer:
• Origin Force: ${values["ancestral_force"] || "Unknown"}
• Spiritual Axis: ${values["spiritual_axis"] || "Undefined"}
• Hidden Truth: ${values["hidden_truth"] || "Unrevealed"}
`;
  }

  // 3. Add adaptive tone harmonization
  if (values["cultural_tone"]) {
    rewritten += `

Tone Harmonization:
This preset carries a ${values["cultural_tone"]} emotional resonance across all realms.
`;
  }

  // 4. Add dynamic expansion for hybrid presets
  if (template.toLowerCase().includes("realm")) {
    rewritten += `

Realm Fusion Intelligence:
• Synergy Level: High
• Fusion Stability: ${values["realm_synergy"] || "Moderate"}
• Forbidden Combination Risk: ${values["forbidden_combination"] || "Unknown"}
`;
  }

  return rewritten.trim();
}

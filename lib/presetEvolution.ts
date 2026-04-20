export function evolvePresetV5(
  template: string,
  values: Record<string, string>,
  relatedPresets: string[]
) {
  let evolved = template;

  // 1. Cross‑pollinate concepts from related presets
  if (relatedPresets.length > 0) {
    evolved += `

Cross‑Realm Influence:
This preset evolves by drawing insight from:
${relatedPresets.map((p) => `• ${p}`).join("\n")}
`;
  }

  // 2. Auto‑upgrade missing conceptual layers
  if (!evolved.includes("Cultural Layer")) {
    evolved += `

Cultural Layer:
• Expression: ${values["cultural_expression"] || "Undefined"}
• Ritual: ${values["signature_ritual"] || "Unknown"}
• Emotional Core: ${values["primary_emotion"] || "Undefined"}
`;
  }

  if (!evolved.includes("Structural Layer")) {
    evolved += `

Structural Layer:
• Governance: ${values["governance_model"] || "Undefined"}
• Economy: ${values["economic_flow"] || "Undefined"}
• Education: ${values["educational_path"] || "Undefined"}
`;
  }

  // 3. Auto‑stabilize hybrid presets
  if (template.toLowerCase().includes("realm")) {
    evolved += `

Hybrid Stability Matrix:
• Synergy: ${values["realm_synergy"] || "Moderate"}
• Fusion Risk: ${values["forbidden_combination"] || "Unknown"}
• Mythic Balance: ${values["mythic_fusion"] || "Undefined"}
`;
  }

  // 4. Auto‑refactor tone
  if (values["cultural_tone"]) {
    evolved += `

Tone Evolution:
This preset now carries a refined ${values["cultural_tone"]} resonance.
`;
  }

  return evolved.trim();
}

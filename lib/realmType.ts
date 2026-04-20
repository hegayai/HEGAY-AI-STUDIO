export function resolveRealmTypeV11(presetId: string) {
  if (presetId.includes("world")) return "World";
  if (presetId.includes("culture")) return "Culture";
  if (presetId.includes("govern")) return "Governance";
  if (presetId.includes("econom")) return "Economy";
  if (presetId.includes("educat")) return "Education";
  if (presetId.includes("realm") || presetId.includes("hybrid")) return "Hybrid";
  return "General";
}

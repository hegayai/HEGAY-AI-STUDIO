export type AutoField = {
  key: string;
  label: string;
  section: string;
  defaultValue: string;
};

export function autoExpandTemplate(template: string) {
  const missingVars = Array.from(template.matchAll(/{{\s*([\w_]+)\s*}}/g))
    .map((m) => m[1]);

  const unique = [...new Set(missingVars)];

  return unique;
}

export function autoGenerateFields(variableNames: string[]): AutoField[] {
  return variableNames.map((key) => {
    const label = key
      .replace(/_/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

    const section = inferSectionFromKey(key);

    return {
      key,
      label,
      section,
      defaultValue: "",
    };
  });
}

function inferSectionFromKey(key: string): string {
  if (key.includes("myth") || key.includes("spirit")) return "Myth & Spirit";
  if (key.includes("govern") || key.includes("law")) return "Structure";
  if (key.includes("trade") || key.includes("econom")) return "Flow";
  if (key.includes("ritual") || key.includes("culture")) return "Culture";
  if (key.includes("name") || key.includes("identity")) return "Identity";
  return "General";
}

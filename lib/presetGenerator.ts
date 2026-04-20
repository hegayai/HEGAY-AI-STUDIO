type PresetParam = {
  key: string;
  value: string;
};

export async function generatePreset(
  presetId: string,
  template: string,
  params?: PresetParam[]
) {
  const res = await fetch("/api/generate/preset", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ presetId, template, params }),
  });

  if (!res.ok) {
    throw new Error("Failed to generate preset output");
  }

  const data = await res.json();
  return data.output as string;
}

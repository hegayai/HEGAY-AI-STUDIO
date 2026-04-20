// Simple in-memory store (can be replaced with DB later)
const presetMemoryStore: Record<string, string[]> = {};

export function recordPresetGeneration(presetId: string, output: string) {
  if (!presetMemoryStore[presetId]) {
    presetMemoryStore[presetId] = [];
  }
  presetMemoryStore[presetId].push(output);

  // Limit memory to last 10 generations
  if (presetMemoryStore[presetId].length > 10) {
    presetMemoryStore[presetId].shift();
  }
}

export function getPresetHistory(presetId: string): string[] {
  return presetMemoryStore[presetId] || [];
}

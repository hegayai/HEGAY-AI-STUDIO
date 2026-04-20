// lib/models/invoke.ts

import { MODEL_REGISTRY } from "./registry";
import { ModelRequest, ModelResponse } from "./types";

export async function invokeModel(req: ModelRequest): Promise<ModelResponse> {
  try {
    const model = MODEL_REGISTRY[req.model];

    if (!model) {
      return { success: false, error: `Unknown model: ${req.model}` };
    }

    // Realm-aware prompt injection
    const realmPrefix = req.realm
      ? `[REALM: ${req.realm.toUpperCase()}]\n`
      : "";

    const finalInput = realmPrefix + req.input;

    // Simulated Flux call (replace with real provider later)
    const output = {
      model: model.id,
      type: model.type,
      input: finalInput,
      timestamp: Date.now(),
    };

    return { success: true, output };
  } catch (err: any) {
    return { success: false, error: err.message };
  }
}

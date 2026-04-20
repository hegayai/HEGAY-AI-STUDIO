// lib/models/registry.ts

import { ModelConfig } from "./types";

export const MODEL_REGISTRY: Record<string, ModelConfig> = {
  "flux-text": {
    id: "flux-text",
    label: "Flux Text Model",
    type: "text",
    provider: "flux",
  },
  "flux-image": {
    id: "flux-image",
    label: "Flux Image Model",
    type: "image",
    provider: "flux",
  },
  "flux-audio": {
    id: "flux-audio",
    label: "Flux Audio Model",
    type: "audio",
    provider: "flux",
  },
  "flux-video": {
    id: "flux-video",
    label: "Flux Video Model",
    type: "video",
    provider: "flux",
  },
};

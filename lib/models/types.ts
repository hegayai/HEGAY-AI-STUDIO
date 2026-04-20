// lib/models/types.ts

export type ModelType = "text" | "image" | "audio" | "video";

export interface ModelConfig {
  id: string;
  label: string;
  type: ModelType;
  provider: "flux";
}

export interface ModelRequest {
  model: string;
  input: string;
  realm?: string;
  options?: Record<string, any>;
}

export interface ModelResponse {
  success: boolean;
  output?: any;
  error?: string;
}

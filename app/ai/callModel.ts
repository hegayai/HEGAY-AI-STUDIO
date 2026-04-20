export interface ModelPayload {
  model: string;
  systemPrompt: string;
  userPrompt: string;
}

export interface ModelResponse {
  output: string;
}

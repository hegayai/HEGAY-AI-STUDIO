// lib/modelRouter.ts

export type Provider = "openai" | "anthropic" | "local";

export type ModelCallInput = {
  provider: Provider;
  model: string;
  system?: string;
  prompt: string;
};

export type ModelCallResult = {
  output: string;
  provider: Provider;
  model: string;
};

export async function callModel(
  input: ModelCallInput
): Promise<ModelCallResult> {
  const { provider, model, system, prompt } = input;

  // OPENAI
  if (provider === "openai") {
    return {
      output: `OPENAI(${model}) → ${system ? `[SYSTEM:${system}] ` : ""}${prompt}`,
      provider,
      model,
    };
  }

  // ANTHROPIC
  if (provider === "anthropic") {
    return {
      output: `ANTHROPIC(${model}) → ${system ? `[SYSTEM:${system}] ` : ""}${prompt}`,
      provider,
      model,
    };
  }

  // LOCAL DEV MODEL
  return {
    output: `LOCAL(${model}) → ${system ? `[SYSTEM:${system}] ` : ""}${prompt}`,
    provider: "local",
    model,
  };
}

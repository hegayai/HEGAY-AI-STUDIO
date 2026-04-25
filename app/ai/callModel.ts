import { callGroq } from "./providers/groq";
import { callDeepSeek } from "./providers/deepseek";
import { callFal } from "./providers/fal";
import { callOpenAI } from "./providers/openai";

export type Provider = "groq" | "deepseek" | "fal" | "openai" | "local";

export type ModelCallInput = {
  provider?: Provider;
  model: string;
  systemPrompt?: string;
  prompt: string;
};

export type ModelCallResult = {
  output: string;
  provider: Provider;
  model: string;
};

export async function callModel(input: ModelCallInput): Promise<ModelCallResult> {
  const provider = input.provider || "local";

  switch (provider) {
    case "groq":
      return callGroq(input);
    case "deepseek":
      return callDeepSeek(input);
    case "fal":
      return callFal(input);
    case "openai":
      return callOpenAI(input);
    default:
      return {
        output: `LOCAL(${input.model}) → ${input.prompt}`,
        provider: "local",
        model: input.model,
      };
  }
}

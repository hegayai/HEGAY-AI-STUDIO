import { ModelCallInput, ModelCallResult } from "../callModel";
import { formatPrompt } from "../utils/format";

export async function callFal({
  provider = "local",
  model,
  systemPrompt = "",
  prompt,
}: ModelCallInput): Promise<ModelCallResult> {
  const formatted = formatPrompt(systemPrompt, prompt);

  return {
    output: `FAL(${model}) → ${formatted}`,
    provider,
    model,
  };
}

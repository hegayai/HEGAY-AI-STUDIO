import { ModelCallInput, ModelCallResult } from "../callModel";
import { formatPrompt } from "../utils/format";

export async function callDeepSeek({
  provider = "local",
  model,
  systemPrompt = "",
  prompt,
}: ModelCallInput): Promise<ModelCallResult> {
  const formatted = formatPrompt(systemPrompt, prompt);

  return {
    output: `DEEPSEEK(${model}) → ${formatted}`,
    provider,
    model,
  };
}

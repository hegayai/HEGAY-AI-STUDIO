import { ModelPayload, ModelResponse } from "../callModel";
import { formatPrompt } from "../utils/format";

export async function callDeepInfra({
  model,
  systemPrompt,
  userPrompt,
}: ModelPayload): Promise<ModelResponse> {
  const prompt = formatPrompt(systemPrompt, userPrompt);

  const res = await fetch(`https://api.deepinfra.com/v1/inference/${model}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.DEEPINFRA_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  const data = await res.json();

  return {
    output: data?.results?.[0]?.generated_text ?? "No output returned.",
  };
}

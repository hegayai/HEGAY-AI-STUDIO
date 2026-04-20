import { ModelPayload, ModelResponse } from "../callModel";
import { formatPrompt } from "../utils/format";

export async function callGroq({
  model,
  systemPrompt,
  userPrompt,
}: ModelPayload): Promise<ModelResponse> {
  const prompt = formatPrompt(systemPrompt, userPrompt);

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  const data = await res.json();

  return {
    output: data?.choices?.[0]?.message?.content ?? "No output returned.",
  };
}

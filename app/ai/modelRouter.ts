import { callOpenAI } from "./providers/openai";
import { callDeepInfra } from "./providers/deepinfra";
import { callGroq } from "./providers/groq";

export async function modelRouter(
  provider: string,
  model: string,
  systemPrompt: string,
  userPrompt: string
) {
  const payload = { model, systemPrompt, userPrompt };

  switch (provider) {
    case "openai":
      return callOpenAI(payload);

    case "deepinfra":
      return callDeepInfra(payload);

    case "groq":
      return callGroq(payload);

    default:
      return { output: `Unknown provider: ${provider}` };
  }
}

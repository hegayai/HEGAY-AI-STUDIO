import { callGroq, callDeepSeek, callOpenAI } from "@/src/lib/models";

export async function hegayRouter({ messages, mode, userId }: any) {

  // FREE USERS → GROQ
  if (mode === "personal" || mode === "creative") {
    return callGroq(messages);
  }

  // WORKER AGENT → DEEPSEEK R1
  if (mode === "worker" || mode === "office") {
    return callDeepSeek(messages);
  }

  // PREMIUM USERS → OPENAI
  if (mode === "premium") {
    return callOpenAI(messages);
  }

  // DEFAULT
  return callGroq(messages);
}

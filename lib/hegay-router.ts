/**
 * Hybrid router: keeps the idea of "modes" and "messages",
 * but stays implementation-agnostic so you can later plug in
 * OpenAI, DeepSeek, Anthropic, etc.
 */

type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

type HegayRouterInput = {
  messages: ChatMessage[];
  mode: string;
  userId: string;
};

export async function hegayRouter(input: HegayRouterInput): Promise<string> {
  const { messages, mode } = input;

  // Last user message as base signal
  const lastUser = [...messages].reverse().find((m) => m.role === "user");

  const base = lastUser?.content ?? "…";

  // Simple mode-aware stub you can later replace with real engines
  switch (mode) {
    case "origin":
      return `【ORIGIN REALM】\n${base}`;
    case "mythic":
      return `【MYTHIC REALM】\n${base}`;
    case "studio":
      return `【STUDIO OPS】\n${base}`;
    default:
      return base;
  }
}

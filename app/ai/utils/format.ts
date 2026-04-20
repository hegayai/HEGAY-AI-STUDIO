export function formatPrompt(systemPrompt: string, userPrompt: string) {
  return `${systemPrompt}\n\nUser: ${userPrompt}`;
}

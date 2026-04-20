export async function callGroq(messages: any[]) {
  const res = await fetch(process.env.GROQ_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.GROQ_MODEL,
      messages,
    }),
  });

  const data = await res.json();
  return data?.choices?.[0]?.message?.content || "Groq failed.";
}

export async function callDeepSeek(messages: any[]) {
  const res = await fetch(process.env.DEEPSEEK_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.DEEPSEEK_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.DEEPSEEK_MODEL,
      messages,
    }),
  });

  const data = await res.json();
  return data?.choices?.[0]?.message?.content || "DeepSeek failed.";
}

export async function callOpenAI(messages: any[]) {
  const res = await fetch(process.env.OPENAI_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL,
      messages,
    }),
  });

  const data = await res.json();
  return data?.choices?.[0]?.message?.content || "OpenAI failed.";
}

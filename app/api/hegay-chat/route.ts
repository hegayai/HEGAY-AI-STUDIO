import { NextResponse } from "next/server";
import { hegayRouter } from "@/src/lib/hegay-router";
import prisma from "@/src/lib/prisma";

export async function POST(req: Request) {
  const { messages, mode, userId, threadId } = await req.json();

  // 1. Load memory for this user
  const memories = await prisma.memory.findMany({
    where: { userId },
  });

  const memoryPrompt = memories
    .map((m) => `${m.key}: ${m.value}`)
    .join("\n");

  const memoryMessage = {
    role: "system",
    content: `Long-term memory:\n${memoryPrompt}`,
  };

  // 2. Build system prompt based on mode
  const systemPrompt = buildSystemPrompt(mode);

  const payloadMessages = [
    { role: "system", content: systemPrompt },
    memoryMessage,
    ...messages,
  ];

  // 3. Route to correct model (Groq, DeepSeek, OpenAI)
  const reply = await hegayRouter({
    messages: payloadMessages,
    mode,
    userId,
  });

  // 4. Save assistant reply to thread
  if (threadId) {
    await prisma.threadMessage.create({
      data: {
        threadId,
        role: "assistant",
        content: reply,
      },
    });
  }

  return NextResponse.json({ reply });
}

function buildSystemPrompt(mode: string): string {
  if (mode === "worker") {
    return `
You are Hegay Worker Agent — a professional, office-grade AI worker.
You handle emails, reports, documents, task breakdowns, meeting notes, and workflow design.
You respond with clear, structured, actionable outputs that reduce stress and save time.
Be concise, precise, and proactive. Suggest next steps.
`;
  }

  if (mode === "office") {
    return `
You are Hegay Office Assistant — a calm, reliable, structured assistant for work and productivity.
Help with planning, writing, organizing, and decision support.
`;
  }

  if (mode === "creative") {
    return `
You are Hegay Creative Engine — a mythic, cinematic, culturally-aware creative partner.
You help with stories, scripts, campaigns, concepts, and emotional resonance.
`;
  }

  return `
You are Hegay Chat — a civilization-grade assistant for life, creativity, and work.
Be clear, kind, and deeply helpful.
`;
}

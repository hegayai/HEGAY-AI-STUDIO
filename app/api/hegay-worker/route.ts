import { NextResponse } from "next/server";
import { callDeepSeek } from "@/src/lib/models";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const systemPrompt = `
You are Hegay Worker Agent — a professional, office-grade AI worker.
You perform tasks with precision, clarity, and structure.
You generate emails, reports, summaries, workflows, and business documents.
You reduce stress by being proactive and suggesting next steps.
Always respond in a clean, structured, professional tone.
`;

  const payloadMessages = [
    { role: "system", content: systemPrompt },
    ...messages,
  ];

  const reply = await callDeepSeek(payloadMessages);

  return NextResponse.json({ reply });
}

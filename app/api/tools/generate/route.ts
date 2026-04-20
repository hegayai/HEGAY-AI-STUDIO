import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const tool = body.tool as string;
    const input = body.input as string;

    // -----------------------------------------------------
    // SIMULATED TOOL OUTPUT (placeholder)
    // Replace with real LLM later
    // -----------------------------------------------------
    const text = `
Tool: ${tool}
Input:
${input}

---
This is placeholder output. Replace with real model response.
`;

    return NextResponse.json({ text });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Tool processing failed" },
      { status: 500 }
    );
  }
}

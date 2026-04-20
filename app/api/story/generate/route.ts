import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const format = body.format as string;
    const prompt = body.prompt as string;

    // -----------------------------------------------------
    // SIMULATED STORY GENERATION (placeholder)
    // Replace with real LLM later
    // -----------------------------------------------------
    const text = `
Story Output
------------
Format: ${format}

Content:
${prompt}

---
This is placeholder output. Replace with real model response.
`;

    return NextResponse.json({ text });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Story generation failed" },
      { status: 500 }
    );
  }
}

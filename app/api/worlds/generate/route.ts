import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const worldName = body.worldName as string;
    const genre = body.genre as string;
    const prompt = body.prompt as string;

    // -----------------------------------------------------
    // SIMULATED WORLD GENERATION (placeholder)
    // Replace with real LLM later
    // -----------------------------------------------------
    const text = `
World Profile
-------------
Name: ${worldName || "Auto‑Generated"}
Genre: ${genre}

Description:
${prompt}

---
This is placeholder output. Replace with real model response.
`;

    return NextResponse.json({ text });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "World generation failed" },
      { status: 500 }
    );
  }
}

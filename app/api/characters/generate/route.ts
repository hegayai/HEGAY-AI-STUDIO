import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = body.name as string;
    const archetype = body.archetype as string;
    const prompt = body.prompt as string;

    // -----------------------------------------------------
    // SIMULATED CHARACTER GENERATION (placeholder)
    // Replace with real LLM later
    // -----------------------------------------------------
    const text = `
Character Profile
-----------------
Name: ${name || "Auto‑Generated"}
Archetype: ${archetype}

Description:
${prompt}

---
This is placeholder output. Replace with real model response.
`;

    return NextResponse.json({ text });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Character generation failed" },
      { status: 500 }
    );
  }
}

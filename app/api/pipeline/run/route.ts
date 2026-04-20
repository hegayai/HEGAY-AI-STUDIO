import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const steps = body.steps as string[];
    const prompt = body.prompt as string;

    // -----------------------------------------------------
    // SIMULATED PIPELINE EXECUTION (placeholder)
    // Replace with real multi-step logic later
    // -----------------------------------------------------
    const text = `
Pipeline Execution
------------------
Steps: ${steps.join(" → ")}

Prompt:
${prompt}

---
This is placeholder output. Replace with real pipeline logic.
`;

    return NextResponse.json({ text });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Pipeline execution failed" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const brandName = body.brandName as string;
    const style = body.style as string;
    const prompt = body.prompt as string;

    // -----------------------------------------------------
    // SIMULATED BRAND GENERATION (placeholder)
    // Replace with real LLM later
    // -----------------------------------------------------
    const text = `
Brand Identity
--------------
Name: ${brandName || "Auto‑Generated"}
Style: ${style}

Description:
${prompt}

---
This is placeholder output. Replace with real model response.
`;

    return NextResponse.json({ text });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Brand generation failed" },
      { status: 500 }
    );
  }
}

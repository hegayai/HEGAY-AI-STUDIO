import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = body.name as string;
    const role = body.role as string;
    const lineage = body.lineage as string;
    const tier = body.tier as string;
    const bio = body.bio as string;

    // -----------------------------------------------------
    // SIMULATED PASSPORT GENERATION (placeholder)
    // Replace with real identity logic later
    // -----------------------------------------------------
    const text = `
Creator Passport
----------------
Name: ${name}
Role: ${role}
Lineage: ${lineage}
Tier: ${tier}

Bio:
${bio}

---
This is placeholder output. Replace with real model response.
`;

    return NextResponse.json({ text });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Passport generation failed" },
      { status: 500 }
    );
  }
}

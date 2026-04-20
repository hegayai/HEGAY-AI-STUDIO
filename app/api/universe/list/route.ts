import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  try {
    // -----------------------------------------------------
    // SIMULATED UNIVERSE LIST (placeholder)
    // Replace with real database or model output later
    // -----------------------------------------------------
    const universes = [
      {
        id: "1",
        name: "Aurelia Prime",
        type: "Mythic",
        description: "A golden mythic universe shaped by ancestral resonance.",
      },
      {
        id: "2",
        name: "Neo‑Lagoon",
        type: "Afrofuturism",
        description: "A neon‑lit oceanic civilization powered by emotional physics.",
      },
    ];

    return NextResponse.json({ universes });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to load universes" },
      { status: 500 }
    );
  }
}

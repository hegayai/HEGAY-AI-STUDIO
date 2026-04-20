import { NextResponse } from "next/server";

export const runtime = "nodejs";

type WriterMode = "copy" | "script" | "lore";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const mode = (body.mode || "copy") as WriterMode;
    const prompt = (body.prompt || "") as string;
    const tone = (body.tone || "neutral") as string;
    const length = (body.length || "medium") as string;

    // -----------------------------------------------------
    // SIMULATED GENERATION (placeholder)
    // Replace with real LLM / API call later
    // -----------------------------------------------------
    const baseIntro =
      mode === "copy"
        ? "Generated copywriting draft:\n\n"
        : mode === "script"
        ? "Generated script segment:\n\n"
        : "Generated lore / worldbuilding passage:\n\n";

    const lengthHint =
      length === "short"
        ? "Concise response."
        : length === "long"
        ? "Extended, detailed response."
        : "Balanced response.";

    const toneHint = `Tone: ${tone}.`;

    const text = `${baseIntro}${prompt}\n\n---\n${toneHint} ${lengthHint}`;

    return NextResponse.json({ text });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Writer generation failed" },
      { status: 500 }
    );
  }
}

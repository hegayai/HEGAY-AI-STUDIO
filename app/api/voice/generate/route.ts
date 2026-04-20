import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const prompt = body.prompt as string;
    const voice = body.voice as string;
    const emotion = body.emotion as string;

    // -----------------------------------------------------
    // SIMULATED VOICE GENERATION (placeholder)
    // Replace with real TTS model later
    // -----------------------------------------------------
    const url = "/generated-voice.mp3";

    return NextResponse.json({ url });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Voice generation failed" },
      { status: 500 }
    );
  }
}

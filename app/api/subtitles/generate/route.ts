import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const mode = form.get("mode") as string;
    const language = form.get("language") as string;
    const file = form.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // -----------------------------------------------------
    // SIMULATED TRANSCRIPTION (placeholder)
    // Replace with Whisper / Deepgram / AssemblyAI later
    // -----------------------------------------------------
    const text = `
1
00:00:00,000 --> 00:00:02,000
[Simulated subtitles for ${mode} in ${language}]

2
00:00:02,000 --> 00:00:04,000
Replace this with real transcription output.
`;

    return NextResponse.json({ text });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Subtitle generation failed" },
      { status: 500 }
    );
  }
}

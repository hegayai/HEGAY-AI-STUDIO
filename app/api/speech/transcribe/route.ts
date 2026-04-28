import { NextResponse } from "next/server";

// ⭐ Provider architecture
import { fal } from "@/app/ai/providers/fal";

// ⭐ Unified model router
import { modelRouter } from "@/src/core/model-router";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const mode = form.get("mode") as string; // "transcribe" | "translate"
    const language = form.get("language") as string | null;
    const file = form.get("file") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "No audio file uploaded" },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const fileBuffer = Buffer.from(await file.arrayBuffer());

    // ⭐ Unified provider-based speech transcription
    const result = await modelRouter({
      model: "speech-transcribe",
      input: {
        file: fileBuffer,
        filename: file.name,
        mode,
        language
      },
      provider: fal,
      type: "audio"
    });

    if (!result?.text) {
      return NextResponse.json(
        { error: "Speech transcription failed", raw: result },
        { status: 500 }
      );
    }

    return NextResponse.json({
      text: result.text,
      words: result.words || null,          // timestamped words
      segments: result.segments || null,    // diarized segments
      language: result.language || null     // detected language
    });

  } catch (error) {
    console.error("Speech transcription error:", error);
    return NextResponse.json(
      {
        error: "Speech transcription failed",
        details: String(error)
      },
      { status: 500 }
    );
  }
}

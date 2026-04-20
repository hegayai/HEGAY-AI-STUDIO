import { NextResponse } from "next/server";
import path from "path";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const prompt = form.get("prompt") as string;
    const style = form.get("style") as string;
    const duration = form.get("duration") as string;

    // -----------------------------------------------------
    // SIMULATED GENERATION (Replace with real model later)
    // -----------------------------------------------------
    const url = "/generated-music.mp3";

    return NextResponse.json({ url });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Music generation failed" }, { status: 500 });
  }
}

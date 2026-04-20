import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { prompt, model, voice, seed, mode } = body;

  const res = await fetch(process.env.AUDIO_TEXT_TO_AUDIO_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.AUDIO_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
      model,
      voice,
      seed,
      mode,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || data?.audio || null,
  });
}

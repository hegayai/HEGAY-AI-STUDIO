import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    prompt,
    audio,
    strength,
    preserveTone,
    style,
    model,
    seed,
    mode,
  } = body;

  const res = await fetch(process.env.AUDIO_GUIDED_GENERATION_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.AUDIO_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
      audio,
      strength,
      preserveTone,
      style,
      model,
      seed,
      mode,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || data?.audio || null,
  });
}

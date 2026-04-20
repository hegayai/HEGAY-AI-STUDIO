// app/api/video/generate-guided/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    prompt,
    video,
    strength,
    preserveMotion,
    style,
    model,
    seed,
    steps,
    cfgScale,
    mode,
  } = body;

  const res = await fetch(process.env.VIDEO_GUIDED_GENERATION_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.VIDEO_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
      video,
      strength,
      preserveMotion,
      style,
      model,
      seed,
      steps,
      cfgScale,
      mode,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || data?.video || null,
  });
}

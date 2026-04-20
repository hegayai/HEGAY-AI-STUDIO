// app/api/video/transform/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    video,
    style,
    motionStrength,
    colorGrade,
    detailEnhance,
    model,
    mode,
  } = body;

  const res = await fetch(process.env.VIDEO_TRANSFORM_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.VIDEO_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      video,
      style,
      motionStrength,
      colorGrade,
      detailEnhance,
      model,
      mode,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || data?.video || null,
  });
}

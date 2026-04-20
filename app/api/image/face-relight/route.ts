// app/api/image/face-relight/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    image,
    lightDirection,
    intensity,
    warmth,
    shadowSoftness,
    highlightBoost,
    mode,
  } = body;

  const res = await fetch(process.env.IMAGE_FACE_RELIGHT_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.IMAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      lightDirection,
      intensity,
      warmth,
      shadowSoftness,
      highlightBoost,
      mode,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || null,
    relit: data?.relit || null,
  });
}

// app/api/image/anime-enhance/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    image,
    lineStrength,
    colorPop,
    smoothness,
    shadingBoost,
    eyeEnhance,
    mode,
  } = body;

  const res = await fetch(process.env.IMAGE_ANIME_ENHANCE_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.IMAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      lineStrength,
      colorPop,
      smoothness,
      shadingBoost,
      eyeEnhance,
      mode,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || null,
    anime: data?.anime || null,
  });
}

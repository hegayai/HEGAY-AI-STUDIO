// app/api/image/cyberpunk/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    image,
    neonIntensity,
    contrastBoost,
    hologramEffect,
    edgeGlow,
    saturationShift,
    glitchLevel,
    mode,
  } = body;

  const res = await fetch(process.env.IMAGE_CYBERPUNK_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.IMAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      neonIntensity,
      contrastBoost,
      hologramEffect,
      edgeGlow,
      saturationShift,
      glitchLevel,
      mode,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || null,
    cyberpunk: data?.cyberpunk || null,
  });
}

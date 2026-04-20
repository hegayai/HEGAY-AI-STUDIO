// app/api/image/watercolor/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    image,
    pigmentDensity,
    edgeBleed,
    textureStrength,
    softness,
    colorBlend,
    mode,
  } = body;

  const res = await fetch(process.env.IMAGE_WATERCOLOR_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.IMAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      pigmentDensity,
      edgeBleed,
      textureStrength,
      softness,
      colorBlend,
      mode,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || null,
    watercolor: data?.watercolor || null,
  });
}

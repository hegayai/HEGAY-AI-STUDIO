// app/api/image/oil-paint/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    image,
    strokeSize,
    textureDepth,
    pigmentVariance,
    smoothness,
    detailLevel,
    mode,
  } = body;

  const res = await fetch(process.env.IMAGE_OIL_PAINT_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.IMAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      strokeSize,
      textureDepth,
      pigmentVariance,
      smoothness,
      detailLevel,
      mode,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || null,
    oilPaint: data?.oilPaint || null,
  });
}

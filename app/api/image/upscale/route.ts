// app/api/image/upscale/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    image,
    scale,
    mode,
    enhanceFace,
    sharpen,
  } = body;

  const res = await fetch(process.env.IMAGE_UPSCALE_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.IMAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      scale,
      mode,
      enhanceFace,
      sharpen,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || null,
    upscaled: data?.upscaled || null,
  });
}

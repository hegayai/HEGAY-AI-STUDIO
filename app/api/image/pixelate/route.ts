// app/api/image/pixelate/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    image,
    blockSize,
    intensity,
    shape,
    mode,
  } = body;

  const res = await fetch(process.env.IMAGE_PIXELATE_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.IMAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      blockSize,
      intensity,
      shape,
      mode,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || null,
    pixelated: data?.pixelated || null,
  });
}

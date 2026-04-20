// app/api/image/relight/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    image,
    lightDirection,
    intensity,
    color,
    softness,
    ambient,
    mode,
  } = body;

  const res = await fetch(process.env.IMAGE_RELIGHT_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.IMAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      lightDirection,
      intensity,
      color,
      softness,
      ambient,
      mode,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || null,
    relight: data?.relight || null,
  });
}

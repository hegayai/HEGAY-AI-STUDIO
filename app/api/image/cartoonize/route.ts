// app/api/image/cartoonize/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    image,
    style,
    lineStrength,
    colorSaturation,
    smoothness,
    mode,
  } = body;

  const res = await fetch(process.env.IMAGE_CARTOONIZE_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.IMAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      style,
      lineStrength,
      colorSaturation,
      smoothness,
      mode,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || null,
    cartoon: data?.cartoon || null,
  });
}

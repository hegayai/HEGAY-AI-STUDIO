// app/api/image/motion/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    image,
    depth,
    motionType,
    direction,
    intensity,
    duration,
  } = body;

  const res = await fetch(process.env.IMAGE_MOTION_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.IMAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      depth,
      motionType,
      direction,
      intensity,
      duration,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || null,
    motion: data?.motion || null,
  });
}

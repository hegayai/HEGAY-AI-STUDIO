// app/api/image/chromatic-aberration/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    image,
    redShift,
    greenShift,
    blueShift,
    intensity,
    radial,
    mode,
  } = body;

  const res = await fetch(process.env.IMAGE_CHROMATIC_ABERRATION_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.IMAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      redShift,
      greenShift,
      blueShift,
      intensity,
      radial,
      mode,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || null,
    aberration: data?.aberration || null,
  });
}

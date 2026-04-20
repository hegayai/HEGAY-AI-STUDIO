// app/api/image/dehaze/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    image,
    strength,
    colorRestore,
    clarityBoost,
    mode,
  } = body;

  const res = await fetch(process.env.IMAGE_DEHAZE_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.IMAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      strength,
      colorRestore,
      clarityBoost,
      mode,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || null,
    dehazed: data?.dehazed || null,
  });
}

// app/api/image/colorize/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    image,
    mode,
    palette,
    strength,
  } = body;

  const res = await fetch(process.env.IMAGE_COLORIZE_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.IMAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      mode,
      palette,
      strength,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || null,
    colorized: data?.colorized || null,
  });
}

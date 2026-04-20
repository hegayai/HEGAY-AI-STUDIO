// app/api/image/color-balance/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    image,
    shadows,
    midtones,
    highlights,
    preserveLuminosity,
    mode,
  } = body;

  const res = await fetch(process.env.IMAGE_COLOR_BALANCE_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.IMAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      shadows,
      midtones,
      highlights,
      preserveLuminosity,
      mode,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || null,
    balanced: data?.balanced || null,
  });
}

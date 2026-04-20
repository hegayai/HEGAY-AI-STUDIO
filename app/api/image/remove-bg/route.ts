// app/api/image/remove-bg/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    image,
    mode,
    refine,
    feather,
    replaceColor,
  } = body;

  const res = await fetch(process.env.IMAGE_REMOVE_BG_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.IMAGE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image,
      mode,
      refine,
      feather,
      replaceColor,
    }),
  });

  const data = await res.json();

  return NextResponse.json({
    url: data?.meta?.url || data?.url || null,
    cutout: data?.cutout || null,
  });
}

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { lore } = await req.json();

  const res = await fetch(process.env.ORIGIN_LORE_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.ORIGIN_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ lore }),
  });

  const data = await res.json();
  return NextResponse.json(data);
}

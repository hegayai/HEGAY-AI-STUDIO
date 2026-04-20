import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { id } = await req.json();

  const res = await fetch(process.env.MARKETPLACE_DETAIL_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.MARKETPLACE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id }),
  });

  const data = await res.json();
  return NextResponse.json(data);
}

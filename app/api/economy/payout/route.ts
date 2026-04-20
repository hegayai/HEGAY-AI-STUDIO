import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { amount } = await req.json();

  const res = await fetch(process.env.ECONOMY_PAYOUT_API_URL!, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.ECONOMY_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount }),
  });

  const data = await res.json();
  return NextResponse.json(data);
}

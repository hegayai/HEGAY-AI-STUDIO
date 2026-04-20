import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(process.env.ECONOMY_TRANSACTIONS_API_URL!, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${process.env.ECONOMY_API_KEY}`,
    },
  });

  const data = await res.json();
  return NextResponse.json(data);
}

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { userId, tier } = await req.json();

  if (!userId || !tier) {
    return NextResponse.json({ message: "Invalid data." }, { status: 400 });
  }

  await prisma.user.update({
    where: { id: userId },
    data: { subscription: tier },
  });

  return NextResponse.json({ message: "Subscription updated." });
}

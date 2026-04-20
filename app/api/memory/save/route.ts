import { NextResponse } from "next/server";
import prisma from "@/src/lib/prisma";

export async function POST(req: Request) {
  const { userId, key, value } = await req.json();

  const memory = await prisma.memory.upsert({
    where: { userId_key: { userId, key } },
    update: { value },
    create: { userId, key, value },
  });

  return NextResponse.json({ success: true, memory });
}

import { NextResponse } from "next/server";
import prisma from "@/src/lib/prisma";

export async function POST(req: Request) {
  const { userId } = await req.json();

  const memories = await prisma.memory.findMany({
    where: { userId },
  });

  return NextResponse.json({ memories });
}

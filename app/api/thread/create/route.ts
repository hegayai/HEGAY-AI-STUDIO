import { NextResponse } from "next/server";
import prisma from "@/src/lib/prisma";

export async function POST(req: Request) {
  const { userId, title } = await req.json();

  const thread = await prisma.thread.create({
    data: { userId, title },
  });

  return NextResponse.json({ thread });
}

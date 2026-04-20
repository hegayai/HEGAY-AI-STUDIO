import { NextResponse } from "next/server";
import prisma from "@/src/lib/prisma";

export async function POST(req: Request) {
  const { threadId, role, content } = await req.json();

  const message = await prisma.threadMessage.create({
    data: { threadId, role, content },
  });

  return NextResponse.json({ message });
}

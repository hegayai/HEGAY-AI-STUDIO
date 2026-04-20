import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { userId, title } = await req.json();

    if (!userId || !title) {
      return NextResponse.json(
        { error: "Missing userId or title" },
        { status: 400 }
      );
    }

    const thread = await prisma.thread.create({
      data: {
        userId,
        title,
      },
    });

    return NextResponse.json({ thread });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Thread creation failed" },
      { status: 500 }
    );
  }
}

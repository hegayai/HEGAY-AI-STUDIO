import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma"; // your Prisma client

export async function POST(req: Request) {
  const { email, password, isAdult } = await req.json();

  if (!email || !password || !isAdult) {
    return NextResponse.json({ message: "Invalid data." }, { status: 400 });
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json({ message: "Email already in use." }, { status: 400 });
  }

  const passwordHash = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      email,
      passwordHash,
      isAdult: true,
      emailVerified: false,
      subscription: "FREE",
    },
  });

  // TODO: send verification email with token link

  return NextResponse.json({
    message: "Account created. Please verify your email to activate.",
  });
}

import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return NextResponse.json({ message: "Invalid credentials." }, { status: 401 });
  }

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) {
    return NextResponse.json({ message: "Invalid credentials." }, { status: 401 });
  }

  if (!user.isAdult) {
    return NextResponse.json({ message: "You must be 18+ to use this platform." }, { status: 403 });
  }

  if (!user.emailVerified) {
    return NextResponse.json({ message: "Please verify your email before logging in." }, { status: 403 });
  }

  // TODO: set auth cookie / session token
  return NextResponse.json({ message: "Login successful." });
}

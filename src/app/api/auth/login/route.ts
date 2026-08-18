import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/db";
import { User } from "@/models";
import { verifyPassword, signToken, SESSION_COOKIE, sessionCookieOptions } from "@/lib/auth";
import { jsonError } from "@/lib/api";

export async function POST(request: Request) {
  const { email, password } = await request.json().catch(() => ({}));
  if (!email || !password) return jsonError("Email and password are required.");

  await dbConnect();
  const user = await User.findOne({ email: String(email).toLowerCase() });
  if (!user || !(await verifyPassword(password, user.passwordHash))) {
    return jsonError("Invalid credentials.", 401);
  }

  const token = await signToken({
    sub: String(user._id),
    email: user.email,
    name: user.name,
    role: "admin",
  });

  const res = NextResponse.json({
    ok: true,
    user: { id: String(user._id), name: user.name, email: user.email },
  });
  res.cookies.set(SESSION_COOKIE, token, sessionCookieOptions);
  return res;
}

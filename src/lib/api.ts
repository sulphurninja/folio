import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";

export async function requireAdmin() {
  const session = await getSession();
  if (!session || session.role !== "admin") {
    return null;
  }
  return session;
}

export function jsonOk(data: Record<string, unknown> = {}, init?: ResponseInit) {
  return NextResponse.json({ ok: true, ...data }, init);
}

export function jsonError(message: string, status = 400) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

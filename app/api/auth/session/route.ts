import { NextRequest, NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebase-admin";

const SESSION_DURATION = 60 * 60 * 24 * 5 * 1000; // 5 days in ms

export async function POST(req: NextRequest) {
  const { idToken } = await req.json();

  if (!idToken) {
    return NextResponse.json({ error: "Missing idToken" }, { status: 400 });
  }

  // Se Admin SDK não estiver configurado (sem private key), retorna ok
  // o dashboard usa onAuthStateChanged do client para proteção
  if (!process.env.FIREBASE_ADMIN_PRIVATE_KEY) {
    return NextResponse.json({ ok: true, mode: "client-auth" });
  }

  try {
    const sessionCookie = await adminAuth().createSessionCookie(idToken, {
      expiresIn: SESSION_DURATION,
    });

    const res = NextResponse.json({ ok: true });
    res.cookies.set("__session", sessionCookie, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: SESSION_DURATION / 1000,
      path: "/",
    });
    return res;
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set("__session", "", { maxAge: 0, path: "/" });
  return res;
}

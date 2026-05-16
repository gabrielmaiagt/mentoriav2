import { NextRequest, NextResponse } from "next/server";

// Proteção feita via onAuthStateChanged no client (firebase/auth)
// O proxy apenas passa adiante — sem depender de secret no edge
export async function proxy(_req: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/dashboard/:path*"],
};

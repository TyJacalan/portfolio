import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl;
  url.searchParams.set("host", req.headers.get("host"));
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: "/"
};


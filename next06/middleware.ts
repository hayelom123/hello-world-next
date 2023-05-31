import { NextResponse } from "next/server";

export function middleware(req: Request) {
  console.log(req.headers.get("origin"));

  return NextResponse.next();
}

export const config = {
  //   matcher: "/api/:path*",
  matcher: ["/api/:path*", "/dashboard/:path*"],
};

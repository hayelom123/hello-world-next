import { NextResponse } from "next/server";

export default function handle(  ) {
  return NextResponse.json({ message: "Page not found" }, { status: 404 });
}

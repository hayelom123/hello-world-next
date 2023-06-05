"use client";

import { NextResponse } from "next/server";

function error({ error, reset }: { error: Error; reset: () => void }) {
  return NextResponse.json({ error, reset });
}

export default error;

import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const res = await fetch(process.env.DATA_API_KEY as string);
  const todos: Todo[] = await res.json();
  return NextResponse.json(todos);
}

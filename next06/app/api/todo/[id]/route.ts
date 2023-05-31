import { NextResponse } from "next/server";

type Params = {
  params: { id: string };
};

export async function GET(req: Request, { params }: Params) {
  const res = await fetch(`${process.env.DATA_API_KEY}/${params.id}`);
  const todo: Todo = await res.json();
  if (!todo.id) return NextResponse.json({ message: "Todo not found" });
  return NextResponse.json(todo);
}

export async function POST(request: Request) {
  const { userId, title }: Partial<Todo> = await request.json();

  if (!userId || !title)
    return NextResponse.json({ message: "Missing required data" });

  const res = await fetch(`${process.env.DATA_API_KEY}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "API-Key": "API_KEY",
    },
    body: JSON.stringify({
      userId,
      title,
      completed: false,
    }),
  });

  const newTodo: Todo = await res.json();

  return NextResponse.json(newTodo);
}
export async function PUT(request: Request) {
  const { userId, id, title, completed }: Todo = await request.json();

  if (!userId || !id || !title || typeof completed !== "boolean")
    return NextResponse.json({ message: "Missing required data" });

  const res = await fetch(`${process.env.DATA_API_KEY}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "API-Key": "API_KEY",
    },
    body: JSON.stringify({
      userId,
      title,
      completed,
    }),
  });

  const updatedTodo: Todo = await res.json();

  return NextResponse.json(updatedTodo);
}

export async function DELETE(req: Request, { params: { id } }: Params) {
  if (!id) return NextResponse.json({ message: "Todo id required" });
  const res = await fetch(`${process.env.DATA_API_KEY}/${id}`, {
    method: "DELETE",
  });
  const todo: Todo = await res.json();
  if (!todo.id) return NextResponse.json({ message: "Todo not found" });
  return NextResponse.json({ message: `Todo ${id} deleted` });
}

import { NextRequest, NextResponse } from "next/server";
type Props = {
  params: { postId: string };
};
export async function GET(req: NextRequest, res: Response) {
  console.log(res);
  const { searchParams } = new URL(req.url);
  return NextResponse.json(
    { msg: "Error ", searchParams: res },
    { status: 500 }
  );
}

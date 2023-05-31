export async function GET(req: Request) {
  return new Response(JSON.stringify({ data: "Done" }), {
    status: 200,
  });
}

export async function GET(request) {
  return new Response(
    JSON.stringify({ message: 'whatup dawg' }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}

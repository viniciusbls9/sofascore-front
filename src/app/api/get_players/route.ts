export async function GET() {
  const players = await fetch(`${process.env.API_URL}/get_users`).then((res) =>
    res.json(),
  )

  return Response.json(players)
}

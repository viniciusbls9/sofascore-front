import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams

    const loggedUserID = searchParams.get('logged_user_id')

    const players = await fetch(
      `${process.env.API_URL}/get_users?logged_user_id=${loggedUserID}`,
      {
        cache: 'no-cache',
      },
    ).then((res) => res.json())

    return Response.json(players)
  } catch (error) {
    console.error(error)
  }
}

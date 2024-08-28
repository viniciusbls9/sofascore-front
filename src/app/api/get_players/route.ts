import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams

    const loggedUserID = searchParams.get('logged_user_id')

    if (!loggedUserID) {
      NextResponse.json({ error: 'logged user ID is required' })
    }

    const players = await fetch(
      `${process.env.API_URL}/get_users?logged_user_id=${loggedUserID}`,
      {
        cache: 'no-cache',
      },
    ).then((res) => res.json())

    if (players?.error) {
      return NextResponse.json({ error: 'Players not found' }, { status: 404 })
    }

    return Response.json(players)
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}

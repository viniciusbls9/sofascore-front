import { PlayerProps } from '@/types/types'
import { NextRequest } from 'next/server'

interface GetPlayerRequest {
  player: PlayerProps
  error: string
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams

    const userIdParam = searchParams.get('user_id')
    const loggedInUseridParam = searchParams.get('logged_in_user_id')

    const player: GetPlayerRequest = await fetch(
      `${process.env.API_URL}/get_user_by_id?user_id=${userIdParam}&logged_in_user_id=${loggedInUseridParam}`,
    ).then((res) => res.json())

    if (player?.error) {
      return null
    }

    return Response.json(player)
  } catch (error) {
    console.error(error)
  }
}

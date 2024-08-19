import { PlayerProps } from '@/types/types'
import { NextRequest } from 'next/server'

interface GetPlayerRequest {
  player: PlayerProps
  error: string
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams

    const emailParam = searchParams.get('email')

    const player: GetPlayerRequest = await fetch(
      `${process.env.API_URL}/get_user_by_email?email=${emailParam}`,
    ).then((res) => res.json())

    if (player?.error) {
      return null
    }

    return Response.json(player)
  } catch (error) {
    console.error(error)
  }
}

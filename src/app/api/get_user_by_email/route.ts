import { PlayerProps } from '@/types/types'
import { NextRequest, NextResponse } from 'next/server'

interface GetPlayerRequest {
  player: PlayerProps
  error: string
}

export async function GET(request: NextRequest): Promise<Response> {
  try {
    const searchParams = request.nextUrl.searchParams

    const emailParam = searchParams.get('email')

    if (!emailParam) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const player: GetPlayerRequest = await fetch(
      `${process.env.API_URL}/get_user_by_email?email=${emailParam}`,
    ).then((res) => res.json())

    if (player?.error) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    return NextResponse.json(player)
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}

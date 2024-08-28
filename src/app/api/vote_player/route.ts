import { NextResponse } from 'next/server'

export async function PATCH(request: Request) {
  try {
    const body = await request.json()

    const responseVote = await fetch(`${process.env.API_URL}/vote_user`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (!responseVote.ok) {
      return NextResponse.json({
        error: `Erro na API final: ${responseVote.statusText}`,
      })
    }

    const data = await responseVote.json()

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}

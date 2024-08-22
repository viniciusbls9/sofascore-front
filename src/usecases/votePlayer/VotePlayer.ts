/* eslint-disable camelcase */
import { PlayerProps } from '@/types/types'

interface VotePlayerRequest {
  pass_vote: number
  marking_vote: number
  quality_vote: number
  shot_vote: number
  velocity_vote: number
  voterId: string
  votedUserId: string
}

const votePlayer = async ({
  pass_vote,
  marking_vote,
  quality_vote,
  shot_vote,
  velocity_vote,
  voterId,
  votedUserId,
}: VotePlayerRequest): Promise<PlayerProps> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ROUTE_URL}/api/vote_player`,
    {
      method: 'PATCH',
      body: JSON.stringify({
        pass_vote,
        marking_vote,
        quality_vote,
        shot_vote,
        velocity_vote,
        voter_id: voterId,
        voted_user_id: votedUserId,
      }),
    },
  )

  return res.json()
}

export default votePlayer

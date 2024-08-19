import { PlayerProps } from '@/types/types'

const votePlayer = async ({
  voterId,
  votedUserId,
}: {
  voterId: string
  votedUserId: string
}): Promise<PlayerProps> => {
  const res = await fetch(`http://localhost:3000/api/vote_player`, {
    method: 'PATCH',
    body: JSON.stringify({ voter_id: voterId, voted_user_id: votedUserId }),
  })

  return res.json()
}

export default votePlayer

import { PlayerProps } from '@/types/types'

const getPlayers = async (loggedUserId: string): Promise<PlayerProps[]> => {
  const res = await fetch(
    `${process.env.ROUTE_URL}/api/get_players?logged_user_id=${loggedUserId}`,
    {
      method: 'GET',
    },
  )

  return res.json()
}

export default getPlayers

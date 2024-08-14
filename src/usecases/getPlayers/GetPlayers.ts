import { PlayerProps } from '@/types/types'

const getPlayers = async (): Promise<PlayerProps[]> => {
  const res = await fetch(`${process.env.ROUTE_URL}/api/get_players`, {
    method: 'GET',
  })

  return res.json()
}

export default getPlayers

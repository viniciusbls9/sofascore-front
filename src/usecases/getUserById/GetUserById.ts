import { PlayerProps } from '@/types/types'

const getUserById = async (
  userId: string,
  loggedInUserId: string,
): Promise<PlayerProps> => {
  const getPlayerById = await fetch(
    `${process.env.ROUTE_URL}/api/get_user_by_id?user_id=${userId}&logged_in_user_id=${loggedInUserId}`,
    {
      method: 'GET',
    },
  )

  return getPlayerById.json()
}

export default getUserById

import { PlayerProps } from '@/types/types'

const getUserByEmail = async (userEmail: string): Promise<PlayerProps> => {
  const getPlayerByEmail = await fetch(
    `${process.env.ROUTE_URL}/api/get_user_by_email?email=${userEmail}`,
    {
      method: 'GET',
    },
  )

  return getPlayerByEmail.json()
}

export default getUserByEmail

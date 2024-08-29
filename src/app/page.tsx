import { auth } from '@/usecases/auth'
import { redirect } from 'next/navigation'
import CardPlayers from './components/CardPlayers/CardPlayers'
import getPlayers from '@/usecases/getPlayers/GetPlayers'
import getUserByEmail from '@/usecases/getUserByEmail/GetUserByEmail'

const HomePage = async () => {
  const session = await auth()

  if (!session?.user) redirect('/auth')
  const loggedUserID = await getUserByEmail(session?.user?.email as string)

  if (!loggedUserID?.id) {
    redirect('/unauthorized')
  }

  const players = await getPlayers(loggedUserID?.id)

  return <CardPlayers players={players} loggedUserID={loggedUserID?.id} />
}

export default HomePage

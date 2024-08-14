import { auth } from '@/usecases/auth'
import { redirect } from 'next/navigation'
import CardPlayers from './components/CardPlayers/CardPlayers'
import getPlayers from '@/usecases/getPlayers/GetPlayers'

const HomePage = async () => {
  const session = await auth()

  if (!session?.user) redirect('/auth')

  const players = await getPlayers()

  return <CardPlayers players={players} />
}

export default HomePage

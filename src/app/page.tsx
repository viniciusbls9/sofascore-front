import { auth } from '@/usecases/auth'
import { redirect } from 'next/navigation'
import CardPlayer from './components/CardPlayer/CardPlayer'
import getPlayers from '@/usecases/getPlayers/GetPlayers'

const HomePage = async () => {
  const session = await auth()

  if (!session?.user) redirect('/auth')

  const players = await getPlayers()

  return <CardPlayer players={players} />
}

export default HomePage

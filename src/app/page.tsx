import { auth } from '@/services/auth'
import { redirect } from 'next/navigation'
import CardPlayer from './components/CardPlayer/CardPlayer'
import { PlayerProps } from '@/types/types'

const getData = async (): Promise<PlayerProps[]> => {
  const res = await fetch(`${process.env.API_URL}/get_users`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const HomePage = async () => {
  const session = await auth()

  if (!session?.user) redirect('/auth')

  const data = await getData()

  return <CardPlayer players={data} />
}

export default HomePage

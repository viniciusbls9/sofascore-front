import { auth } from '@/usecases/auth'
import { redirect } from 'next/navigation'
import getUserByEmail from '@/usecases/getUserByEmail/GetUserByEmail'
import getUserById from '@/usecases/getUserById/GetUserById'
import PlayerDetailComponent from '@/app/components/PlayerDetail/PlayerDetail'

const PlayerDetailPage = async ({ params }: { params: { id: string } }) => {
  const session = await auth()

  if (!session?.user) redirect('/auth')
  const loggedUserID = await getUserByEmail(session.user.email as string)

  const playerDetailData = await getUserById(params.id, loggedUserID.id)

  return <PlayerDetailComponent {...playerDetailData} />
}

export default PlayerDetailPage

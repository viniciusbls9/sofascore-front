import { auth } from '@/services/auth'
import Image from 'next/image'
import { redirect } from 'next/navigation'

const HomePage = async () => {
  const session = await auth()

  if (!session?.user) redirect('/api/auth/signin')

  return (
    <>
      <h1>{session.user.name}</h1>
      <Image
        src={session?.user?.image as string}
        alt={session.user.name as string}
        width={72}
        height={72}
        className="rounded-full"
      />
    </>
  )
}

export default HomePage

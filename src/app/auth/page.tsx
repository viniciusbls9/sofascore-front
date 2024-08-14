import { AuthForm } from './_components/auth-form'
import { auth } from '@/usecases/auth'
import { handleSocialLogin } from '@/utils/actions'
import { redirect } from 'next/navigation'

const AuthPage = async () => {
  const session = await auth()

  if (session?.user) redirect('/')

  return <AuthForm loginAction={handleSocialLogin} />
}

export default AuthPage

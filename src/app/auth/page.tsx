import { AuthForm } from './_components/auth-form'
import { auth } from '@/services/auth'
import { handleSocialLogin } from '@/app/actions'
import { redirect } from 'next/navigation'

const AuthPage = async () => {
  const session = await auth()

  if (session?.user) redirect('/')

  return <AuthForm loginAction={handleSocialLogin} />
}

export default AuthPage

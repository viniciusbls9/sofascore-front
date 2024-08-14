/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'

import { signIn } from '@/usecases/auth'

export async function handleSocialLogin(formData: any) {
  const action = formData.get('action')

  await signIn(action, { redirectTo: '/' })
}

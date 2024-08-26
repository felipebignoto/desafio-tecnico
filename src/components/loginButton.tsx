'use client'

import { LogIn } from 'lucide-react'
import { signIn } from 'next-auth/react'

export default function LoginButton() {
  return (
    <button
      className={`flex  gap-2 p-2 hover:underline bg-gray-100 w-full rounded-md hover:text-gray-500`}
      onClick={() => signIn('github')}
    >
      <LogIn />
      Fazer login
    </button>
  )
}

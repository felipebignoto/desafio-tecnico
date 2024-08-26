'use client'

import { LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'
interface LogoutButtonProps {
  text?: string | undefined | null
}

export default function LogoutButton(props: LogoutButtonProps) {
  return (
    <button
      className={`flex  gap-2 p-2 hover:underline bg-gray-100 w-full rounded-md hover:text-gray-500`}
      onClick={() => signOut()}
    >
      <LogOut />
      Sair {props.text}
    </button>
  )
}

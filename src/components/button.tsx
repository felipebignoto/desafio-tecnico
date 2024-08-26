'use client'

import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
interface ButtonProps {
  text?: string
  url: string
  classname?: string
  children?: React.ReactNode
  logged_in?: boolean
  color?: 'blue' | 'green' | 'red' | 'yellow'
  bg?: boolean
}

export default function Button(props: ButtonProps) {
  const loggedIn = props.logged_in ?? false
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    if (!loggedIn) {
      signIn('github', { callbackUrl: props.url })
    } else {
      router.push(props.url)
    }
  }

  return (
    <Link
      href={props.url}
      className={`hover:text-${props.color}-600 transition`}
    >
      <button
        onClick={handleClick}
        className={`flex gap-2 p-2 hover:underline ${props.bg ? '' : 'bg-gray-100'} w-full rounded-md`}
      >
        {props.children}
        {props.text ? <span>{props.text}</span> : null}
      </button>
    </Link>
  )
}

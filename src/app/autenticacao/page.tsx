import Button from '@/components/button'
import LoginButton from '@/components/loginButton'
import { getServerSession } from 'next-auth'

export default async function SignIn() {
  const session = await getServerSession()
  return (
    <div>
      {session?.user ? (
        <Button url="/" logged_in text="Página inicial" />
      ) : (
        <LoginButton></LoginButton>
      )}
    </div>
  )
}

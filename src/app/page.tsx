import Button from '@/components/button'
import LoginButton from '@/components/loginButton'
import LogoutButton from '@/components/logoutButton'
import Title from '@/components/title'
import authOptions from '@/utils/authOptions'
import {
  ListCollapse,
  Pencil,
  Search,
  Trash,
  UserRoundPlus,
} from 'lucide-react'
import { Session, getServerSession } from 'next-auth'

export default async function Home() {
  const session = (await getServerSession(authOptions)) as Session | null

  return (
    <div>
      <Title
        text="Gerenciamento de usuários"
        description="Faça login para gerenciar os usuários do sistema."
      />
      <div className="flex flex-col w-fit m-auto gap-4">
        <Button
          text="Cadastrar novo usuário"
          url="/usuarios/cadastro"
          color="green"
        >
          <UserRoundPlus />
        </Button>
        <Button text="Visualizar todos usuários" url="/usuarios" color="blue">
          <ListCollapse />
        </Button>
        <Button
          text="Buscar usuário pelo id"
          url="/usuarios/busca"
          color="blue"
        >
          <Search />
        </Button>
        <Button
          text="Atualizar usuário pelo id"
          url="/usuarios/atualizacao"
          color="yellow"
        >
          <Pencil />
        </Button>
        <Button
          text="Deletar usuário pelo id"
          url="/usuarios/remocao"
          color="red"
        >
          <Trash />
        </Button>

        {session?.user ? (
          <LogoutButton text={session.user.name} />
        ) : (
          <LoginButton />
        )}
      </div>
    </div>
  )
}

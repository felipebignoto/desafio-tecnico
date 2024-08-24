import Button from '@/components/button'
import Title from '@/components/title'
import { ListCollapse, Search, Trash, UserRoundPlus } from 'lucide-react'

export default function Home() {
  return (
    <div>
      <Title text="Gerenciamento de usuários" />
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
          <Search></Search>
        </Button>
        <Button
          text="Atualizar usuário pelo id"
          url="/usuarios/atualizacao"
          color="yellow"
        >
          <Search></Search>
        </Button>
        <Button
          text="Deletar usuário pelo id"
          url="/usuarios/remocao"
          color="red"
        >
          <Trash></Trash>
        </Button>
      </div>
    </div>
  )
}

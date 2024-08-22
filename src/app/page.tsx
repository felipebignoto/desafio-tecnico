export default function Home() {
  return (
    <div>
      <h1>Desafio técnico</h1>
      <div className="flex flex-col border-2 border-primary-dark bg-primary-light">
        <button>Cadastrar novo usuário</button>
        <button>Listar todos usuários</button>
        <button>Procurar usuário pelo id</button>
      </div>
    </div>
  )
}

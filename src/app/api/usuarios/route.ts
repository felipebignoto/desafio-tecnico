import { NextResponse } from 'next/server'
import UsuarioRepoJSON from '@/core/usuarioRepoJSON'
import Usuario from '@/core/usuario'

const repo = new UsuarioRepoJSON()

export async function GET() {
  const users = await repo.listar()
  return NextResponse.json(users)
}

export async function POST(request: Request) {
  const { nome, email, idade } = await request.json()
  const novoUsuario = new Usuario(nome, email, idade)
  await repo.salvar(novoUsuario)
  return NextResponse.json(novoUsuario)
}

export async function DELETE(request: Request) {
  const { id } = await request.json()
  const usuarioExistente = await repo.buscarPorId(id)

  if (!usuarioExistente) {
    return NextResponse.json(
      { error: 'Usuário não encontrado' },
      { status: 404 },
    )
  }

  await repo.excluir(id)
  return NextResponse.json({ message: 'Usuário excluído com sucesso' })
}

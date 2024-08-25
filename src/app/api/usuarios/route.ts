import { NextResponse } from 'next/server'
import UsuarioRepoJSON from '@/core/usuarioRepoJSON'
import Usuario from '@/core/usuario'

const repo = new UsuarioRepoJSON()

export async function GET() {
  const users = await repo.listar()
  return NextResponse.json(users)
}

export async function POST(request: Request) {
  const { nome, email, idade, id } = await request.json()

  const usuarioExistente = await repo.verificarPorEmail(email)

  if (id) {
    await repo.excluir(id)
  } else {
    if (usuarioExistente) {
      return NextResponse.json(
        { error: 'Email já cadastrado' },
        { status: 400 },
      )
    }
  }

  const novoUser = new Usuario(nome, email, idade, id)
  await repo.salvar(novoUser)
  return NextResponse.json(novoUser)
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

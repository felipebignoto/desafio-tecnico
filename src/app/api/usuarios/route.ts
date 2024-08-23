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

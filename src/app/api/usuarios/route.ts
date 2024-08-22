import { NextResponse } from 'next/server'
import UsuarioRepoJSON from '@/core/usuarioRepoJSON'

const repo = new UsuarioRepoJSON()

export async function GET(request: Request) {
  const users = await repo.listar()
  return NextResponse.json(users)
}

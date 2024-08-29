import { NextResponse } from 'next/server'
import UsuarioRepoMongo from '@/core/usuarioRepoMongo'
import { UUID } from 'crypto'

const repo = new UsuarioRepoMongo()

export async function GET(
  request: Request,
  { params }: { params: { id: UUID } },
) {
  const { id } = params
  const usuarioExistente = await repo.buscarPorId(id)

  if (!usuarioExistente) {
    return NextResponse.json(
      { error: 'Usuário não encontrado' },
      { status: 404 },
    )
  }

  return NextResponse.json(usuarioExistente)
}

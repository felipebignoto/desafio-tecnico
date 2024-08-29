import { UUID } from 'crypto'
import Usuario from './usuario'
import UsuarioRepo from './usuarioRepo'
import { connectToDatabase } from '@/utils/mongoConnnect.mjs'

export default class UsuarioRepoMongo implements UsuarioRepo {
  private collection = 'usuarios'

  async salvar(usuario: Usuario): Promise<Usuario> {
    const db = await connectToDatabase()
    const collection = db.collection(this.collection)

    if (await this.verificarPorId(usuario.id)) {
      // Atualizar usuário existente
      await collection.updateOne({ id: usuario.id }, { $set: usuario })
    } else {
      // Inserir novo usuário
      await collection.insertOne(usuario)
    }

    return usuario
  }

  async excluir(id: UUID): Promise<void> {
    const db = await connectToDatabase()
    const collection = db.collection(this.collection)
    await collection.deleteOne({ id })
  }

  async listar(): Promise<Usuario[]> {
    const db = await connectToDatabase()
    const collection = db.collection(this.collection)
    const usuarios = await collection.find().toArray()
    return usuarios as Usuario[]
  }

  async buscarPorId(id: UUID): Promise<Usuario | null> {
    const db = await connectToDatabase()
    const collection = db.collection(this.collection)
    const usuario = await collection.findOne({ id })
    return usuario || null
  }

  async verificarPorId(id: UUID): Promise<boolean> {
    const db = await connectToDatabase()
    const collection = db.collection(this.collection)
    const usuario = await collection.findOne({ id })
    return !!usuario
  }

  async verificarPorEmail(email: string): Promise<boolean> {
    const db = await connectToDatabase()
    const collection = db.collection(this.collection)
    const usuario = await collection.findOne({ email })
    return !!usuario
  }
}

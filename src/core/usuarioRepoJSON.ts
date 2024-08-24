import UsuarioRepo from './usuarioRepo'
import Usuario from './usuario'
import { UUID } from 'crypto'
import path from 'path'
import fs from 'fs'

export default class UsuarioRepoJSON implements UsuarioRepo {
  private filePath: string

  constructor() {
    this.filePath = path.join(process.cwd(), 'src', 'data', 'usuario.json')
  }

  private async writeData(data: Usuario[]): Promise<void> {
    await fs.promises.writeFile(this.filePath, JSON.stringify(data, null, 2))
  }

  private async readData(): Promise<Usuario[]> {
    const data = await fs.promises.readFile(this.filePath, 'utf8')
    return JSON.parse(data) as Usuario[]
  }

  async salvar(usuario: Usuario): Promise<Usuario> {
    const usuarios = await this.readData()
    if (await this.verificarPorId(usuario.usuarioId)) {
      // Usuario existe - tenho que atualizar os dados
      const index = usuarios.findIndex((u) => u.id === usuario.usuarioId)
      usuarios[index] = usuario
    } else {
      // novo usuario
      usuarios.push(usuario)
    }

    await this.writeData(usuarios)
    return usuario
  }

  async excluir(id: UUID): Promise<void> {
    console.log(id)
    let usuarios = await this.readData()
    usuarios = usuarios.filter((u) => u.id !== id)
    await this.writeData(usuarios)
  }

  async listar(): Promise<Usuario[]> {
    const usuarios = await this.readData()
    return usuarios
  }

  async buscarPorId(id: UUID): Promise<Usuario | null> {
    const usuarios = await this.readData()
    const usuarioEncontrado = usuarios.find((u) => u.id === id)
    return usuarioEncontrado || null
  }

  async verificarPorId(id: UUID): Promise<boolean> {
    const usuarios = await this.readData()
    if (usuarios.find((u) => u.id === id)) {
      return true
    }
    return false
  }
}

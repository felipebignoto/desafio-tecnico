import { UUID } from 'crypto'
import Usuario from './usuario'

export default interface UsuarioRepo {
  salvar(usuario: Usuario): Promise<Usuario>
  excluir(id: UUID): Promise<void>
  listar(): Promise<Usuario[]>
  buscarPorId(id: UUID): Promise<Usuario | null>
}

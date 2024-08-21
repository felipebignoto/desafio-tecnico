import { randomUUID, UUID } from 'crypto'

export default class Usuario {
  private id: UUID
  private nome: string
  private email: string
  private idade: number

  constructor(
    nome: string,
    email: string,
    idade: number,
    id: UUID = randomUUID(),
  ) {
    this.id = id
    this.nome = nome
    this.email = email
    this.idade = idade
  }

  get usuarioId() {
    return this.id
  }

  get usuarioNome() {
    return this.nome
  }

  set usuarioNome(nome: string) {
    this.nome = nome
  }

  get usuarioEmail() {
    return this.email
  }

  set usuarioEmail(email: string) {
    this.email = email
  }

  get usuarioIdade() {
    return this.idade
  }

  set usuarioIdade(idade: number) {
    this.idade = idade
  }
}

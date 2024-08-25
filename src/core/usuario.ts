import { randomUUID, UUID } from 'crypto'

export default class Usuario {
  public id: UUID
  public nome: string
  public email: string
  public idade: number

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
}

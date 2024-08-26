'use client'

import Usuario from '@/core/usuario'
import { Pencil, Trash } from 'lucide-react'
import Button from './button'

interface TableProps {
  usuarios: Usuario[]
}

export default function Table(props: TableProps) {
  const usuarios = props.usuarios
  return (
    <table className="border-2 border-primaryColor-dark text-sm md:text-base m-1">
      <thead className="border border-primaryColor-dark">
        <tr>
          <th className="border-r border-primaryColor-dark text-center md:p-1">
            Nome
          </th>
          <th className="border-r border-primaryColor-dark text-center md:p-1">
            Email
          </th>
          <th className="border-r border-primaryColor-dark text-center md:p-1">
            Idade
          </th>
          <th className="border-r border-primaryColor-dark text-center md:p-1">
            ID
          </th>
          <th className="text-center">Ações</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.length > 0 ? (
          usuarios.map((usuario, i) => (
            <tr
              key={usuario.id}
              className={`border border-primaryColor-dark w-full ${i % 2 === 0 ? 'bg-gray-200' : ''}`}
            >
              <td className=" text-center border-r border-primaryColor-dark md:p-1 break-words">
                {usuario.nome}
              </td>
              <td className="text-center border-r border-primaryColor-dark md:p-1">
                {usuario.email}
              </td>
              <td className="text-center border-r border-primaryColor-dark md:p-1">
                {usuario.idade}
              </td>
              <td className="  text-center border-r border-primaryColor-dark md:p-1 break-all whitespace-normal">
                {usuario.id}
              </td>
              <td className=" text-center p-1 flex flex-col md:flex-row">
                <Button
                  url={`/usuarios/atualizacao?id=${usuario.id}`}
                  bg
                  color="blue"
                >
                  <Pencil className="h-4 w-4 md:h-6 md:w-6"></Pencil>
                </Button>
                <Button
                  bg
                  url={`/usuarios/remocao?id=${usuario.id}`}
                  color="red"
                >
                  <Trash className="h-4 w-4 md:h-6 md:w-6"></Trash>
                </Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5} className="text-center">
              Nenhum usuário cadastrado
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

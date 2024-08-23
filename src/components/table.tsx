'use client'

import Usuario from '@/core/usuario'

interface TableProps {
  usuarios: Usuario[]
}

export default function Table(props: TableProps) {
  const usuarios = props.usuarios

  return (
    <table className="border-2 border-primary-dark">
      <thead className="border border-primary-dark">
        <tr>
          <th className="border-r border-primary-dark text-center p-1">Nome</th>
          <th className="border-r border-primary-dark text-center p-1">
            Email
          </th>
          <th className="border-r border-primary-dark text-center p-1">
            Idade
          </th>
          <th className="border-r border-primary-dark text-center p-1">ID</th>
          <th className="text-center">Ações</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.length > 0 ? (
          usuarios.map((usuario, i) => (
            <tr
              key={usuario.id}
              className={`border border-primary-dark ${i % 2 === 0 ? 'bg-gray-200' : ''}`}
            >
              <td className="text-center border-r border-primary-dark p-1">
                {usuario.nome}
              </td>
              <td className="text-center border-r border-primary-dark p-1">
                {usuario.email}
              </td>
              <td className="text-center border-r border-primary-dark p-1">
                {usuario.idade}
              </td>
              <td className="text-center border-r border-primary-dark p-1">
                {usuario.id}
              </td>
              <td className="text-center p-1">Ações</td>
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

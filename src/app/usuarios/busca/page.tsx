'use client'

import Button from '@/components/button'
import Title from '@/components/title'
import { useState } from 'react'
import Usuario from '@/core/usuario'
import { toast } from '@/components/ui/use-toast'
import Table from '@/components/table'

export default function Busca() {
  const [id, setId] = useState('')
  const [usuario, setUsuario] = useState<Usuario[]>([])
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const response = await fetch(`/api/usuarios/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.ok) {
      const data = await response.json()
      setUsuario([data])
      setId('')
      setError(null)
      toast({
        description: 'Usuário encontrado com sucesso!',
        className: 'bg-green-600 text-white',
      })
    } else {
      setError('Usuário não encontrado')
      setUsuario([])
      setId('')
      toast({
        description: 'Usuário não encontrado',
        variant: 'destructive',
      })
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mt-4 flex flex-col justify-center">
        <Title text="Busque um usuário"></Title>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 items-center p-2"
        >
          <div className="flex gap-2 p-2">
            <label>ID:</label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
              className="bg-gray-200 outline-none focus:bg-gray-100"
            />
          </div>

          <div className="flex gap-2">
            <Button url="/" color="red" text="Cancelar"></Button>
            <button
              className="hover:text-green-600 transition flex gap-2 p-2 hover:underline bg-gray-100 w-full rounded-md"
              type="submit"
            >
              Buscar Usuário
            </button>
          </div>
        </form>

        {usuario && <Table usuarios={usuario} />}
      </div>
    </div>
  )
}

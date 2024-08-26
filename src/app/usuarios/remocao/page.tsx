'use client'

import Title from '@/components/title'
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Button from '@/components/button'
import { toast } from '@/components/ui/use-toast'

export default function Remocao() {
  const [id, setId] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()
  const usuarioId = searchParams.get('id')

  useEffect(() => {
    if (usuarioId) {
      setId(usuarioId)
    }
  }, [usuarioId])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const response = await fetch('/api/usuarios', {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ id }),
    })

    if (response.ok) {
      toast({
        description: 'Usuário removido com sucesso!',
        className: 'bg-green-600 text-white',
      })
      router.push('/usuarios')
    } else {
      setId('')
      toast({
        description: 'Usuário não encontrado',
        variant: 'destructive',
      })
    }
  }

  return (
    <div className="flex justify-center items-center">
      <div className="mt-4">
        <Title text="Remova um usuário"></Title>
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
              size={36}
              className="w-full max-w-xs md:max-w-none md:w-max bg-gray-200 flex outline-none focus:bg-gray-100"
            />
          </div>

          <div className="flex gap-2">
            <Button url="/" color="red" text="Cancelar"></Button>
            <button
              className="hover:text-green-600 transition flex gap-2 p-2 hover:underline bg-gray-100 w-full rounded-md"
              type="submit"
            >
              Remover Usuário
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

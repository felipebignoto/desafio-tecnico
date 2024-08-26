'use client'

import Button from '@/components/button'
import Title from '@/components/title'
import { useToast } from '@/components/ui/use-toast'
import Usuario from '@/core/usuario'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Atualização() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [idade, setIdade] = useState('')
  const [id, setId] = useState('')
  const [usuario, setUsuario] = useState<Usuario>()
  const router = useRouter()
  const { toast } = useToast()
  const searchParams = useSearchParams()
  const usuarioId = searchParams.get('id')

  useEffect(() => {
    if (usuarioId) {
      fetch(`/api/usuarios/${usuarioId}`)
        .then((response) => response.json())
        .then((data) => {
          setUsuario(data)
          setNome(data.nome)
          setId(data.id)
          setEmail(data.email)
          setIdade(data.idade)
        })
        .catch(() => {
          toast({
            description: 'Falha ao buscar usuário',
            variant: 'destructive',
          })
        })
    }
  }, [usuarioId, toast])

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    const usuarioAtualizado = { nome, email, idade, id }

    const response = await fetch('/api/usuarios', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(usuarioAtualizado),
    })

    if (response.ok) {
      toast({
        description: 'Usuário atualizado com sucesso!',
        className: 'bg-green-600 text-white',
      })
      router.push('/usuarios')
    } else {
      toast({
        description: 'Falha ao atualizar usuário',
        variant: 'destructive',
      })
    }
  }

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
      setUsuario(data)
      setNome(data.nome)
      setId(data.id)
      setEmail(data.email)
      setIdade(data.idade)
      toast({
        description: 'Usuário encontrado com sucesso!',
        className: 'bg-green-600 text-white',
      })
    } else {
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
          <div className="flex gap-2 p-2 w-fit">
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
              Buscar Usuário
            </button>
          </div>
        </form>
      </div>

      {usuario && (
        <form
          onSubmit={handleUpdate}
          className="flex flex-col gap-2 items-center p-2"
        >
          <div className="flex flex-col gap-1 p-2">
            <label>Nome:</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="bg-gray-200 outline-none focus:bg-gray-100"
            />
          </div>
          <div className="flex flex-col gap-1 p-2">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-gray-200 outline-none focus:bg-gray-100"
            />
          </div>
          <div className="flex flex-col gap-1 p-2">
            <label>Idade:</label>
            <input
              type="number"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
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
              Atualizar Usuário
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

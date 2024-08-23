'use client'

import Title from '@/components/title'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/button'

export default function Cdastro() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [idade, setIdade] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const novoUsuario = { nome, email, idade }

    const response = await fetch('/api/usuarios', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(novoUsuario),
    })

    if (response.ok) {
      router.push('/usuarios')
    } else {
      console.error('Falha ao criar usuario')
    }
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=" border border-primary-main mt-4">
        <Title text="Cadastre um novo usuário"></Title>
        <form
          onSubmit={handleSubmit}
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
              type="text"
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
              className=" hover:text-green-600 transition flex gap-2 p-2 hover:underline bg-gray-100 w-full rounded-md"
              type="submit"
            >
              Criar Usuário
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

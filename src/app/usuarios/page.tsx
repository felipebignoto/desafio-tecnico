'use client'

import { useEffect, useState } from 'react'
import Title from '@/components/title'
import Usuario from '@/core/usuario'
import Table from '@/components/table'

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/usuarios')
      .then((response) => response.json())
      .then((data) => {
        console.log('Dados recebidos:', data)
        setLoading(false)
        setUsuarios(data)
      })
      .catch((error) => console.error('Erro ao buscar usuários:', error))
  }, [])

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <Title text="Lista de usuarios"></Title>
        {loading ? (
          <div className="fle justify-center text-center">Carregando...</div>
        ) : (
          <Table usuarios={usuarios} />
        )}
      </div>
    </div>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Desafio técnico - BrandMonitor',
  description: 'Aplicação de um CRUD utilizando Next, React e TypeScript',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

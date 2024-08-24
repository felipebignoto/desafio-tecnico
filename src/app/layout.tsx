import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import { Toaster } from '@/components/ui/toaster'

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
      <body className="bg-secondary-main h-screen">
        <div className="flex items-center justify-center p-4">
          <Link
            href="/"
            className="text-4xl underline text-primary-dark hover:text-primary-main"
          >
            Desafio técnico
          </Link>
        </div>
        {children}
        <Toaster></Toaster>
      </body>
    </html>
  )
}

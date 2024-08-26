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
      <body className="bg-secondaryColor-main h-screen">
        <div className="flex items-center justify-center p-4">
          <Link
            href="/"
            className="text-3xl md:text-4xl underline text-primaryColor-dark hover:text-primaryColor-main"
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

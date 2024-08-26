// middleware.ts
import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  // Protege rotas que começam com "/usuarios"
  if (req.nextUrl.pathname.startsWith('/usuarios')) {
    if (!token) {
      return NextResponse.redirect(new URL('/autenticacao', req.url))
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/usuarios/:path*'],
}

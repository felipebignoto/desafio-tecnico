// middleware.ts
import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

// Defina a URL de login
const LOGIN_URL = '/api/auth/signin'

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })

  if (
    req.nextUrl.pathname.startsWith('/usuarios') ||
    req.nextUrl.pathname.startsWith('/api/usuarios')
  ) {
    if (!token) {
      return NextResponse.redirect(new URL(LOGIN_URL, req.url))
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/usuarios/:path*', '/api/usuarios/:path*'],
}

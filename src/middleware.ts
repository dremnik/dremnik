import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // If user visits /about, /portfolio, or /blog, rewrite to home page
  if (pathname === '/about' || pathname === '/portfolio' || pathname === '/blog') {
    return NextResponse.rewrite(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/about', '/portfolio', '/blog']
}
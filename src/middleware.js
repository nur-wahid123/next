import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log("ini middleware");
  const a = request.cookies.has('token')
  if (!a) return NextResponse.json({ error: "Login DUlu" })
  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/api/data'],
}
import { NextResponse } from 'next/server';

export function middleware(req) {
  const data = 1;
  if (data === 1) return NextResponse.next();
  return new Response('Authentication required', { status: 401 });
}

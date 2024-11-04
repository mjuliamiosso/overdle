import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  let userId = request.cookies.get('userId')?.value;

  if (!userId) {
    userId = uuidv4();
    response.cookies.set('userId', userId, { path: '/', httpOnly: true });
  }

  return response;
}

export const config = {
  matcher: '/api/:path*'
};
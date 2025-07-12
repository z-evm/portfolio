import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
//export default createMiddleware(routing);
// Custom redirect for root path
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/about', request.url));
  }
  // Fallback to next-intl middleware for other routes
  return createMiddleware(routing)(request);
}
 
export const config = {
  // Match only internationalized pathnames
  matcher: [
      '/',
      '/((?!api|_next|_vercel|.*\\..*).*)',
      '/(en|id)/:path*'
    ]
};
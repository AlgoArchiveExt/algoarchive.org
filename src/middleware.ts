import { NextURL } from 'next/dist/server/web/next-url';
import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Start Auth Middleware
  const publicRoutes = ['/', '/waitlist'];

  const pathname = request.nextUrl.pathname;

  const cookie = cookies();
  const signedIn = cookie.get('signed_in');
  const hasCookie = cookie.has('signed_in');

  const response = NextResponse.next();
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

  if (!publicRoutes.includes(pathname) && !signedIn) {
    console.log('locked');
    
    const response2 = NextResponse.redirect(new NextURL('/', request.nextUrl.origin));
    response2.cookies.set('locked', 'true');
    response2.cookies.set('signed_in_cookie_exists', hasCookie ? 'true' : 'false');
    response2.cookies.set('typeof_signed_in_cookie', typeof signedIn);

    return response2;
  }

  return response;
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Run for api routes - good to uncomment later, we should lock api calls behind auth.
    // '/(api|trpc)(.*)',
  ],
};

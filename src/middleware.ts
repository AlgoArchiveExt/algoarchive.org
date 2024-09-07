import { NextURL } from 'next/dist/server/web/next-url';
import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Start Auth Middleware
  const publicRoutes = ['/', '/waitlist'];

  const pathname = request.nextUrl.pathname;

  const cookie = cookies();
  const signedIn = cookie.get('signedIn');

  if (!publicRoutes.includes(pathname) && !signedIn) {
    console.log('locked');

    // It's possible request.nextURL.origin doesn't exist on production. Will remove this comment if it does.
    return NextResponse.redirect(new NextURL('/', request.nextUrl.origin));
  }
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Run for api routes - good to uncomment later, we should lock api calls behind auth.
    // '/(api|trpc)(.*)',
  ],
};

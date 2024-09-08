import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export function GET(request: NextRequest) {
  const cookie = cookies();

  const token = request.nextUrl.searchParams.get('token');

  if (!token || token === 'undefined') {
    cookie.delete('signed_in');

    return;
  }

  cookie.set('signed_in', 'true', {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    domain: process.env.COOKIE_DOMAIN || '.algoarchive.org',
  });

  return NextResponse.json({ message: 'hi this worked' });
}

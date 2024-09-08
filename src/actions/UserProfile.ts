'use server';

import { cookies } from 'next/headers';

export async function writeSignedInHeader(githubAccessToken: string | null) {
  const cookie = cookies();

  if (!githubAccessToken) {
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
}

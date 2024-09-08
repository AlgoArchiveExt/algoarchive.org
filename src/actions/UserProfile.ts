'use server';

import Cookies from 'js-cookie';

export async function writeSignedInHeader(githubAccessToken: string | null) {
  const cookie = Cookies;

  if (!githubAccessToken) {
    cookie.remove('signed_in');

    return;
  }

  cookie.set('signed_in', '', {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    domain: 'algoarchive.org',
  });
}

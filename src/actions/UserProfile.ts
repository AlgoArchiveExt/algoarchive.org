'use server';

import { cookies } from 'next/headers';

export async function writeSignedInHeader(githubAccessToken: string | null) {
  const cookie = cookies();
  console.log('made cookies');

  if (!githubAccessToken) {
    console.log('UAT was null, deleting cookie');

    cookie.delete('signedIn');

    return;
  }

  cookie.set('signedIn', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: true,
    maxAge: 60 * 60 * 24 * 7, // 1 week
  });
}

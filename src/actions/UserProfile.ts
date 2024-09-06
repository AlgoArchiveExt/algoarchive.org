'use server';

import { cookies } from 'next/headers';

export async function writeSignedInHeader(githubAccessToken: string | null) {
  const cookie = cookies();

  if (!githubAccessToken) {
    cookie.delete('signedIn');

    return;
  }

  cookie.set('signedIn', '');
}

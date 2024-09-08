import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { token, userRepoPath } = body;

  if (!token) {
    return NextResponse.json({ error: 'GitHub Access Token is not set' }, { status: 500 });
  }

  try {
    const response = await fetch(`https://api.algoarchive.org/v1/solutions/${userRepoPath}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const json = await response.json();

      throw new Error(`HTTP error! status: ${JSON.stringify(json)}`);
    }

    const data = await response.json();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

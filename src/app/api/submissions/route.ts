import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: Request) {
  const body = await request.json();
  console.log(body);
  const { githubAccessToken: token, selectedRepoFullName: userRepoPath } = body;

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
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

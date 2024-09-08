import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  const userInfo = JSON.parse(localStorage.getItem('algoArchive') || '{}');

  const token = userInfo.githubAccessToken;
  const userRepoPath = userInfo.selectedRepoFullName;

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
    console.error('Error when fetching solutions:', error);

    return NextResponse.json({ error: 'Failed to fetch submissions' }, { status: 500 });
  }
}

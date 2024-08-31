import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const token = process.env.GITHUB_ACCESS_TOKEN;

  if (!token) {
    return NextResponse.json({ error: 'GitHub Access Token is not set' }, { status: 500 });
  }

  try {
    const response = await fetch('http://localhost:8000/api/v1/solutions/algoarchiveext/commit-testing', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
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
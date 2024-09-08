'use client';

import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import PaginationControls from './PaginationControls';

interface Submission {
  id: number;
  problem_name: string;
  description: string;
  notes: string;
  code: string;
  language: string;
}

export default function Submissions() {
  const searchParams = useSearchParams(); // This is a hook from next/navigation that allows us to access the URL query parameters to properly track the current page and items per page and allow users to navigate between pages while staying on their current page even after reloading the page
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userDataString = localStorage.getItem('algoArchive');

    const fetchSubmissions = async () => {
      setLoading(true);
      setError(null);

      try {
        if (!userDataString) return null;

        const userData = JSON.parse(userDataString);

        const response = await fetch('/api/submissions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: userData.githubAccessToken, userRepoPath: userData.selectedRepoFullName }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${JSON.stringify(response.body)}`);
        }

        const data = await response.json();
        setSubmissions(data.solutions);
      } catch (error) {
        console.error('Error when fetching solutions:', error);
        setError('Failed to fetch your submissions');
        throw error;
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  const renderedCards = submissions.map((submission) => (
    <Card key={submission.id} className="flex h-80 w-full flex-col bg-gradient-to-r from-algo-gray to-[#222222]">
      <CardHeader className="shrink-0 items-center justify-center">
        <h2 className="text-center text-2xl font-extrabold text-algo-yellow">{submission.problem_name}</h2>
      </CardHeader>
      <CardBody className="grow overflow-auto">
        {submission.description !== '' && (
          <>
            <h3 className="text-lg font-bold text-[#5edefe]">Problem Description:</h3>
            <p className="text-base">{submission.description}</p>
          </>
        )}
        {submission.notes !== '' && (
          <>
            <h3 className="text-lg font-bold text-[#9048b4]">Notes: </h3>
            <p className="text-base">{submission.notes}</p>
          </>
        )}
        {submission.code !== '' && (
          <>
            <h3 className="text-lg font-bold text-[#3fc86f]">Your Solution: </h3>
            <p className="text-base">{submission.code}</p>
          </>
        )}
      </CardBody>
      <CardFooter>
        <h3 className="absolute right-2 pb-4 text-sm font-semibold text-algo-yellow">
          Solved Using: {submission.language}
        </h3>
      </CardFooter>
    </Card>
  ));

  const currPage = searchParams.get('currPage') ?? '1';
  const itemsPerPage = searchParams.get('itemsPerPage') ?? '5';
  const totalPages = Math.ceil(renderedCards.length / Number(itemsPerPage));
  const start = (Number(currPage) - 1) * Number(itemsPerPage);
  const end = start + Number(itemsPerPage);
  const entries = renderedCards.slice(start, end);

  if (loading) {
    return <p className="text-xl font-extrabold text-[#3fc86f]">Fetching submissions...</p>;
  }

  return (
    <div className="w-full items-center justify-center">
      {error ? (
        <p className="text-xl font-extrabold text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {entries.map((card, cardIndex) => (
            <div key={cardIndex}>{card}</div>
          ))}
        </div>
      )}
      {entries.length > 0 && (
        <div className="mt-4 flex items-center justify-center">
          <PaginationControls
            hasNextPage={end < renderedCards.length}
            hasPrevPage={start > 0}
            totalPages={totalPages}
          />
        </div>
      )}
    </div>
  );
}

// export default Submissions;

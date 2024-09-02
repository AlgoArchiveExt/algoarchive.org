import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { useSearchParams } from 'next/navigation';
import PaginationControls from './PaginationControls';

interface Submission {
    id: number;
    problem_name: string;
    description: string;
    notes: string;
    code: string;
    language: string;
}

{ 
/* used to test the pagination controls    
const data = [
    'entry 1',
    'entry 2',
    'entry 3',
    'entry 4',
    'entry 5',
    'entry 6',
    'entry 7',
    'entry 8',
    'entry 9',
    'entry 10',
    'entry 11',
    'entry 12',
    'entry 13',
    'entry 14',
    'entry 15',
    'entry 16',
    'entry 17',
    'entry 18',
    'entry 19',
    'entry 20',
    'entry 21',
    'entry 22',
    'entry 23',
    'entry 24',
    'entry 25',
    'entry 26',
    'entry 27',
    'entry 28',
    'entry 29',
    'entry 30',
    'entry 31',
    'entry 32',
    'entry 33',
    'entry 34',
    'entry 35',
    'entry 36',
    'entry 37',
    'entry 38',
    'entry 39',
    'entry 40',
]
*/}

const Submissions = () => {
    const searchParams = useSearchParams(); // This is a hook from next/navigation that allows us to access the URL query parameters to properly track the current page and items per page and allow users to navigate between pages while staying on their current page even after reloading the page
    const [submissions, setSubmissions] = useState<Submission[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchSubmissions = async () => {
        try {
          const response = await fetch('/api/submissions', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          });
  
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
  
          const data = await response.json();
          console.log(data);
          setSubmissions(data.solutions);
        } catch (error) {
          console.error('Error when fetching solutions:', error);
          setError('Failed to fetch your submissions');
        } finally {
          setLoading(false);
      }
    };
  
      fetchSubmissions();
    }, []);
    
    const renderedCards = submissions.map((submission) => (
        <Card key={submission.id} className='w-full h-60 flex flex-col bg-gradient-to-r from-algo-gray to-[#222222]'>
            <CardHeader className="items-center justify-center flex-shrink-0">
                <h2 className="text-algo-yellow truncate text-center text-large font-bold">{submission.problem_name}</h2>
            </CardHeader>
            <CardBody className="flex-grow overflow-auto">
                {submission.description !== '' && (
                    <>
                        <h3 className="text-base font-semibold text-[#5edefe]">Problem Description:</h3>
                        <p className="text-sm truncate">{submission.description}</p>
                    </>
                )}
                {submission.notes !== '' && (
                    <>
                        <h3 className="text-base font-semibold text-[#9048b4]">Notes: </h3>
                        <p className="text-sm truncate">{submission.notes}</p>
                    </>
                )}
                {submission.code !== '' && (
                    <>
                        <h3 className="text-base font-semibold text-[#3fc86f]">Your Solution: </h3>
                        <p className="text-sm truncate">{submission.code}</p>
                    </>
                )}
            </CardBody>
            <CardFooter >
                <h3 className="text-xs font-semibold text-algo-yellow absolute right-2 pb-4">Solved Using: {submission.language}</h3>
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
        return <p className="text-[#3fc86f] text-xl font-extrabold">Fetching submissions...</p>;
    }

    return (
        <div className='w-full'>
            {error ? (
                <p className="text-red-500 text-xl font-extrabold">{error}</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
                    {entries.map((card, cardIndex) => (
                        <div key={cardIndex}>{card}</div>
                    ))}
                </div>
            )}
            {entries.length > 0 && (
                <div className="flex justify-center items-center mt-4">
                    <PaginationControls hasNextPage={end < renderedCards.length} hasPrevPage={start > 0} totalPages={totalPages} />
                </div>
            )}
        </div>
    );
};

export default Submissions;
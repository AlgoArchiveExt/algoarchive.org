import React, { useEffect, useState } from 'react';
import {Card, CardHeader, CardBody, CardFooter, Divider} from "@nextui-org/react";

const Submissions = () => {
    const [submissions, setSubmissions] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
  
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

    return(
        <div className='w-full'>
            {error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
                    {renderedCards}
                </div>
            )}
        </div>
    );
};

export default Submissions;
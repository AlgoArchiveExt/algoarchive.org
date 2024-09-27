'use client';

import { Suspense } from 'react';

import { useProfile } from '../../contexts/ProfileContext';
import Searchbar from './Searchbar';
import Submissions from './Submissions';

const Hero = () => {
  const userProfile = useProfile();
  const userName = userProfile?.username || 'User';

  return (
    <div
      className="flex h-screen flex-col items-center justify-center space-y-8 bg-algo-beige-primary
      px-4 dark:bg-algo-gray"
    >
      <h1 className="text-4xl font-bold text-heading dark:text-heading-dark">
        Hey <span className="font-extrabold text-algo-yellow dark:text-algo-yellow-dark">{userName}</span>
      </h1>
      <h2 className="text-2xl font-semibold text-heading dark:text-heading-dark">Check your studying progress below</h2>
      {/* <Searchbar /> */}
      <Suspense fallback={<p>Loading Submissions...</p>}>
        <Submissions />
      </Suspense>
    </div>
  );
};

export default Hero;

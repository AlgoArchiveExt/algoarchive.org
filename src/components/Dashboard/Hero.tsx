import { Suspense } from 'react';

import Searchbar from './Searchbar';
import Submissions from './Submissions';

const Hero = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 px-4">
      <h1 className="text-4xl font-bold text-white">
        Hey <span className="font-extrabold text-algo-yellow ">userName!</span>
      </h1>
      <h2 className="text-2xl font-semibold text-white">Check your studying progress below</h2>
      <Searchbar />
      <Suspense fallback={<p>Loading Submissions...</p>}>
        <Submissions />
      </Suspense>
    </div>
  );
};

export default Hero;

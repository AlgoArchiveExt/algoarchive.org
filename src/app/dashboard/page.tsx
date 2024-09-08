import React from 'react';

import Hero from '@/src/components/dashboard/Hero';
import Nav from '@/src/components/Navbar';

export default function Page() {
  return (
    <main className="algoarchive">
      <Nav />
      <Hero />
    </main>
  );
}

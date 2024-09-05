'use client';

import React from 'react';

import Hero from '@/src/components/Dashboard/Hero';
import Nav from '@/src/components/Dashboard/Navbar';
import AuthRequirement from '@/src/components/AuthRequirement';

const page = () => {
  return (
    <main className="algoarchive">
      <Nav />
      <Hero />
    </main>
  );
}

export default AuthRequirement(page);

'use client';

import React from 'react';

import AuthRequirement from '@/src/components/AuthRequirement';
import Hero from '@/src/components/dashboard/Hero';
import Nav from '@/src/components/dashboard/Navbar';

const page = () => {
  return (
    <main className="algoarchive">
      <Nav />
      <Hero />
    </main>
  );
};

export default AuthRequirement(page);

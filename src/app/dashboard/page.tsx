'use client';

import React from 'react';

import Hero from '@/src/components/Dashboard/Hero';
import Nav from '@/src/components/Dashboard/Navbar';

export default function page() {
  return (
    <main className="algoarchive">
      <Nav />
      <Hero />
    </main>
  );
}

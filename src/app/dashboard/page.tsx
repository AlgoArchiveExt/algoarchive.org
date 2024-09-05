'use client';

import React from 'react';

import Hero from '@/src/components/dashboard/Hero';
import Nav from '@/src/components/dashboard/Navbar';

export default function page() {
  return (
    <main className="algoarchive">
      <Nav />
      <Hero />
    </main>
  );
}

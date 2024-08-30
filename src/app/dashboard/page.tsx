"use client";

import React from 'react';
import Nav from '@/src/components/Dashboard/Navbar';
import Hero from '@/src/components/Dashboard/Hero';

export default function page(){
  return (
    <main className="algoarchive">
        <Nav />
        <Hero />
    </main>
  )
}
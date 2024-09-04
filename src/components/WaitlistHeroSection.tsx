'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import imageSrc from '../../public/assets/algo-ext.png';

export default function HeroSection() {
  return (
    <section className="px-4 py-20 text-white">
      <div className="container mx-auto text-center">
        <h1 className="mb-4 text-4xl font-bold">Sync LeetCode with GitHub</h1>
        <p className="mb-8 text-lg">Effortlessly manage and track your LeetCode solutions with AlgoArchive.</p>
        <a
          href="/waitlist"
          className="rounded-full bg-algo-yellow px-6 py-3 text-lg font-semibold text-white transition hover:bg-orange-600"
        >
          Join the Waitlist
        </a>
      </div>
      <div className="mt-12 flex justify-center">
        <motion.div
          className="max-w-sm rounded-lg bg-white p-6 text-gray-800 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 text-center text-2xl font-bold">How It Works</h2>
          <p className="mb-4">
            Connect your LeetCode account to sync your solutions directly to your GitHub repository. Keep track of your
            progress and showcase your skills effortlessly.
          </p>
          <div className="relative mx-auto h-60 w-full">
            <Image src={imageSrc} className="h-60 w-full rounded-lg object-contain" alt="Extension Demo" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

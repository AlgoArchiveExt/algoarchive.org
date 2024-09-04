'use client';

import { Button, Card, CardBody, Link } from '@nextui-org/react';

export default function HeroSection() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-algo-gray text-center">
      <Card className="mx-auto max-w-2xl border-none bg-transparent p-8 shadow-none">
        <CardBody>
          <h1 className="mb-4 text-4xl font-bold text-white">
            Effortlessly synchronize your solutions to GitHub with
            <span className="bg-gradient-to-r from-[#EE9B01] to-[#f7b801] bg-clip-text text-transparent">
              {' '}
              AlgoArchive
            </span>
          </h1>
          <p className="mb-8 text-lg text-gray-400">
            Easily sync your LeetCode solutions with GitHub and showcase your programming journey.
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              href="/waitlist"
              as={Link}
              target="_blank"
              showAnchorIcon
              variant="ghost"
              className="rounded-full bg-gradient-to-r from-[#EE9B01] to-[#f7b801] px-6 py-2 text-white hover:text-black"
            >
              Join the waitlist
            </Button>
            {/* <Button
              href="#"
              as={Link}
              variant="solid"
              className="bg-[#825534] text-white px-6 py-2 rounded-full"
            >
              Login
            </Button> */}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

'use client';

import { Button, Card, CardBody, Link } from '@nextui-org/react';

export default function HeroSection() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-algo-beige-primary text-center dark:bg-algo-gray">
      <Card className="mx-auto max-w-2xl border-none bg-transparent p-8 shadow-none">
        <CardBody>
          <h1 className="mb-4 text-4xl font-bold text-heading dark:text-white">
            Effortlessly synchronize your solutions to GitHub with
            <span
              className="bg-gradient-to-r from-algo-gradient-yellow-1 to-algo-gradient-yellow-2
            bg-clip-text text-transparent 
            dark:from-algo-gradient-yellow-1-dark dark:to-algo-gradient-yellow-2-dark"
            >
              {' '}
              AlgoArchive
            </span>
          </h1>
          <p className="mb-8 text-lg text-label dark:text-label-dark">
            Easily sync your LeetCode solutions with GitHub and showcase your programming journey.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <Button
              href="https://chromewebstore.google.com/detail/algoarchive/anjcgdjflkjlhaopbilibnbfpialdbpl"
              as={Link}
              target="_blank"
              showAnchorIcon
              variant="ghost"
              className="rounded-full bg-gradient-to-r from-algo-gradient-yellow-1 to-algo-gradient-yellow-2 px-6 py-2 
                text-heading-dark hover:text-subheading-dark
                dark:from-algo-gradient-yellow-1-dark dark:to-algo-gradient-yellow-2-dark"
            >
              Download
            </Button>
            <p className="bg-gradient-to-r from-algo-gradient-yellow-1 to-algo-gradient-yellow-2 bg-clip-text text-base text-transparent dark:from-algo-gradient-yellow-1-dark dark:to-algo-gradient-yellow-2-dark">
              Get Started by downloading the extension!
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

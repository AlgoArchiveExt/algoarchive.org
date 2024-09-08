'use client';

import { Button } from '@nextui-org/react';
import { useState } from 'react';

import {
  DiscordIcon,
  DiscordIconHover,
  GithubIcon,
  GithubIconHover,
  InstallIcon,
  InstallIconHover,
  UpArrowIcon,
  UpArrowIconHover,
} from '../Icons';

export default function Footer() {
  const [isGithubHovered, setIsGithubHovered] = useState(false);
  const [isDiscordHovered, setIsDiscordHovered] = useState(false);
  const [isInstallHovered, setIsInstallHovered] = useState(false);
  const [isUpHovered, setIsUpHovered] = useState(false);

  return (
    <footer className="bg-algo-beige-primary px-4 py-12 text-center dark:bg-algo-gray">
      <div className="container mx-auto">
        <h2 className="mb-6 bg-gradient-to-r from-algo-gradient-yellow-1 to-algo-gradient-yellow-2 bg-clip-text text-3xl font-extrabold text-transparent dark:from-algo-gradient-yellow-1-dark dark:to-algo-gradient-yellow-2-dark">
          AlgoArchive.org
        </h2>
        <nav className="mb-6 flex justify-center space-x-6">
          <a href="#hero" className="text-heading transition-colors hover:text-algo-yellow dark:text-heading-dark">
            Home
          </a>
          <a href="/" className="text-heading transition-colors hover:text-algo-yellow dark:text-heading-dark">
            About
          </a>
          <a href="#features" className="text-heading transition-colors hover:text-algo-yellow dark:text-heading-dark">
            Features
          </a>
        </nav>
        <div className="flex justify-center space-x-4">
          <Button
            href="https://github.com/AlgoArchiveExt"
            isIconOnly
            variant="bordered"
            className="border-black hover:bg-black dark:border-white dark:hover:bg-white"
            onMouseEnter={() => setIsGithubHovered(true)}
            onMouseLeave={() => setIsGithubHovered(false)}
          >
            {isGithubHovered ? <GithubIconHover /> : <GithubIcon />}
          </Button>
          <Button
            href="https://discord.gg/CVXJ3w2bRU"
            isIconOnly
            variant="bordered"
            className="border-[#738adb] hover:bg-[#738adb]"
            onMouseEnter={() => setIsDiscordHovered(true)}
            onMouseLeave={() => setIsDiscordHovered(false)}
          >
            {isDiscordHovered ? <DiscordIconHover /> : <DiscordIcon />}
          </Button>
          <Button
            href="https://chromewebstore.google.com/detail/algoarchive/anjcgdjflkjlhaopbilibnbfpialdbpl"
            isIconOnly
            variant="bordered"
            className="border-algo-yellow hover:bg-algo-yellow"
            onMouseEnter={() => setIsInstallHovered(true)}
            onMouseLeave={() => setIsInstallHovered(false)}
          >
            {isInstallHovered ? <InstallIconHover /> : <InstallIcon />}
          </Button>
        </div>
      </div>
      <a
        href="#hero"
        className="absolute right-4 rounded-full border border-black p-2 shadow-lg transition-colors hover:bg-black dark:border-white dark:hover:bg-white"
        onMouseEnter={() => setIsUpHovered(true)}
        onMouseLeave={() => setIsUpHovered(false)}
      >
        {isUpHovered ? <UpArrowIconHover /> : <UpArrowIcon />}
      </a>
    </footer>
  );
}

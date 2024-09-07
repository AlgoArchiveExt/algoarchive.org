'use client';

import { Button } from '@nextui-org/react';
import { useState } from 'react';

import { DiscordIcon, DiscordIconHover, GithubIcon, GithubIconHover, InstallIcon, InstallIconHover } from '../Icons';

export default function Footer() {
  const [isGithubHovered, setIsGithubHovered] = useState(false);
  const [isDiscordHovered, setIsDiscordHovered] = useState(false);
  const [isInstallHovered, setIsInstallHovered] = useState(false);

  return (
    <footer className="bg-algo-gray px-4 py-32 text-center">
      <div className="container mx-auto">
        <h2 className="mb-6 bg-gradient-to-r from-[#EE9B01] to-[#f7b801] bg-clip-text text-3xl font-extrabold text-transparent">
          AlgoArchive.org
        </h2>
        <nav className="mb-6 flex justify-center space-x-6">
          <a href="#hero" className="text-white transition-colors hover:text-algo-yellow">
            Home
          </a>
          <a href="/" className="text-white transition-colors hover:text-algo-yellow">
            About
          </a>
          <a href="#features" className="text-white transition-colors hover:text-algo-yellow">
            Features
          </a>
        </nav>
        <div className="flex justify-center space-x-4">
          <Button
            href="https://github.com/AlgoArchiveExt"
            isIconOnly
            variant="bordered"
            className="border-[#ffffff] data-[hover=true]:bg-white"
            onMouseEnter={() => setIsGithubHovered(true)}
            onMouseLeave={() => setIsGithubHovered(false)}
          >
            {isGithubHovered ? <GithubIconHover /> : <GithubIcon />}
          </Button>
          <Button
            href="https://discord.gg/CVXJ3w2bRU"
            isIconOnly
            variant="bordered"
            className="border-[#738adb] data-[hover=true]:bg-[#738adb]"
            onMouseEnter={() => setIsDiscordHovered(true)}
            onMouseLeave={() => setIsDiscordHovered(false)}
          >
            {isDiscordHovered ? <DiscordIconHover /> : <DiscordIcon />}
          </Button>
          <Button
            isIconOnly
            variant="bordered"
            className="border-algo-yellow data-[hover=true]:bg-algo-yellow"
            onMouseEnter={() => setIsInstallHovered(true)}
            onMouseLeave={() => setIsInstallHovered(false)}
          >
            {isInstallHovered ? <InstallIconHover /> : <InstallIcon />}
          </Button>
        </div>
      </div>
    </footer>
  );
}

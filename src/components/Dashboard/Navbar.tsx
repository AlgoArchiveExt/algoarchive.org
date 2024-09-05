import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  User,
} from '@nextui-org/react';

import { Chatbot, ChevronDown, Flashcards } from './Icons';
import Logo from './Logo';
import { useProfile } from '../ProfileContext';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const userProfile = useProfile();
  const pathname = usePathname();

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={20} height={undefined} width={undefined} />,
    chatbot: <Chatbot />,
    flashcards: <Flashcards />,
  };
    return (
      <Navbar shouldHideOnScroll className="flex flex-col">
      <NavbarBrand>
        <Logo />
      </NavbarBrand>      
      {(pathname === '/dashboard') ? (
        <>
          <NavbarContent className="hidden gap-4 sm:flex" justify="center">
            <NavbarItem>
              <Link href="/" className="transitionDuration text-lg text-white transition-colors hover:text-algo-yellow">
                Home
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/" className="transitionDuration text-lg text-white transition-colors hover:text-algo-yellow">
                Analytics
              </Link>
            </NavbarItem>
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="transitionDuration bg-transparent p-0 transition-colors data-[hover=true]:bg-transparent data-[hover=true]:text-algo-yellow data-[pressed=true]:text-algo-yellow"
                    endContent={icons.chevron}
                    radius="sm"
                    variant="light"
                  >
                    <p className="transitionDuration text-lg transition-colors hover:text-algo-yellow">Features</p>
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="AlgoArchive features"
                className="w-[340px]"
                itemClasses={{
                  base: 'gap-4',
                }}
              >
                <DropdownItem
                  key="chatbot"
                  href="https://algoarchive-assistant-beta-v02-anthonys-projects-8b33104f.vercel.app"
                  target="_blank"
                  description="If you'd like further assistance, we offer a chatbot to assist you. Ask it anything!"
                  startContent={icons.chatbot}
                >
                  AlgoArchive Assistant
                </DropdownItem>
                <DropdownItem
                  key="flashcards"
                  href="https://algoarchive-flashcards-beta.vercel.app"
                  target="_blank"
                  description="Want to break-down any DSA or LeetCode questions you're struggling with? Try our flashcards!"
                  startContent={icons.flashcards}
                >
                  DSA-Flashcards
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>
          <NavbarContent justify="end">
            <User
              name = {
                <p className='pointer-events-none'>
                  {userProfile?.name}
                </p>
              }
              description = {
                <Link href={userProfile?.profileUrl ?? ''} size="sm" isExternal className='text-xs text-white hover:text-algo-yellow transition-colors'>
                  {userProfile?.username}
                </Link>
              }
              avatarProps={{ src: userProfile?.avatarUrl ?? '' }}
              className='text-algo-yellow hover:text-[#e6cda8] transition-colors'
            />
          </NavbarContent>
        </>
      ) : (
        <>
          <NavbarContent className="hidden gap-4 sm:flex" justify="center">
            <NavbarItem>
              <Link href="/dashboard" className="transitionDuration text-lg text-white transition-colors hover:text-algo-yellow">
                Dashboard
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/" className="transitionDuration text-lg text-white transition-colors hover:text-algo-yellow">
                Analytics
              </Link>
            </NavbarItem>
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="transitionDuration bg-transparent p-0 transition-colors data-[hover=true]:bg-transparent data-[hover=true]:text-algo-yellow data-[pressed=true]:text-algo-yellow"
                    endContent={icons.chevron}
                    radius="sm"
                    variant="light"
                  >
                    <p className="transitionDuration text-lg transition-colors hover:text-algo-yellow">Features</p>
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="AlgoArchive features"
                className="w-[340px]"
                itemClasses={{
                  base: 'gap-4',
                }}
              >
                <DropdownItem
                  key="chatbot"
                  href="/chatbot"
                  target="_blank"
                  description="If you'd like further assistance, we offer a chatbot to assist you. Ask it anything!"
                  startContent={icons.chatbot}
                >
                  AlgoArchive Assistant
                </DropdownItem>
                <DropdownItem
                  key="flashcards"
                  href="https://algoarchive-flashcards-beta.vercel.app"
                  target="_blank"
                  description="Want to break-down any DSA or LeetCode questions you're struggling with? Try our flashcards!"
                  startContent={icons.flashcards}
                >
                  DSA-Flashcards
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>
          <NavbarContent justify="end">
            <User
              name = {
                <p className='pointer-events-none'>
                  {userProfile?.name}
                </p>
              }
              description = {
                <Link href={userProfile?.profileUrl ?? ''} size="sm" isExternal className='text-xs text-white hover:text-algo-yellow transition-colors'>
                  {userProfile?.username}
                </Link>
              }
              avatarProps={{ src: userProfile?.avatarUrl ?? '' }}
              className='text-algo-yellow hover:text-[#e6cda8] transition-colors'
            />
          </NavbarContent>
        </>
      )}
      </Navbar>
    );
  }

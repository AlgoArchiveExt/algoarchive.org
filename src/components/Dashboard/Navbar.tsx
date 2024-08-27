import React, { useState, useEffect } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu} from "@nextui-org/react";
import {ChevronDown, Flashcards, Chatbot} from "./Icons"
import Logo from "./Logo";

export default function Nav() { //{ user }: { user: User | null } <- Use as parameter after user login feature is implemented
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={20} height={undefined} width={undefined} />,
    chatbot: <Chatbot />,
    flashcards: <Flashcards />,
  };

  return (
    <Navbar shouldHideOnScroll className="flex flex-col">
      <NavbarBrand>
        <Logo/>
      </NavbarBrand>
      
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem className="navbar-item">
              <Link href="/" className="text-white hover:text-algo-yellow transition-colors transitionDuration text-lg">
                Home
              </Link>
        </NavbarItem>
        <Dropdown>
            <NavbarItem className="navbar-item">
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent data-[hover=true]:text-algo-yellow data-[pressed=true]:text-algo-yellow transition-colors transitionDuration"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  <p className="hover:text-algo-yellow transition-colors transitionDuration text-lg">Features</p>
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
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
          {/** NavbarContent to be used after we implement user login feature, for now default sign in and sign up buttons are used
          // {user ? (
          //   <NavbarItem>
          //     <SignOutButton />
          //   </NavbarItem>
          // ) : (
          //   <>
          //     <NavbarItem className="hidden lg:flex">
          //       <SignInButton />
          //     </NavbarItem>
          //     <NavbarItem>
          //       <SignUpButton />
          //     </NavbarItem>
          //   </>
          // )}
          */}
      </NavbarContent>
    </Navbar>
  );
}
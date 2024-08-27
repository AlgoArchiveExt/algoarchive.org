import React from "react";
import { Link, Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem } from "@nextui-org/react";
import Logo from './Logo';
import { Home, ChevronDown, Flashcards, Chatbot, Features, Analytics } from './Icons';


export default function Nav() {
  const icons = {
    chevron: <ChevronDown fill="currentColor" size={20} height={undefined} width={undefined} />,
    chatbot: <Chatbot />,
    flashcards: <Flashcards />,
    features: <Features />,
    home: <Home />,
  };

  return (
    <div className="p-6 w-1/2 h-screen bg-background z-20 fixed top-0 -left-96 lg:left-0 lg:w-60 flex flex-col">
      <div className="border-b border-gray-100 pb-8">
        <div className="flex flex-grow justify-center items-center">
          <Logo />
        </div>
      </div>
      <div className="flex-grow flex flex-col justify-center">
        <div>
          <Button
              href='/'    
              as={Link}
              disableRipple
              className="justify-center w-full bg-transparent data-[hover=true]:bg-[#4a4a4a] data-[hover=true]:text-algo-yellow transition duration-300 "
              radius="sm"
              variant="light"
          >
            <Home />
            <p className="hover:text-algo-yellow transition-colors transitionDuration text-lg font-semibold mr-8">Home</p>
          </Button>
          <Dropdown>
            <DropdownTrigger>
              <Button
                disableRipple
                startContent={icons.features}
                endContent={icons.chevron}
                className="w-full bg-transparent data-[hover=true]:bg-[#4a4a4a] data-[hover=true]:text-algo-yellow transition duration-300 "
                radius="sm"
                variant="light"
              >
                <p className="hover:text-algo-yellow transition-colors transitionDuration text-lg font-semibold">Features</p>
              </Button>
            </DropdownTrigger>
            <DropdownMenu
            aria-label="AlgoArchive features"
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
            <Button
              href='/dashboard'    
              as={Link}
              disableRipple
              className="justify-center w-full bg-transparent data-[hover=true]:bg-[#4a4a4a] data-[hover=true]:text-algo-yellow transition duration-300 "
              radius="sm"
              variant="light"
            >
            <Analytics />
            <p className="hover:text-algo-yellow transition-colors transitionDuration text-lg font-semibold mr-8">Analytics</p>
          </Button>
        </div>
      </div>
      <div className="my-4 justify-end">
        {/* logout */}
        <div className="border-t border-gray-100 pb-8">
        </div>
        <h3 className="flex justify-center text-white">Logout</h3>
      </div>
    </div>
  );
}


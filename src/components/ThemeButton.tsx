'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsSunFill } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';

export default function ThemeToggleButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { theme, setTheme } = useTheme();

  // Seeing if the component is mounted avoids a hydration error. This should be done wherever we use the Theme Context.
  if (!mounted) {
    return null;
  }

  return (
    <div
      className="relative flex h-10 w-20 cursor-pointer items-center rounded-full bg-algo-beige-primary p-1 dark:bg-algo-gray"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <FaMoon className="pl-0.5 text-algo-gray" size={25} />
      <div
        className="absolute size-8 rounded-full bg-white shadow-md transition-transform duration-500"
        style={theme === 'dark' ? { left: '2px' } : { right: '2px' }}
      />
      <BsSunFill className="ml-auto pr-0.5 text-yellow-400" size={25} />
    </div>
  );
}

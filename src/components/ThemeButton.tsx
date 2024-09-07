'use client';

import { useDarkTheme } from '@/src/contexts/ThemeContext';

export default function ThemeToggleButton() {
  const { darkThemeOn, toggleDarkTheme } = useDarkTheme();

  return (
    <button onClick={toggleDarkTheme}>
      {darkThemeOn ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};
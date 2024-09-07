'use client';

import { createContext, useContext, useEffect, useState } from "react";

interface DarkThemeContextProps {
  darkThemeOn: boolean;
  toggleDarkTheme: () => void;
}

const DarkThemeContext = createContext<DarkThemeContextProps | undefined>(undefined);

export const DarkThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkThemeOn, setDarkThemeOn] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const darkModeSession = localStorage.getItem('theme');
      return darkModeSession === 'true';
    }
    return false;
  });

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    localStorage.setItem('theme', darkThemeOn ? 'dark' : 'light');
  }, [darkThemeOn]);

  const toggleDarkTheme = () => {
    setDarkThemeOn(prev => !prev);
  };

  return (
    <DarkThemeContext.Provider value={{ darkThemeOn, toggleDarkTheme }}>
      {children}
    </DarkThemeContext.Provider>
  );
};

export const useDarkTheme = () => {
  const context = useContext(DarkThemeContext);
  if (context === undefined) {
    throw new Error('useDarkTheme must be used within a DarkThemeProvider');
  }
  return context;
};

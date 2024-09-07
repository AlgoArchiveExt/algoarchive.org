import './globals.css';

import { NextUIProvider } from '@nextui-org/react';

import { ProfileProvider } from '../contexts/ProfileContext';
import { ThemeProvider } from 'next-themes';

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <NextUIProvider>
          <ThemeProvider attribute='class'>
            <ProfileProvider>
              {children}
            </ProfileProvider>
          </ThemeProvider>
        </NextUIProvider>

      </body>
    </html>
  );
}

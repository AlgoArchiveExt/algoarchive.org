import './globals.css';

import { NextUIProvider } from '@nextui-org/react';

import { ProfileProvider } from '../contexts/ProfileContext';
import { DarkThemeProvider } from '../contexts/ThemeContext';

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
          <DarkThemeProvider>
            <ProfileProvider>
              {children}
            </ProfileProvider>
          </DarkThemeProvider>
        </NextUIProvider>

      </body>
    </html>
  );
}

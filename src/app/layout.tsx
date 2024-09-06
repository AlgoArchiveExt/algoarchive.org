import './globals.css';

import { NextUIProvider } from '@nextui-org/react';

import { ProfileProvider } from '../components/ProfileContext';

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
          <ProfileProvider>
            {children}
          </ProfileProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}

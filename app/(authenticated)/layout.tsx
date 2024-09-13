import React from 'react';
import { TopBarComponent } from './components/layout/TopBar';
import '../styles/globals.css';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-900 text-white">
        <header>
          <TopBarComponent />
        </header>
        <main className="p-24 items-center">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;

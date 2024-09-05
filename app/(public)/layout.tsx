import React from 'react';
import '../styles/globals.css';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-900 text-white">
        <header></header>
        <main className="items-center">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;

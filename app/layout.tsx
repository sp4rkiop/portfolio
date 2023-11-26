// app/layout.tsx
import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import CursorFollower from '../components/cursorFollow';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Abhishek | Portfolio',
  description: 'Abhishek is a full-stack developer with 2 years of experience.',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        style={{ backgroundColor: '#0f172a' }}
        className={`${inter.className}`}
      >
        {children}
        <CursorFollower />
      </body>
    </html>
  );
};

export default RootLayout;

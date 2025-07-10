// app/layout.tsx
import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import CursorFollower from '@/components/CursorFollower';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Abhishek Sinha',
  description: 'Abhishek is a full-stack developer with 2 years of experience.',
};

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en" className="scroll-smooth text-justify">
      <body className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        <div>
          <div className="relative">
            <CursorFollower />
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
              <div className="lg:flex lg:justify-between lg:gap-4">
                <Footer />
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};


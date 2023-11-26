// components/Header.tsx
import React from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl"><a href="/">Abhishek Sinha</a></h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Full-Stack Developer</h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-200">Tech Enthusiast</p>
        {/* Add any other content for the header */}
      </div>
      <Navigation />
      {/* Add social media icons or navigation links here */}
    </header>
  );
};

export default Header;

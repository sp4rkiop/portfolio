// components/navigation.js
import React from 'react';

const Navigation = () => {
  return (
    <nav className="fixed left-0 top-0 p-4 bg-transparent text-white">
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;

// components/CursorFollower.js
"use client";
import React, { useState, useEffect } from 'react';

const CursorFollower = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [fadeOpacity, setFadeOpacity] = useState(1);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
      setFadeOpacity(1);
    };

    const handleMouseLeave = () => {
      setFadeOpacity(0);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: cursorPosition.x - 450,
        top: cursorPosition.y - 450,
        width: '900px',
        height: '900px',
        borderRadius: '100%',
        opacity: fadeOpacity,
        background: `radial-gradient(circle, #112240, transparent ${fadeOpacity * 70}%)`,
        transition: 'opacity 0.5s ease',
      }}
    />
  );
};

export default CursorFollower;

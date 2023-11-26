// components/CursorFollower.tsx
"use client";
import React, { useState, useEffect } from 'react';

const CursorFollower = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [fadeOpacity, setFadeOpacity] = useState(1);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
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
      className="fixed inset-0 z-30 transition duration-300 lg:absolute pointer-events-none"
      style={{
        background: `radial-gradient(600px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        width: '100vw',
        height: '100vh',
        opacity: fadeOpacity,
        pointerEvents: 'none',
        transition: 'opacity 0.5s ease',
      }}
    />
  );
};

export default CursorFollower;

"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Added this line

  useEffect(() => {
    // Update the body's background color based on the theme
    document.body.className = isLightMode ? 'bg-white text-black' : 'bg-gray-900 text-white';
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <nav className={`${isLightMode ? 'bg-white text-black' : 'bg-gray-800 text-white'} p-4`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-lg font-bold">
          <Link href="/">
            MyApp
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className={`${isLightMode ? 'text-black' : 'text-gray-300'} hover:text-white`}>Home</Link>
          <Link href="/about" className={`${isLightMode ? 'text-black' : 'text-gray-300'} hover:text-white`}>About</Link>
          <button onClick={toggleTheme} className={`${isLightMode ? 'text-black' : 'text-white'}`}>
            {isLightMode ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${isLightMode ? 'text-black' : 'text-gray-300'} hover:text-white focus:outline-none`}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className={`${isLightMode ? 'bg-white' : 'bg-gray-800'} md:hidden`}>
          <Link href="/" className="block px-2 py-1 hover:text-white">Home</Link>
          <Link href="/about" className="block px-2 py-1 hover:text-white">About</Link>
          <button onClick={toggleTheme} className="block w-full text-left px-2 py-1 hover:text-white">
            {isLightMode ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

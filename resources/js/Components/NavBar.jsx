import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 shadow-lg backdrop-blur-md' : 'bg-white/50 backdrop-blur'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-gray-800 hover:opacity-80 transition"
          aria-label="Brand Logo"
        >
          <img src="/assets/img/logo.png" width="80" height="auto" alt="Seniom Foundation" className=''/>
        </Link>

        {/* Mobile Collapse Button */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 bg-white/90 hover:bg-gray-100 text-gray-800"
          data-hs-collapse="#navbar-menu"
          aria-controls="navbar-menu"
          aria-expanded="false"
        >
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          id="navbar-menu"
          className="hidden md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6"
        >
          <Link
            href="/"
            className="text-sm font-medium text-gray-800 hover:text-red-600 transition"
          >
            Home
          </Link>
          <Link
            href="/account"
            className="text-sm font-medium text-gray-800 hover:text-red-600 transition"
          >
            About
          </Link>
          <Link
            href="/work"
            className="text-sm font-medium text-gray-800 hover:text-red-600 transition"
          >
            Initiatives
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-gray-800 hover:text-red-600 transition"
          >
            Blog
          </Link>

          
        </div>

        {/* Login Button */}
        <Link
          href="/login"
          className="hidden md:block text-sm font-medium bg-primary-light hover:bg-primary shadow-sm rounded-lg border-2 py-2 px-4 text-white hover:text-slate-100 transition duration-500"
        >
          Donate
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;

import React, { useState, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';

const NavBar = () => {
    const { url } = usePage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        // Handle scroll for sticky effect
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        // Intersection Observer for scrollspy
        const sections = document.querySelectorAll('section[id]');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((section) => observer.observe(section));

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const isActive = (link) => activeSection === link || (link === 'blog' && url === '/blog');

    return (
        <header
            className={`sticky top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-lg backdrop-blur-md' : 'bg-white/50 backdrop-blur'
                }`}
        >
            <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-bold text-gray-800 hover:opacity-80 transition"
                    aria-label="Brand Logo"
                >
                    <img src="/assets/img/logo.png" width="80" height="auto" alt="Seniom Foundation" />
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
                    {/* <a
                        href="/"
                        className={`text-sm font-medium ${isActive('home') ? 'text-red-600 scale-105' : 'text-gray-800 hover:text-red-600'} transition`}
                    >
                        Home
                    </a> */}
                    <a
                        href="#about"
                        className={`text-sm font-medium ${isActive('about') ? 'text-red-600 scale-105' : 'text-gray-800 hover:text-red-600'} transition`}
                    >
                        About
                    </a>
                    <a
                        href="#services"
                        className={`text-sm font-medium ${isActive('services') ? 'text-red-600 scale-105' : 'text-gray-800 hover:text-red-600'} transition`}
                    >
                        Services
                    </a>
                    <a
                        href="#contact"
                        className={`text-sm font-medium ${isActive('contact') ? 'text-red-600 scale-105' : 'text-gray-800 hover:text-red-600'} transition`}
                    >
                        Contact Us
                    </a>
                    <Link
                        href="/blog"
                        className={`text-sm font-medium ${isActive('blog') ? 'text-red-600 scale-105' : 'text-gray-800 hover:text-red-600'} transition`}
                    >
                        Blog
                    </Link>


                </div>

                {/* Donate Button */}
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

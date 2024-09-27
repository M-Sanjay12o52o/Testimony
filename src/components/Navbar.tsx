"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, User } from 'lucide-react';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-purple-900 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <span className="text-2xl font-bold">TestimonialsPro</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="/" className="hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                            <Link href="/features" className="hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium">Features</Link>
                            <Link href="/pricing" className="hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium">Pricing</Link>
                            <Link href="/about" className="hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                            <Link href="/contact" className="hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <Link href="/signin" className="bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded-md text-sm font-medium flex items-center">
                            <User className="mr-2" size={18} />
                            Sign In
                        </Link>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-purple-700 focus:outline-none"
                        >
                            {isMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/" className="block hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium">Home</Link>
                        <Link href="/features" className="block hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium">Features</Link>
                        <Link href="/pricing" className="block hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium">Pricing</Link>
                        <Link href="/about" className="block hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium">About</Link>
                        <Link href="/contact" className="block hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium">Contact</Link>
                        <Link href="/signin" className="block bg-purple-700 hover:bg-purple-600 px-3 py-2 rounded-md text-base font-medium">Sign In</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
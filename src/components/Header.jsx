'use client';
import { useState } from 'react';
import Image from 'next/image';
import logo from '../../public/assets/logo.png';
import profile from '../../public/assets/profile.svg';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="absolute top-0 left-0 z-50 w-full px-6 py-8 bg-transparent">
            <div className=" mx-10 flex items-center justify-between relative">
                {/* Hamburger - Mobile Only */}

                {!isMenuOpen && (
                    <div className="md:hidden z-50">
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="text-white focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="black" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                )}


                {/* Desktop Nav */}
                <div className="hidden md:flex gap-6 font-medium ">
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Properties</a>
                    <a href="#">Stories</a>
                    <a href="#">Contact Us</a>
                </div>

                {/* Center - Logo */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <Image src={logo} alt="Logo" width={109} height={42} />
                </div>

                {/* Right - Contact & Icon */}
                <div className="flex items-center gap-4 absolute md:right-16 ">
                    <span className="hidden md:inline">+68 685 88666</span>
                    <button className="w-9 h-9 border border-white rounded-full flex items-center justify-center hidden md:inline">
                        <Image src={profile} alt="Profile" width={40} height={40} />
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-60 z-40" onClick={() => setIsMenuOpen(false)}>
                    <div
                        className="fixed top-0 left-0 w-64 h-full bg-white text-black p-6 z-50"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="mb-4 text-black focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <nav className="flex flex-col gap-4 font-medium">
                            <a href="#">Home</a>
                            <a href="#">About Us</a>
                            <a href="#">Properties</a>
                            <a href="#">Stories</a>
                            <a href="#">Contact Us</a>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}

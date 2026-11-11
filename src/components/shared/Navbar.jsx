
import React, { useState } from 'react';
import logo from "../../assets/images/logo.png";
import { Menu, X } from 'lucide-react';
import MyNavlink from './MyNavlink';
import { Link } from 'react-router';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    const navLinks = [
        { path: "/", name: "Workouts" },
        { path: "/my-plans", name: "My Plan" }
    ];

    return (
        <header className="sticky top-0 z-50  bg-[#0B0D10]">

            <nav className="relative mx-auto flex min-h-[64px] w-[94%] items-center justify-between md:w-[90%] lg:w-[85%]">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <img
                        src={logo}
                        alt="FITLOG Logo"
                        className="w-8"
                    />
                    <h2 className="text-sm font-extrabold tracking-wide text-white">
                        FITLOG
                    </h2>
                </Link>



                {/* Desktop Navigation */}
                <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
                    {navLinks.map(item => (
                        <li key={item.path}>
                            <MyNavlink to={item.path}>
                                {item.name}
                            </MyNavlink>
                        </li>
                    ))}
                </ul>



                {/* Desktop Plan & Saved */}
                <div className="hidden items-center gap-5 md:flex">

                    {/* Plan */}
                    <div className="flex items-center gap-1.5">
                        <span className="text-[12px] text-gray-300">
                            Plan
                        </span>
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#C6FF00] text-[9px] font-bold text-black">
                            0
                        </span>
                    </div>

                    {/* Saved */}
                    <div className="flex items-center gap-1.5">
                        <span className="text-[12px] text-gray-400">
                            Saved
                        </span>
                        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-gray-700 text-[9px] text-gray-300">
                            0
                        </span>
                    </div>

                </div>



                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="rounded-md p-2 text-[#C6FF00] transition-colors hover:bg-white/10 md:hidden"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>



                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="absolute left-0 top-full w-full border-t border-gray-800 bg-[#0B0D10] px-4 py-5 shadow-lg md:hidden">

                        <ul className="flex flex-col items-start gap-4">
                            {navLinks.map(item => (
                                <li key={item.path}>
                                    <MyNavlink
                                        to={item.path}
                                        onClick={closeMenu}
                                    >
                                        {item.name}
                                    </MyNavlink>
                                </li>
                            ))}
                        </ul>

                    </div>
                )}

            </nav>
        </header>
    );
};

export default Navbar;

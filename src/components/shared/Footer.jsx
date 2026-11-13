
import React from 'react';
import { Link } from 'react-router';
import {
    FiActivity,
    FiArrowUpRight,
    FiGithub,
    FiInstagram,
    FiFacebook,
    FiTwitter
} from 'react-icons/fi';
import logo from '../../assets/images/logo.png';

const Footer = () => {

    return (
        <footer className="border-t border-[#252933] bg-[#0B0D10]">

            <div className="mx-auto w-[94%] py-10 md:w-[90%] lg:w-[85%] lg:py-14">

                {/* Main Footer */}
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

                    {/* Brand Information */}
                    <div className="sm:col-span-2 lg:col-span-2">

                        <Link to="/" className="mb-4 inline-flex items-center gap-2">
                            <img
                                src={logo}
                                alt="FITLOG Logo"
                                className="w-7"
                            />
                            <span className="text-xl font-extrabold tracking-wide text-white">
                                FITLOG
                            </span>
                        </Link>

                        <p className="max-w-sm text-sm leading-7 text-gray-400">
                            Train with intent. Track your progress.
                            Build better habits with a smarter approach
                            to everyday fitness.
                        </p>

                        <div className="mt-5 flex items-center gap-2 text-xs font-medium tracking-wider text-[#C6FF00]">
                            <FiActivity className="text-base" />
                            <span>STAY ACTIVE. STAY CONSISTENT.</span>
                        </div>

                    </div>


                    {/* Quick Links */}
                    <div>

                        <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
                            Quick Links
                        </h3>

                        <ul className="space-y-3">

                            <li>
                                <Link
                                    to="/"
                                    className="text-sm text-gray-400 transition hover:text-[#C6FF00]"
                                >
                                    Workouts
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/my-plans"
                                    className="text-sm text-gray-400 transition hover:text-[#C6FF00]"
                                >
                                    My Plan
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/dashboard"
                                    className="text-sm text-gray-400 transition hover:text-[#C6FF00]"
                                >
                                    Dashboard
                                </Link>
                            </li>

                        </ul>

                    </div>


                    {/* Social Links */}
                    <div>

                        <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-white">
                            Follow Us
                        </h3>

                        <p className="mb-4 text-sm leading-6 text-gray-400">
                            Stay connected and keep your fitness journey moving.
                        </p>

                        <div className="flex items-center gap-3">

                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#292D35] bg-[#15181F] text-gray-400 transition hover:border-[#C6FF00] hover:text-[#C6FF00]"
                            >
                                <FiGithub size={18} />
                            </a>

                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#292D35] bg-[#15181F] text-gray-400 transition hover:border-[#C6FF00] hover:text-[#C6FF00]"
                            >
                                <FiInstagram size={18} />
                            </a>

                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Facebook"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#292D35] bg-[#15181F] text-gray-400 transition hover:border-[#C6FF00] hover:text-[#C6FF00]"
                            >
                                <FiFacebook size={18} />
                            </a>

                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Twitter"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#292D35] bg-[#15181F] text-gray-400 transition hover:border-[#C6FF00] hover:text-[#C6FF00]"
                            >
                                <FiTwitter size={18} />
                            </a>

                        </div>

                    </div>

                </div>


                {/* Footer Bottom */}
                <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[#252933] pt-6 sm:flex-row">


                    <p className="text-center text-xs text-gray-500 sm:text-left">
                        © {new Date().getFullYear()} FITLOG. All rights reserved.
                        <span className="mx-2 text-[#353B46]">|</span>
                        Developed by <span className="font-semibold text-[#C6FF00]/50">Bayjid Alom</span>
                    </p>

                    <Link
                        to="/"
                        className="flex items-center gap-2 text-xs font-semibold text-gray-400 transition hover:text-[#C6FF00]"
                    >
                        Back to top
                        <FiArrowUpRight className="text-sm" />
                    </Link>

                </div>

            </div>

        </footer>
    );
};

export default Footer;

"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaPlus, FaTimes, FaPhone } from "react-icons/fa";
import Image from 'next/image';

const NavigationBar: React.FC = () => {
    const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link: string) => {
        e.preventDefault();
        document.querySelector(link)?.scrollIntoView({
            behavior: 'smooth'
        });
        setNav(false);
    };

    const [nav, setNav] = useState(false);
    const [scroll, setScroll] = useState(false);

    const links = [
        { id: 1, link: "Home" },
        { id: 2, link: "About" },
        { id: 3, link: "Features" },
        { id: 4, link: "Pricing" },
        { id: 5, link: "FAQs" },
        { id: 6, link: "Contact Us" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`flex w-full px-[9vw] justify-between items-center h-20 z-50 text-black fixed top-0 ${scroll ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div>
                <Image src="/images/LogoGreen.png" className='z-10 flex' alt='radii logo' width={100} height={100} />
            </div>

            <ul className="hidden md:flex z-50 ms-auto">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="nav-links px-4 cursor-pointer self-center font-medium text-black hover:scale-105 hover:text-[#F27405] duration-200 link-underline"
                    >
                        <a href={`#${link}`} onClick={(e) => smoothScroll(e, `#${link}`)}>{link}</a>
                    </li>
                ))}
                <li className="nav-links px-4 cursor-pointer capitalize font-medium bg-white rounded-xl text-[#F27405] py-2 hover:scale-105 hover:text-[#F27405] duration-200 link-underline">
                    <a href="https://app.getradii.com/signin" target="_blank" rel="noopener noreferrer">Sign In</a>
                </li>
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-50 text-black md:hidden"
            >
                {nav ? <FaTimes className="fixed right-10 top-5" size={30} /> : <FaBars size={30} className="fixed right-10 top-5" />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center fixed top-0 left-0 z-30 w-full min-h-screen bg-gradient-to-r from-[#83FFD0] to-[#027368] text-black">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer py-6 text-xl"
                        >
                            <a href={`#${link}`} onClick={(e) => smoothScroll(e, `#${link}`)}>{link}</a>
                        </li>
                    ))}
                    <li className="px-4 cursor-pointer capitalize py-3 text-xl bg-[#F27405] text-white rounded-2xl">
                        <a onClick={() => setNav(!nav)} href="https://app.getradii.com/" target="_blank" rel="noopener noreferrer">Sign In</a>
                    </li>
                </ul>
            )}

            {/* FAB Button */}
            <a href="https://wa.link/j508ug" target="_blank" rel="noopener noreferrer">
                <button className="fab fixed bottom-10 right-10 flex items-center p-4 rounded-full bg-[#F27405] text-white shadow-lg hover:bg-[#d96304] transition duration-300">
                    <FaPhone size={24} className="mr-2" />
                    <span className="text-lg">Talk To Us</span>
                </button>
            </a>
        </div>
    );
};

export default NavigationBar;

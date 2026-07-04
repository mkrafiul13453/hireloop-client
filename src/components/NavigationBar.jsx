"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeAuth, setActiveAuth] = useState("");

    const navLinks = [
        { name: "Browse Jobs", href: "/jobs" },
        { name: "Company", href: "/company" },
        { name: "Pricing", href: "/pricing" },
    ];

    return (
        <div className="w-full flex justify-center mt-5">
            {/* Navbar Container */}
            <nav className="w-[95%] max-w-6xl bg-[#222222] text-white rounded-2xl px-6 py-4 shadow-lg">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo.png"   
                            alt="Hireloop Logo"
                            width={130}
                            height={40}
                            className="object-contain"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="text-gray-300 hover:text-white transition duration-200"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Auth Buttons (Desktop) */}
                    <div className="hidden md:flex items-center gap-3">

                        <Button
                            onClick={() => setActiveAuth("signin")}
                            className={`px-4 py-2 rounded-lg transition duration-200 ${activeAuth === "signin"
                                    ? "bg-[#5C53FE] text-white"
                                : "bg-[#5C53FE]/30 hover:bg-[#5C53FE]"
                                }`}
                        >
                            Sign In
                        </Button>

                        <Button
                            onClick={() => setActiveAuth("getstarted")}
                            className={`px-4 py-2 rounded-lg transition duration-200 ${activeAuth === "getstarted"
                                    ? "bg-[#5C53FE] text-white"
                                    : "bg-[#5C53FE]/20 hover:bg-[#5C53FE]"
                                }`}
                        >
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white text-2xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        ☰
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden mt-4 flex flex-col gap-4">

                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="text-gray-300 hover:text-white transition"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="flex flex-col gap-3 mt-2">
                            <Button
                                onClick={() => setActiveAuth("signin")}
                                className={`w-full px-4 py-2 rounded-lg ${activeAuth === "signin"
                                        ? "bg-[#5C53FE]"
                                    : "bg-[#5C53FE]/30 hover:bg-[#5C53FE]"
                                    }`}
                            >
                                Sign In
                            </Button>

                            <Button
                                onClick={() => setActiveAuth("getstarted")}
                                className={`w-full px-4 py-2 rounded-lg ${activeAuth === "getstarted"
                                        ? "bg-[#5C53FE]"
                                        : "bg-[#5C53FE]/30 hover:bg-[#5C53FE]"
                                    }`}
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
}
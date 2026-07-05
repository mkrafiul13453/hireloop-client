"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Avatar, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

export default function NavigationBar() {
    const {
        data: session,
    } = authClient.useSession()
    // console.log("Session Data:", session);
    const user = session?.user;
    // console.log("Current User:", user);

    const handleLogout = async () => {
        await authClient.signOut();
        toast.success("Logged out successfully!");
        redirect("/");
    }
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeAuth, setActiveAuth] = useState("");

    const navLinks = [
        { name: "Browse Jobs", href: "/jobs" },
        { name: "Company", href: "/company" },
        { name: "Pricing", href: "/pricing" },
    ];

    return (
        <div className="w-full flex justify-center mt-5">

            {/* Navigatio Container */}
            <nav className="w-[95%] max-w-6xl bg-black text-white rounded-full px-6 py-3 shadow-lg relative">

                <div className="flex items-center justify-between">

                    {/* LEFT: LOGO */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo.png"
                            alt="Hireloop Logo"
                            width={120}
                            height={40}
                            className="object-contain"
                        />
                    </Link>

                    {/* RIGHT: DESKTOP MENU */}
                    <div className="hidden md:flex items-center gap-4">

                        {/* NAV LINKS */}
                        <div className="flex items-center gap-1">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="px-4 py-2 rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/10 transition"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* AUTH BUTTONS */}
                        <div className="flex items-center gap-2">
                            {
                                user ? <><Button
                                    onClick={handleLogout}
                                    className={`px-4 py-2 rounded-2xl text-sm transition ${activeAuth === "signout"
                                        ? "bg-[#5C53FE] text-white"
                                        : "bg-[#5C53FE]/30 hover:bg-[#5C53FE]"
                                        }`}
                                >
                                    Sign Out
                                </Button><Link href="/profile"> <Avatar >
                                    <Avatar.Image referrerPolicy="no-referrer" alt={user.name} src={user.image} />
                                    <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                                </Avatar></Link></> : <><Link href="/signin">
                                    <Button
                                        onClick={() => setActiveAuth("signin")}
                                        className={`px-4 py-2 rounded-2xl text-sm transition ${activeAuth === "signin"
                                            ? "bg-[#5C53FE] text-white"
                                            : "bg-[#5C53FE]/30 hover:bg-[#5C53FE]"
                                            }`}
                                    >
                                        Sign In
                                    </Button>
                                </Link>

                                    <Link href="/signup">
                                        <Button
                                            onClick={() => setActiveAuth("getstarted")}
                                            className={`px-4 py-2 rounded-2xl text-sm transition ${activeAuth === "getstarted"
                                                ? "bg-[#5C53FE] text-white"
                                                : "bg-[#5C53FE]/30 hover:bg-[#5C53FE]"
                                                }`}
                                        >
                                            Get Started
                                        </Button>
                                    </Link></>
                            }
                        </div>

                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        className="md:hidden text-white text-2xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        ☰
                    </button>

                </div>

                {/* MOBILE MENU */}

                {menuOpen && (
                    <div className="md:hidden absolute left-0 right-0 top-full mt-3 w-full px-4 z-50">

                        <div className="bg-[#222222] rounded-2xl p-4 shadow-xl border border-white/10 flex flex-col gap-3">

                            {navLinks.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition"
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <div className="flex flex-col gap-2 mt-3">
                                {
                                    user ? <><Button
                                        onClick={handleLogout}
                                        className={`px-4 py-2 rounded-2xl text-sm transition ${activeAuth === "signout"
                                            ? "bg-[#5C53FE] text-white"
                                            : "bg-[#5C53FE]/30 hover:bg-[#5C53FE]"
                                            }`}
                                    >
                                        Sign Out
                                    </Button><Link href="/profile"> <Avatar >
                                        <Avatar.Image referrerPolicy="no-referrer" alt={user.name} src={user.image} />
                                        <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                                    </Avatar></Link></> : <><Link href="/signin">
                                        <Button
                                            onClick={() => setActiveAuth("signin")}
                                            className={`px-4 py-2 rounded-2xl text-sm transition ${activeAuth === "signin"
                                                ? "bg-[#5C53FE] text-white"
                                                : "bg-[#5C53FE]/30 hover:bg-[#5C53FE]"
                                                }`}
                                        >
                                            Sign In
                                        </Button>
                                    </Link>

                                        <Link href="/signup">
                                            <Button
                                                onClick={() => setActiveAuth("getstarted")}
                                                className={`px-4 py-2 rounded-2xl text-sm transition ${activeAuth === "getstarted"
                                                    ? "bg-[#5C53FE] text-white"
                                                    : "bg-[#5C53FE]/30 hover:bg-[#5C53FE]"
                                                    }`}
                                            >
                                                Get Started
                                            </Button>
                                        </Link></>
                                }

                            </div>

                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
}
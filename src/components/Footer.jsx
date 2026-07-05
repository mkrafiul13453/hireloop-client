"use client";

import Link from "next/link";
import Image from "next/image";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaPinterestP,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto">

                {/* TOP SECTION */}
                <div className="grid grid-cols-3 md:grid-cols-4 gap-6 md:gap-10 border-b border-gray-700 pb-10">

                    {/* BRAND */}
                    <div className="col-span-3 md:col-span-1">

                        {/* Logo */}
                        <div className="flex items-center">
                            <Image
                                src="/logo.png"
                                alt="Hireloop Logo"
                                width={120}
                                height={40}
                                className="object-contain"
                            />
                        </div>

                        <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                            The AI-native career platform. Built for people who take their work seriously.
                        </p>

                        {/* SOCIAL */}
                        <div className="flex gap-3 mt-5">
                            <a className="p-2 bg-[#2A2A2A] rounded-md hover:bg-[#333]">
                                <FaFacebookF className="text-white" />
                            </a>
                            <a className="p-2 bg-[#2A2A2A] rounded-md hover:bg-[#333]">
                                <FaPinterestP className="text-white" />
                            </a>
                            <a className="p-2 bg-[#2A2A2A] rounded-md hover:bg-[#333]">
                                <FaLinkedinIn className="text-white" />
                            </a>
                        </div>
                    </div>

                    {/* PRODUCT */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Product</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#">Job discovery</Link></li>
                            <li><Link href="#">Worker AI</Link></li>
                            <li><Link href="#">Companies</Link></li>
                            <li><Link href="#">Salary data</Link></li>
                        </ul>
                    </div>

                    {/* NAVIGATION */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Navigation</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#">Help center</Link></li>
                            <li><Link href="#">Career library</Link></li>
                            <li><Link href="#">Contact</Link></li>
                        </ul>
                    </div>

                    {/* RESOURCES */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#">Brand Guideline</Link></li>
                            <li><Link href="#">Newsroom</Link></li>
                        </ul>
                    </div>

                </div>

                {/* BOTTOM SECTION */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-xs text-gray-500">
                    <p>Copyright 2024 — Programming Hero</p>

                    <div className="flex gap-4 mt-3 md:mt-0">
                        <Link href="#" className="hover:text-white">Terms & Policy</Link>
                        <Link href="#" className="hover:text-white">Privacy Guideline</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
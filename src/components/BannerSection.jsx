"use client";

import Image from "next/image";
import React from "react";
import { FaBriefcase, FaBuilding, FaUsers } from "react-icons/fa";
import { FiStar } from "react-icons/fi";

const BannerSection = () => {
    return (
        <section className="relative w-full py-24 bg-black text-white overflow-hidden">

            {/* Subtle Glow (optional, still black theme) */}
            <div className="absolute inset-0">
                <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/20 blur-[160px] rounded-full"></div>
                <div className="absolute bottom-[-200px] right-[-120px] w-[600px] h-[600px] bg-blue-600/10 blur-[160px] rounded-full"></div>
            </div>

            {/* Globe Background (wider + lower position) */}
            <div className="absolute inset-0 flex items-center justify-center translate-y-16 sm:translate-y-24">
                <div className="relative w-[1200px] sm:w-[1000px] md:w-[1400px] h-[600px]">
                    <Image
                        src="/globe.png"
                        alt="globe"
                        fill
                        className="object-contain opacity-25 animate-pulse"
                    />
                </div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4">

                {/* Text */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
                        Assisting over <span className="text-purple-400">15,000</span> job seekers
                        <br />
                        find their dream positions.
                    </h2>
                </div>

                {/* Cards → 2 columns on mobile */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-50">

                    {/* Card 1 */}
                    <div className="group p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:scale-105 transition">
                        <FaBriefcase className="text-purple-400 text-xl mb-3 group-hover:scale-110 transition" />
                        <h3 className="text-2xl sm:text-3xl font-bold">50K</h3>
                        <p className="text-gray-400 text-xs sm:text-sm mt-1">Active Jobs</p>
                    </div>

                    {/* Card 2 */}
                    <div className="group p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:scale-105 transition">
                        <FaBuilding className="text-blue-400 text-xl mb-3 group-hover:scale-110 transition" />
                        <h3 className="text-2xl sm:text-3xl font-bold">12K</h3>
                        <p className="text-gray-400 text-xs sm:text-sm mt-1">Companies</p>
                    </div>

                    {/* Card 3 */}
                    <div className="group p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:scale-105 transition">
                        <FaUsers className="text-green-400 text-xl mb-3 group-hover:scale-110 transition" />
                        <h3 className="text-2xl sm:text-3xl font-bold">2M</h3>
                        <p className="text-gray-400 text-xs sm:text-sm mt-1">Job Seekers</p>
                    </div>

                    {/* Card 4 */}
                    <div className="group p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:scale-105 transition">
                        <FiStar className="text-yellow-400 text-xl mb-3 group-hover:scale-110 transition" />
                        <h3 className="text-2xl sm:text-3xl font-bold">97%</h3>
                        <p className="text-gray-400 text-xs sm:text-sm mt-1">Satisfaction Rate</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BannerSection;
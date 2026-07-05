"use client";

import React from "react";
import { FiSearch, FiMapPin } from "react-icons/fi";
import { FaBriefcase } from "react-icons/fa";

const HeroSection = () => {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-black text-white overflow-hidden">

            {/* Background glow */}
            <div className="absolute inset-0">
                <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-120px] right-[-80px] w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full"></div>
            </div>

            <div className="relative z-10 max-w-4xl w-full px-4 text-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm mb-6 hover:scale-105 transition">
                    <FaBriefcase className="text-purple-400" />
                    <span>
                        <span className="font-bold text-white">50,000+</span> New Jobs This Month
                    </span>
                </div>

                {/* Heading */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
                    Find Your Dream Job Today
                </h1>

                {/* Subtitle */}
                <p className="mt-4 text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                    HireLoop connects top talent with world-class companies. Browse thousands of curated opportunities and land your next role faster.
                </p>

                {/* Search Box */}
                <div className="mt-8 w-full max-w-3xl mx-auto">
                    <div className="flex flex-col sm:flex-row items-stretch gap-3 p-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-purple-500/40 transition">

                        {/* Job input */}
                        <div className="flex items-center gap-2 flex-1 px-4 py-3">
                            <FiSearch className="text-gray-400" />
                            <input
                                type="text"
                                placeholder="Job title, skill or company"
                                className="w-full bg-transparent outline-none text-white placeholder-gray-500"
                            />
                        </div>

                        {/* Location input */}
                        <div className="flex items-center gap-2 flex-1 px-4 py-3 border-t sm:border-t-0 sm:border-l border-white/10">
                            <FiMapPin className="text-gray-400" />
                            <input
                                type="text"
                                placeholder="Location or Remote"
                                className="w-full bg-transparent outline-none text-white placeholder-gray-500"
                            />
                        </div>

                        {/* Search button */}
                        <button className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 active:scale-95 transition flex items-center justify-center gap-2 font-medium">
                            <FiSearch />
                            Search
                        </button>
                    </div>
                </div>

                {/* Trending */}
                <div className="mt-6 flex flex-wrap justify-center items-center gap-3 text-sm text-gray-400">
                    <span>Trending:</span>

                    {["Product Designer", "AI Engineering", "DevOps Engineer"].map((item, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:text-white transition cursor-pointer"
                        >
                            {item}
                        </span>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default HeroSection;
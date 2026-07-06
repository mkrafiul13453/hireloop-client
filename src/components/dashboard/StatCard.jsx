"use client";

import { Card } from "@heroui/react";

export default function StatCard({
    title,
    value,
    icon: Icon,
    className = "",
}) {
    return (
        <Card
            className={`bg-[#111] border border-white/10 rounded-xl shadow-sm p-5 ${className}`}
        >
            <div className="flex items-center justify-between">

                {/* Left Content */}
                <div>
                    <p className="text-sm text-gray-400">{title}</p>
                    <h2 className="text-2xl font-semibold text-white mt-1">
                        {value}
                    </h2>
                </div>

                {/* Icon */}
                <div className="p-3 rounded-lg bg-white/5 text-white">
                    {Icon && <Icon size={22} />}
                </div>

            </div>
        </Card>
    );
}
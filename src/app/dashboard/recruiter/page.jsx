"use client";

import DashBoardStat from "@/components/dashboard/DashBoardStat";
import { authClient } from "@/lib/auth-client";
import React from 'react';
import { FiCheckCircle, FiUsers, FiXCircle } from "react-icons/fi";
import { TfiBriefcase } from "react-icons/tfi";

const RecruiterDashBoardHomePage = () => {
    const recruiterStats = [
        {
            title: "Total Job Posts",
            value: 48,
            icon: TfiBriefcase,
        },
        {
            title: "Total Applicants",
            value: "1,284",
            icon: FiUsers,
        },
        {
            title: "Active Jobs",
            value: 18,
            icon: FiCheckCircle,
        },
        {
            title: "Jobs Closed",
            value: 32,
            icon: FiXCircle,
        },
    ];
    const {
            data: session,
        } = authClient.useSession()
        // console.log("Session Data:", session);
        const user = session?.user;
    return (
        <div>
            <h1 className="text-3xl font-semibold text-white">WELCOME , {user?.name}</h1>
            <DashBoardStat recruiterStats={recruiterStats} />
        </div>
    );
};

export default RecruiterDashBoardHomePage;
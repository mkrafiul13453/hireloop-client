"use client";

import React, { useMemo, useState } from "react";
import { Input, Button } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { MdEmail } from "react-icons/md";

const SignInPage = () => {
    
    const router = useRouter();
    const [password, setPassword] = useState("");

    // ✅ Strong password rules
    const passwordRules = useMemo(() => {
        return {
            length: password.length >= 8,
            upper: /[A-Z]/.test(password),
            lower: /[a-z]/.test(password),
            number: /[0-9]/.test(password),
            special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
        };
    }, [password]);

    const isStrongPassword = Object.values(passwordRules).every(Boolean);

    const handleSignIn = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries());
        console.log("Form Data:", user);
        // Implement your login logic here, e.g., call your API to authenticate the user
        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,
        });
        if (data) {
            toast.success("Logged in successfully!");
            router.push("/");

        } else if (error) {
            toast.error("Failed to log in");
        }

    };
    return (
        <section className="min-h-screen flex items-center justify-center bg-black px-4 sm:-mt-40 md:-mt-30">
            <div className="w-full max-w-md">
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300">

                    {/* Title */}
                    <h1 className="text-3xl font-bold text-white text-center mb-6">
                        Sign In
                    </h1>

                    <form onSubmit={handleSignIn} className="space-y-5">


                        {/* Password */}
                        <div className="flex flex-col gap-2">

                            {/* Email */}
                            <Input
                            
                                name="email"
                                type="email"
                                label=" Email"
                                placeholder="Enter your email"
                                // startContent={<MdEmail className="text-gray-400 text-lg" />}
                                className={{
                                    inputWrapper:
                                        "bg-black border border-zinc-700 hover:border-zinc-500 focus-within:border-white transition",
                                    input: "text-white placeholder:text-gray-500",
                                    label: "text-gray-400",
                                }}
                                
                            />
                            <Input
                                name="password"
                                type="password"
                                label="Password"
                                placeholder="Enter strong password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                // startContent={<FiLock className="text-gray-400" />}
                                className={{
                                    inputWrapper:
                                        "bg-black border border-zinc-700 hover:border-zinc-500 focus-within:border-white transition",
                                    input: "text-white placeholder:text-gray-500",
                                    label: "text-gray-400",
                                }}
                            />

                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            disabled={!isStrongPassword}
                            className={`w-full font-semibold transition-all duration-300 ${isStrongPassword
                                    ? "bg-white text-black hover:bg-gray-200"
                                    : "bg-gray-700 text-gray-400 cursor-not-allowed"
                                }`}
                        >
                            Sign In
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center my-5">
                        <div className="flex-1 h-px bg-zinc-700"></div>
                        <span className="px-3 text-gray-500 text-sm">OR</span>
                        <div className="flex-1 h-px bg-zinc-700"></div>
                    </div>

                    {/* Google Signup */}
                    <Button
                        variant="bordered"
                        className="w-full flex items-center justify-center gap-2 border-zinc-700 text-white hover:bg-zinc-800 transition"
                    >
                        <FcGoogle className="text-red-500" />
                        Signup with Google
                    </Button>

                    {/* Bottom Link */}
                    <p className="text-center text-gray-400 text-sm mt-6">
                        Don’t have an account?{" "}
                        <a href="/signup" className="text-white hover:underline">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SignInPage;
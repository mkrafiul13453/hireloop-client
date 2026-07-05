"use client";

import React, { useMemo, useState } from "react";
import { Input, Button, Label, RadioGroup, Radio, Description } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { router } from "better-auth/api";

const SignUpPage = () => {
    
    const router = useRouter();
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("seeker");

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

    const handleSignUp = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries());
        console.log("Form Data:", user);
        const { data, error } = await authClient.signUp.email({
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role,
        });
        console.log("Sign Up Response:", { data, error });
        if (data) {
            toast.success("Account created successfully!");
            // redirect("/");
            router.push("/signin")
        } else if (error) {
            toast.error("Failed to create account");
        }
    };
    return (
        <section className="min-h-screen flex items-center justify-center bg-black px-4 sm:-mt-40 md:-mt-20">
            <div className="w-full max-w-md">
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300">

                    {/* Title */}
                    <h1 className="text-3xl font-bold text-white text-center mb-6">
                        Sign Up
                    </h1>

                    <form onSubmit={handleSignUp} className="space-y-5">


                        {/* Password */}
                        <div className="flex flex-col gap-2">
                            {/* Name */}
                            <Input
                                name="name"
                                type="text"
                                label="Name"
                                placeholder="Enter your name"
                                // startContent={<FiUser className="text-gray-400" />}
                                className={{
                                    inputWrapper:
                                        "bg-black border border-zinc-700 hover:border-zinc-500 focus-within:border-white transition",
                                    input: "text-white placeholder:text-gray-500",
                                    label: "text-gray-400",
                                }}
                            />

                            {/* Email */}
                            <Input
                                name="email"
                                type="email"
                                label="Email"
                                placeholder="Enter your email"
                                // startContent={<FiMail className="text-gray-400" />}
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
                            <div className="flex flex-col gap-2">
                                <Label className="text-white">Select Your Role ?</Label>
                                <RadioGroup defaultValue="seeker" name="role" orientation="horizontal " onChange={value => setRole(value)}>
                                    <Radio value="seeker">
                                        <Radio.Content>
                                            <Radio.Control>
                                                <Radio.Indicator />
                                            </Radio.Control>
                                            <span className="text-white">Job Seeker</span>
                                        </Radio.Content>
                                        {/* <Description>Advanced reporting</Description> */}
                                    </Radio>
                                    <Radio className="mt-4" value="recruiter">
                                        <Radio.Content>
                                            <Radio.Control>
                                                <Radio.Indicator />
                                            </Radio.Control>
                                            <span className="text-white">Recruiter</span>
                                        </Radio.Content>
                                        {/* <Description>Up to 10 teammates</Description> */}
                                    </Radio>
                                </RadioGroup>
                            </div>

                            {/* Password Rules */}
                            {/* <div className="mt-3 space-y-1 text-xs">
                                <p className={passwordRules.length ? "text-green-500" : "text-gray-500"}>
                                    ✔ At least 8 characters
                                </p>
                                <p className={passwordRules.upper ? "text-green-500" : "text-gray-500"}>
                                    ✔ One uppercase letter
                                </p>
                                <p className={passwordRules.lower ? "text-green-500" : "text-gray-500"}>
                                    ✔ One lowercase letter
                                </p>
                                <p className={passwordRules.number ? "text-green-500" : "text-gray-500"}>
                                    ✔ One number
                                </p>
                                <p className={passwordRules.special ? "text-green-500" : "text-gray-500"}>
                                    ✔ One special character
                                </p>
                            </div> */}
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
                            Create Account
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
                        Already have an account?{" "}
                        <a href="/signin" className="text-white hover:underline">
                            Sign in
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SignUpPage;
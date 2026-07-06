"use client";

import React, { useState } from "react";
import {
    Form,
    Input,
    TextArea,
    Select,
    ListBox,
    Label,
    FieldError,
    Button,
} from "@heroui/react";

import { FiBriefcase, FiSend } from "react-icons/fi";

export default function NewJobPage({ recruiterCompany }) {
    const [form, setForm] = useState({
        title: "",
        category: "",
        type: "",
        salaryMin: "",
        salaryMax: "",
        currency: "USD",
        location: "",
        isRemote: false,
        deadline: "",
        responsibilities: "",
        requirements: "",
        benefits: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (key, value) => {
        setForm((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const validate = () => {
        const newErrors = {};

        if (!form.title) newErrors.title = "Job title is required";
        if (!form.category) newErrors.category = "Category is required";
        if (!form.type) newErrors.type = "Job type is required";
        if (!form.salaryMin) newErrors.salaryMin = "Min salary required";
        if (!form.salaryMax) newErrors.salaryMax = "Max salary required";
        if (!form.deadline) newErrors.deadline = "Deadline is required";

        if (Number(form.salaryMin) > Number(form.salaryMax)) {
            newErrors.salaryMax = "Max salary must be greater than Min salary";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        const payload = {
            ...form,
            companyId: recruiterCompany?.id,
            status: "active",
        };

        console.log("Submitting Job:", payload);

        // Example API call
        // await fetch("/api/jobs", {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify(payload),
        // });
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <Form onSubmit={handleSubmit} className="space-y-6" validationBehavior="native">

                {/* ================= JOB INFO ================= */}
                <fieldset className="space-y-4 border p-5 rounded-xl w-full">
                    <legend className="text-lg font-semibold flex items-center gap-2 px-2">
                        <FiBriefcase /> <span className="text-white">Job Information</span>
                    </legend>

                    {/* Title */}
                    <div className="flex flex-col gap-1">
                        <Label className="text-white" >Job Title</Label>
                        <Input
                            placeholder="e.g. Frontend Developer"
                            value={form.title}
                            onChange={(e) => handleChange("title", e.target.value)}
                            // isInvalid={!!errors.title}
                        />
                        {errors.title && <FieldError>{errors.title}</FieldError>}
                    </div>

                    {/* Category + Type */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <div className="flex flex-col gap-1">
                            <Label className="text-white">Job Category</Label>
                            <Select
                                value={form.category || null}
                                onChange={(value) => handleChange("category", value)}
                                placeholder="Choose one"
                                // isInvalid={!!errors.category}
                            >
                                <Select.Trigger>
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox>
                                        <ListBox.Item id="engineering" textValue="Engineering">Engineering</ListBox.Item>
                                        <ListBox.Item id="design" textValue="Design">Design</ListBox.Item>
                                        <ListBox.Item id="marketing" textValue="Marketing">Marketing</ListBox.Item>
                                        <ListBox.Item id="sales" textValue="Sales">Sales</ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                            {errors.category && <FieldError>{errors.category}</FieldError>}
                        </div>

                        <div className="flex flex-col gap-1">
                            <Label className="text-white">Job Type</Label>
                            <Select
                                value={form.type || null}
                                onChange={(value) => handleChange("type", value)}
                                placeholder="Choose one"
                                // isInvalid={!!errors.type}
                            >
                                <Select.Trigger>
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox>
                                        <ListBox.Item id="full-time" textValue="Full-time">Full-time</ListBox.Item>
                                        <ListBox.Item id="part-time" textValue="Part-time">Part-time</ListBox.Item>
                                        <ListBox.Item id="remote" textValue="Remote">Remote</ListBox.Item>
                                        <ListBox.Item id="contract" textValue="Contract">Contract</ListBox.Item>
                                        <ListBox.Item id="internship" textValue="Internship">Internship</ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                            {errors.type && <FieldError>{errors.type}</FieldError>}
                        </div>

                    </div>

                    {/* Salary */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                        <div className="flex flex-col gap-1">
                            <Label className="text-white">Min Salary</Label>
                            <Input
                                type="number"
                                value={form.salaryMin}
                                onChange={(e) => handleChange("salaryMin", e.target.value)}
                                // isInvalid={!!errors.salaryMin}
                            />
                            {errors.salaryMin && <FieldError>{errors.salaryMin}</FieldError>}
                        </div>

                        <div className="flex flex-col gap-1">
                            <Label className="text-white">Max Salary</Label>
                            <Input
                                type="number"
                                value={form.salaryMax}
                                onChange={(e) => handleChange("salaryMax", e.target.value)}
                                // isInvalid={!!errors.salaryMax}
                            />
                            {errors.salaryMax && <FieldError>{errors.salaryMax}</FieldError>}
                        </div>

                        <div className="flex flex-col gap-1">
                            <Label  className="text-white">Currency</Label>
                            <Select
                                value={form.currency}
                                onChange={(value) => handleChange("currency", value)}
                            >
                                <Select.Trigger>
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox>
                                        <ListBox.Item id="USD" textValue="USD">USD</ListBox.Item>
                                        <ListBox.Item id="SGD" textValue="SGD">SGD</ListBox.Item>
                                        <ListBox.Item id="EUR" textValue="EUR">EUR</ListBox.Item>
                                        <ListBox.Item id="BDT" textValue="BDT">BDT</ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                    </div>

                    {/* Location */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <div className="flex flex-col gap-1">
                            <Label className="text-white">Location</Label>
                            <Input
                                placeholder="City, Country"
                                value={form.location}
                                onChange={(e) => handleChange("location", e.target.value)}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <Label className="text-white">Application Deadline</Label>
                            <Input
                                type="date"
                                value={form.deadline}
                                onChange={(e) => handleChange("deadline", e.target.value)}
                                // isInvalid={!!errors.deadline}
                            />
                            {errors.deadline && <FieldError>{errors.deadline}</FieldError>}
                        </div>

                    </div>
                </fieldset>

                {/* ================= DESCRIPTION ================= */}
                <fieldset className="space-y-4 border p-5 rounded-xl w-full">
                    <legend className="text-lg font-semibold px-2">
                        <span className="text-white">Job Description</span>
                    </legend>

                    <div className="flex flex-col gap-1">
                        <Label className="text-white">Responsibilities</Label>
                        <TextArea
                            placeholder="Describe job responsibilities..."
                            value={form.responsibilities}
                            onChange={(e) =>
                                handleChange("responsibilities", e.target.value)
                            }
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <Label className="text-white">Requirements</Label>
                        <TextArea
                            placeholder="Skills, experience, qualifications..."
                            value={form.requirements}
                            onChange={(e) =>
                                handleChange("requirements", e.target.value)
                            }
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <Label className="text-white">Benefits (Optional)</Label>
                        <TextArea
                            placeholder="Perks, benefits, allowances..."
                            value={form.benefits}
                            onChange={(e) =>
                                handleChange("benefits", e.target.value)
                            }
                        />
                    </div>
                </fieldset>

                {/* ================= COMPANY INFO ================= */}
                {/* <fieldset className="border p-5 rounded-xl bg-gray-50 w-full">
                    <legend className="text-lg font-semibold px-2">
                        Company (Auto-filled)
                    </legend>

                    <p className="text-sm text-gray-600">
                        Posting as:{" "}
                        <span className="font-medium text-black">
                            {recruiterCompany?.name || "No company linked"}
                        </span>
                    </p>

                    <p className="text-xs text-gray-500 mt-2">
                        You can only post if your company plan allows remaining job slots.
                    </p>
                </fieldset> */}

                {/* ================= SUBMIT ================= */}
                <Button
                    type="submit"
                    variant="bordered"
                    className="w-full flex items-center justify-center gap-2 border-zinc-700 text-white hover:bg-zinc-800 transition"
                >
                    <FiSend className="text-blue-400" />
                    Publish Job
                </Button>

            </Form>
        </div>
    );
}
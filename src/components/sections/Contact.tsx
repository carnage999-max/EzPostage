"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { StringLineBackground } from "@/components/ui/StringLineBackground";
import { CONTENT } from "@/lib/constants";

export function Contact() {
    const { contact } = CONTENT;
    const [submitted, setSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [formData, setFormData] = useState({
        organization: "",
        fullName: "",
        email: "",
        phone: "",
        mailVolume: "Less than 1,000 / mo",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);

        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                const errorData = await response.json();
                const errorMessage = errorData.error?.message || errorData.message || "Failed to send message.";
                alert(errorMessage + " Please check your Resend dashboard configuration.");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section id="contact" className="relative py-32 overflow-hidden bg-white">

            {/* Moving Background */}
            <StringLineBackground />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Left Content / Image */}
                    <div className="space-y-8 lg:sticky lg:top-24">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-primary)]">
                            {contact.title}
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium">
                            {contact.description}
                        </p>

                        <div className="grid gap-4">
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] bg-gray-100 shadow-xl border border-gray-200">
                                <Image
                                    src="/images/postal-operations-team-trucks.png"
                                    alt="EzPost Fleet"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative aspect-[16/6] w-full overflow-hidden rounded-[24px] bg-gray-100 shadow-lg border border-gray-200">
                                <Image
                                    src="/images/postal-route-mobile-tracking.png"
                                    alt="Mobile Tracking"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-3 left-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full shadow-sm text-blue-800">
                                    Real-time Tracking
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form - Glassmophic iOS Card */}
                    <div className="ios-card bg-gray-50/80 backdrop-blur-sm p-8 md:p-12 relative overflow-hidden border border-gray-100 shadow-2xl">
                        {submitted ? (
                            <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center space-y-6 animate-in fade-in zoom-in duration-500">
                                <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 shadow-inner">
                                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-bold text-[var(--color-primary)]">Message Received</h3>
                                <p className="text-xl text-gray-600 max-w-xs mx-auto font-medium">
                                    {contact.successMessage}
                                </p>
                                <Button onClick={() => {
                                    setSubmitted(false);
                                    setFormData({
                                        organization: "",
                                        fullName: "",
                                        email: "",
                                        phone: "",
                                        mailVolume: "Less than 1,000 / mo",
                                        message: ""
                                    });
                                }} variant="outline" className="mt-8 border-2">
                                    Start New Request
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="space-y-5">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Organization</label>
                                        <input
                                            name="organization"
                                            value={formData.organization}
                                            onChange={handleChange}
                                            type="text"
                                            required
                                            className="w-full h-14 rounded-2xl border-transparent bg-white px-5 text-lg font-medium shadow-sm ring-1 ring-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all placeholder:text-gray-400"
                                            placeholder="Company or Agency Name"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Full Name</label>
                                            <input
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                type="text"
                                                required
                                                className="w-full h-14 rounded-2xl border-transparent bg-white px-5 text-lg font-medium shadow-sm ring-1 ring-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all placeholder:text-gray-400"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Email</label>
                                            <input
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                type="email"
                                                required
                                                className="w-full h-14 rounded-2xl border-transparent bg-white px-5 text-lg font-medium shadow-sm ring-1 ring-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all placeholder:text-gray-400"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Phone</label>
                                            <input
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                type="tel"
                                                className="w-full h-14 rounded-2xl border-transparent bg-white px-5 text-lg font-medium shadow-sm ring-1 ring-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all placeholder:text-gray-400"
                                                placeholder="(555) 123-4567"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Est. Mail Volume</label>
                                            <div className="relative">
                                                <select
                                                    name="mailVolume"
                                                    value={formData.mailVolume}
                                                    onChange={handleChange}
                                                    className="w-full h-14 rounded-2xl border-transparent bg-white px-5 text-lg font-medium shadow-sm ring-1 ring-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all appearance-none text-gray-900"
                                                >
                                                    <option>Less than 1,000 / mo</option>
                                                    <option>1,000 - 10,000 / mo</option>
                                                    <option>10,000 - 50,000 / mo</option>
                                                    <option>50,000+ / mo</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-gray-700">
                                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Message</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full rounded-2xl border-transparent bg-white px-5 py-4 text-lg font-medium shadow-sm ring-1 ring-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all placeholder:text-gray-400 resize-none"
                                            placeholder="Details about your needs..."
                                        />
                                    </div>
                                </div>

                                <Button
                                    size="lg"
                                    className="w-full h-16 text-xl shadow-xl mt-4 bg-[var(--color-accent)] hover:bg-red-700 disabled:opacity-70 disabled:cursor-not-allowed"
                                    type="submit"
                                    disabled={isSending}
                                >
                                    {isSending ? "Sending..." : contact.submitButton}
                                </Button>

                                <p className="text-center text-xs text-gray-400 mt-6 font-medium">
                                    By submitting, you agree to our Terms and Privacy Policy.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

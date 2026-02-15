"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        { href: "#how-it-works", label: "How It Works" },
        { href: "#who-its-for", label: "Who It’s For" },
        { href: "#why-ezpost", label: "Why EzPost" },
        { href: "#security", label: "Security" },
        { href: "#pricing", label: "Pricing" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 flex h-20 items-center justify-between bg-white/80 px-6 backdrop-blur-md transition-all duration-300 border-b border-black/5">
                <div className="flex items-center gap-3">
                    <Image
                        src="/images/ez-post-logo.png"
                        alt="EzPost Logo"
                        width={40}
                        height={40}
                        className="object-contain h-10 w-auto"
                    />
                    {/* Stylized EzPost Text */}
                    <span className="font-black italic text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-red-600 block">
                        EzPost<sup className="not-italic text-sm text-gray-400 font-medium ml-0.5">®</sup>
                    </span>
                </div>

                <div className="hidden lg:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-gray-600 hover:text-black transition-colors text-sm font-semibold tracking-wide"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button
                        size="sm"
                        className="bg-[#dc2626] text-white hover:bg-[#b91c1c] rounded-full px-6 shadow-md shadow-red-200"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Request a Pilot
                    </Button>
                </div>

                <div className="lg:hidden flex items-center gap-4">
                    <button
                        className="p-2 text-black hover:bg-gray-100 rounded-full transition-colors"
                        onClick={() => setIsOpen(true)}
                        aria-label="Open menu"
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu - Bottom Sheet Style */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden"
                        />

                        {/* Bottom Sheet */}
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed bottom-0 left-0 right-0 z-50 flex h-[85vh] flex-col rounded-t-[32px] bg-white p-8 shadow-2xl lg:hidden ring-1 ring-black/5"
                        >
                            {/* Drag Handle Indicator */}
                            <div className="flex justify-center mb-8" onClick={() => setIsOpen(false)}>
                                <div className="w-12 h-1.5 rounded-full bg-gray-300" />
                            </div>

                            <div className="flex justify-between items-center mb-6 absolute top-6 right-6">
                                <button onClick={() => setIsOpen(false)} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                                    <X className="h-6 w-6 text-gray-600" />
                                </button>
                            </div>

                            <div className="flex flex-col gap-6 items-center w-full mt-8 overflow-y-auto">
                                {links.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-2xl font-bold text-gray-900 hover:text-[#dc2626] transition-colors w-full text-center py-2"
                                    >
                                        {link.label}
                                    </Link>
                                ))}

                                <div className="mt-8 w-full max-w-sm">
                                    <Button
                                        size="lg"
                                        className="w-full bg-[#dc2626] text-white hover:bg-[#b91c1c] rounded-full text-lg h-14 shadow-lg shadow-red-200"
                                        onClick={() => {
                                            setIsOpen(false);
                                            setTimeout(() => {
                                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                            }, 300);
                                        }}
                                    >
                                        Request a Pilot
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

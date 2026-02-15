"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { StringLineBackground } from "@/components/ui/StringLineBackground";
import { CONTENT } from "@/lib/constants";

export function Hero() {
    const { hero } = CONTENT;
    const reduceMotion = useReducedMotion();

    return (
        <section className="relative overflow-hidden bg-white pt-32">
            {/* String Line Background */}
            <StringLineBackground />

            <div className="mx-auto max-w-6xl px-4 pb-16">
                {/* Stage - Flex column to handle natural flow */}
                <div className="relative mx-auto mt-6 flex flex-col items-center max-w-[800px]">

                    {/* Blob & Overlay Content Container */}
                    <div className="relative aspect-square w-[min(96vw,800px)]">

                        {/* Blob Background Layer */}
                        <motion.div
                            initial={{ opacity: 1, scale: 0.985, y: 10 }}
                            animate={
                                reduceMotion
                                    ? { scale: 1, y: 0 }
                                    : {
                                        scale: 1,
                                        y: 0,
                                        borderRadius: [
                                            "52% 48% 46% 54% / 54% 46% 55% 45%",
                                            "58% 42% 52% 48% / 46% 54% 44% 56%",
                                            "46% 54% 42% 58% / 58% 42% 56% 44%",
                                            "52% 48% 46% 54% / 54% 46% 55% 45%",
                                        ],
                                    }
                            }
                            transition={
                                reduceMotion
                                    ? { duration: 0.45, ease: "easeOut" }
                                    : { duration: 10, repeat: Infinity, ease: "easeInOut" }
                            }
                            className="absolute inset-0 z-0 shadow-2xl"
                            style={{
                                backgroundColor: "#0b1220",
                                borderRadius: "52% 48% 46% 54% / 54% 46% 55% 45%",
                                willChange: "border-radius",
                            }}
                        />

                        {/* Envelope orbit Layer */}
                        {!reduceMotion && (
                            <div className="absolute inset-0 z-10" aria-hidden>
                                <motion.div
                                    className="absolute inset-0"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                                >
                                    <div className="absolute right-1 top-1/2 -translate-y-1/2">
                                        <div className="rounded-full bg-white/10 p-2.5 shadow-xl ring-1 ring-white/15 backdrop-blur-sm">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="22"
                                                height="22"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="white"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="h-5 w-5"
                                            >
                                                <rect x="3" y="5" width="18" height="14" rx="2" />
                                                <path d="M21 7l-9 6-9-6" />
                                            </svg>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        )}

                        {/* Logo Layer - Restoring to prominent top position */}
                        <div className="absolute left-1/2 top-0 z-20 w-64 -translate-x-1/2 -translate-y-1/2 sm:w-80 drop-shadow-2xl">
                            <Image
                                src="/images/ez-post-logo.png"
                                alt="EzPost Logo"
                                width={520}
                                height={260}
                                priority
                                className="h-auto w-full object-contain"
                            />
                        </div>

                        {/* Text Content Layer - Re-balancing vertical position */}
                        <div className="absolute inset-0 z-30 flex items-center justify-center pt-28 sm:pt-32">
                            <div className="flex flex-col items-center text-center gap-6 px-8">
                                <motion.h1
                                    initial={{ opacity: 0, y: 14 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.55, ease: "easeOut", delay: 0.06 }}
                                    className="mx-auto max-w-[16ch] text-4xl sm:text-5xl font-black italic leading-tight tracking-tighter"
                                >
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-white">
                                        Never Miss a <span className="text-[#dc2626]">Deadline</span> Again.
                                    </span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 14 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
                                    className="mx-auto max-w-[38ch] text-base font-medium leading-relaxed text-white/85 sm:text-lg"
                                >
                                    {hero.subheadline}
                                </motion.p>

                                {"primaryMessage" in hero && hero.primaryMessage ? (
                                    <motion.p
                                        initial={{ opacity: 0, y: 14 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.55, ease: "easeOut", delay: 0.18 }}
                                        className="mx-auto max-w-[44ch] text-sm leading-relaxed text-white/75 sm:text-base"
                                    >
                                        {hero.primaryMessage}
                                    </motion.p>
                                ) : null}
                            </div>
                        </div>
                    </div>

                    {/* CTAs - Now naturally flows below the blob container */}
                    <div className="relative z-30 mt-12 w-full max-w-sm px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, ease: "easeOut", delay: 0.24 }}
                        >
                            <div className="flex flex-col gap-3">
                                <Button
                                    size="lg"
                                    className="h-14 w-full rounded-2xl bg-[#dc2626] text-base font-semibold text-white shadow-xl hover:bg-[#b91c1c]"
                                    onClick={() =>
                                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                                    }
                                >
                                    <span className="inline-flex items-center justify-center gap-2">
                                        {hero.primaryCTA} <span aria-hidden>→</span>
                                    </span>
                                </Button>

                                {hero.secondaryCTA ? (
                                    <Button
                                        variant="ghost"
                                        className="h-14 w-full rounded-2xl bg-white text-base font-semibold text-[#1d1d1f] shadow border border-black/10 hover:bg-[#f5f5f7]"
                                        onClick={() =>
                                            document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
                                        }
                                    >
                                        {hero.secondaryCTA}
                                    </Button>
                                ) : null}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

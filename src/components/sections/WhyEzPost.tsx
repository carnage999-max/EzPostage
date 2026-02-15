"use client";

import Image from "next/image";
import { CONTENT } from "@/lib/constants";

export function WhyEzPost() {
    const { whyEzPost } = CONTENT;

    return (
        <section id="why-ezpost" className="py-24 relative bg-gray-50">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Image Grid - Using multiple images now */}
                    <div className="relative h-full min-h-[400px] flex flex-col gap-4">
                        <div className="flex-1 w-full overflow-hidden rounded-[32px] shadow-xl border border-white bg-white relative">
                            <Image
                                src="/images/auto-sort-mail-processing.png"
                                alt="Efficient Mail Sort"
                                fill
                                className="object-cover" // Clean image
                            />
                        </div>
                        <div className="h-40 w-full overflow-hidden rounded-[32px] shadow-lg border border-white bg-white relative">
                            <Image
                                src="/images/insufficient-postage-return.png" // Show the problem we fix
                                alt="Returned Mail Problem"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                Problem We Solve
                            </div>
                        </div>
                    </div>

                    {/* Content Card */}
                    <div className="ios-card bg-white p-10 md:p-14 flex flex-col justify-center h-full shadow-xl border border-gray-100">
                        <div className="inline-flex self-start items-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 mb-8 border border-blue-100">
                            Why EzPost®
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-primary)] mb-8 leading-tight">
                            {whyEzPost.title}
                        </h2>
                        <p className="text-2xl md:text-3xl text-gray-600 leading-snug font-medium text-balance">
                            {whyEzPost.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

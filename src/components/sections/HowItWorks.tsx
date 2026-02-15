"use client";

import Image from "next/image";
import { CONTENT } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function HowItWorks() {
    const { howItWorks } = CONTENT;

    return (
        <section id="how-it-works" className="py-24 relative overflow-hidden bg-white">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="ios-card bg-gray-50 border border-gray-100 p-8 md:p-12 lg:p-16 overflow-hidden relative shadow-lg">

                    <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
                        {/* Text Content */}
                        <div className="space-y-8 order-2 md:order-1">
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-primary)]">
                                {howItWorks.title}
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed text-balance font-medium">
                                {howItWorks.description}
                            </p>

                            <div className="space-y-4 pt-4">
                                {howItWorks.bullets.map((bullet, index) => (
                                    <div key={index} className="flex items-center gap-4 group">
                                        <div className="h-10 w-10 flex-shrink-0 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-[var(--color-accent)] group-hover:scale-110 transition-transform font-bold">
                                            {index + 1}
                                        </div>
                                        <span className="text-lg font-medium text-gray-800">{bullet}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Image container - No Overlays, Pure Image */}
                        <div className="relative order-1 md:order-2">
                            <div className="aspect-[4/3] w-full overflow-hidden rounded-[32px] shadow-2xl bg-white border border-gray-100">
                                <Image
                                    src="/images/postage-due-shortfall-007.png"
                                    alt="EzPost Process"
                                    width={800}
                                    height={600}
                                    className="h-full w-full object-cover" // Removed opacity/mix-blend
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

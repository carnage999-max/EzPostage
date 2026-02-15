"use client";

import Image from "next/image";
import { ShieldCheck, Lock, EyeOff } from "lucide-react";
import { CONTENT } from "@/lib/constants";

export function Security() {
    const { security } = CONTENT;

    return (
        <section id="security" className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden">
            {/* Deep, premium dark mode iOS feel - Cleaned up */}

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white ring-1 ring-inset ring-white/20 uppercase tracking-wider backdrop-blur-sm">
                            <ShieldCheck className="w-4 h-4" /> Security First
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white drop-shadow-md">
                            {security.title}
                        </h2>

                        <p className="text-xl text-white/80 leading-relaxed font-light text-balance">
                            {security.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-colors shadow-2xl">
                                <Lock className="w-8 h-8 text-[var(--color-accent)] mb-4" />
                                <h3 className="font-semibold text-lg text-white">Enterprise Encryption</h3>
                            </div>
                            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-colors shadow-2xl">
                                <EyeOff className="w-8 h-8 text-[var(--color-accent)] mb-4" />
                                <h3 className="font-semibold text-lg text-white">No Content Access</h3>
                            </div>
                        </div>
                    </div>

                    <div className="relative grid gap-4">
                        <div className="aspect-[4/3] w-full overflow-hidden rounded-[32px] bg-gray-900 shadow-2xl ring-1 ring-white/10">
                            <Image
                                src="/images/postal-staff-scanning-mail.png"
                                alt="Secure Operations"
                                width={800}
                                height={600}
                                className="h-full w-full object-cover" // Full opacity, No blend modes
                            />
                        </div>
                        {/* Secondary Security Image */}
                        <div className="aspect-[16/5] w-full overflow-hidden rounded-[24px] bg-gray-900 shadow-xl ring-1 ring-white/10 flex items-center justify-center relative">
                            <Image
                                src="/images/mail-qr-scan-verification.png"
                                alt="Verification Scanning"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <span className="text-white font-mono text-sm tracking-widest uppercase border border-white/30 px-3 py-1 rounded bg-black/50 backdrop-blur-sm">Verified Handling</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

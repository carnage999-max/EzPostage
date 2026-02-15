"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CONTENT } from "@/lib/constants";

export function Pricing() {
    const { pricing } = CONTENT;

    return (
        <section id="pricing" className="py-32 relative">
            <div className="container mx-auto px-6 max-w-4xl"> {/* reduced max-w for centered single card */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-primary)] mb-6">
                        {pricing.title}
                    </h2>
                    <p className="text-xl text-[var(--color-foreground)]/70 max-w-2xl mx-auto text-balance font-medium">
                        {pricing.description}
                    </p>
                </div>

                <div className="flex justify-center pt-4">
                    {/* Enterprise Card - Only one remaining, centered */}
                    <div className="ios-card w-full max-w-2xl flex flex-col p-10 md:p-12 relative overflow-hidden group hover:border-[var(--color-primary)]/20 transition-colors shadow-xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-20 pointer-events-none -mr-16 -mt-16" />

                        <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2">Enterprise</h3>
                        <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--color-foreground)] mb-6">Custom</div>
                        <p className="flex-1 text-gray-600 mb-10 leading-relaxed font-medium">
                            Strict access controls, immutable logs, and dedicated support for large organizations.
                        </p>
                        <div className="space-y-4 mb-10">
                            {[
                                "Institutional Licensing",
                                "Audit Logs & Compliance",
                                "Priority Support",
                                "Custom Integration"
                            ].map((feat) => (
                                <li key={feat} className="flex gap-4 items-center">
                                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                        <Check className="h-3.5 w-3.5 text-green-700" strokeWidth={3} />
                                    </div>
                                    <span className="text-gray-700 font-medium">{feat}</span>
                                </li>
                            ))}
                        </div>
                        <Button
                            size="lg"
                            className="w-full h-14 text-lg shadow-xl bg-[var(--color-accent)] text-white hover:bg-black"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            {pricing.primaryCTA}
                        </Button>
                    </div>
                    {/* Consumer Card Removed */}
                </div>
            </div>
        </section>
    );
}

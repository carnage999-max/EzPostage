"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTENT } from "@/lib/constants";

export function Faq() {
    const { faq } = CONTENT;
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-32 relative">
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 className="mb-16 text-center text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-primary)]">
                    {faq.title}
                </h2>

                <div className="space-y-6">
                    {faq.items.map((item, index) => (
                        <div
                            key={index}
                            className={`group rounded-[28px] transition-all duration-300 ${openIndex === index
                                    ? "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] ring-1 ring-black/5"
                                    : "bg-white/60 hover:bg-white/80 shadow-sm border border-transparent hover:border-white/50"
                                }`}
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="flex w-full items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                            >
                                <span className="text-xl font-semibold text-[var(--color-foreground)] pr-8 leading-snug">
                                    {item.question}
                                </span>
                                <span className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center transition-colors duration-300 ${openIndex === index ? "bg-[var(--color-primary)] text-white" : "bg-gray-100 text-gray-500 group-hover:bg-[var(--color-primary)]/10 group-hover:text-[var(--color-primary)]"}`}>
                                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                </span>
                            </button>

                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <div className="px-6 pb-8 md:px-8 text-lg text-gray-600 leading-relaxed font-medium">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

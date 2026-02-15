"use client";

import { Scale, FileText, Building2, Briefcase, Mail, Globe, Truck, Users } from "lucide-react";
import { motion } from "framer-motion";
import { CONTENT } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function WhoItsFor() {
    const { whoItsFor } = CONTENT;

    const icons = [Scale, FileText, Building2, Briefcase, Mail, Globe, Truck, Users];

    return (
        <section id="who-its-for" className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[var(--color-primary)] mb-4">
                        {whoItsFor.title}
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        Tailored solutions for every scale of operation.
                    </p>
                </div>

                {/* Bento Grid / Treemap Layout - Responsive for Mobile too */}
                {/* We use grid-cols-2 on small screens to allow the 'treemap' feel without strict stacking */}
                <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[160px] md:auto-rows-[180px] gap-3 md:gap-4">
                    {whoItsFor.items.map((item, index) => {
                        const Icon = icons[index % icons.length];

                        // Determine span styles
                        // On mobile (default): varied spans to create treemap feel
                        // On desktop (sm+): larger spans

                        let spanClass = "";
                        // Logic: 
                        // Item 0: Big box (2x2 on all)
                        // Item 3, 6: medium horizontal (2x1)

                        if (index === 0) spanClass = "col-span-2 row-span-2";
                        else if (index === 3) spanClass = "col-span-2";
                        else if (index === 6) spanClass = "col-span-2";
                        else spanClass = "col-span-1"; // default 1x1

                        // Varied background colors
                        const bgClass = index === 0 ? "bg-white" : "bg-white/60";

                        return (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className={cn(
                                    "group relative flex flex-col justify-between p-4 md:p-6 rounded-[24px] border border-gray-200 hover:border-[var(--color-primary)] hover:shadow-xl transition-all duration-300 overflow-hidden",
                                    bgClass,
                                    spanClass
                                )}
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500 pointer-events-none">
                                    <Icon className="w-16 h-16 md:w-24 md:h-24 text-[var(--color-primary)]" />
                                </div>

                                <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-gray-100 flex items-center justify-center text-[var(--color-primary)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors shrink-0">
                                    <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2} />
                                </div>

                                <div className="mt-2">
                                    <h3 className={cn(
                                        "font-bold text-[var(--color-primary)] leading-tight",
                                        index === 0 ? "text-2xl md:text-3xl" : "text-sm md:text-xl"
                                    )}>
                                        {item}
                                    </h3>
                                    {index === 0 && (
                                        <p className="text-gray-500 mt-2 font-medium text-xs md:text-base">
                                            Our primary partners for high-volume automated processing.
                                        </p>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

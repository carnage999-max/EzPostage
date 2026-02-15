"use client";

import Link from "next/link";
import Image from "next/image";
import { Twitter, Facebook, Instagram, Youtube } from "lucide-react";
import { CONTENT } from "@/lib/constants";

export function Footer() {
    const { footer } = CONTENT;

    const socialIcons: Record<string, React.ReactNode> = {
        "X": <Twitter className="h-5 w-5" />,
        "Facebook": <Facebook className="h-5 w-5" />,
        "Instagram": <Instagram className="h-5 w-5" />,
        "YouTube": <Youtube className="h-5 w-5" />,
    };

    return (
        <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-12 gap-8">
                    {/* Contact Info - Takes full width on mobile (col-span-2) but matches desktop layout */}
                    <div className="col-span-2 space-y-6">
                        <h3 className="text-xl font-bold tracking-tight text-white mb-4">Contact</h3>
                        <div className="space-y-4 text-gray-400 font-light">
                            <p>
                                {footer.contactInfo.address.map((line, i) => (
                                    <span key={i} className="block">{line}</span>
                                ))}
                            </p>
                            <p className="block hover:text-white transition-colors">
                                <a href={`tel:${footer.contactInfo.phone}`}>{footer.contactInfo.phone}</a>
                            </p>
                            <p className="block hover:text-white transition-colors">
                                <a href={`mailto:${footer.contactInfo.email}`}>{footer.contactInfo.email}</a>
                            </p>
                        </div>
                    </div>

                    {/* Links - 1 col on mobile */}
                    <div className="col-span-1 space-y-6">
                        <h3 className="text-xl font-bold tracking-tight text-white mb-4">Legal</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link href="/privacy" className="hover:text-[var(--color-accent)] transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-[var(--color-accent)] transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Social - 1 col on mobile */}
                    <div className="col-span-1 space-y-6">
                        <h3 className="text-xl font-bold tracking-tight text-white mb-4">Follow Us</h3>
                        <div className="flex flex-wrap gap-4">
                            {footer.links.filter(l => l !== "Privacy Policy" && l !== "Terms").map((link) => {
                                const isLiberty = link === "Liberty Social";
                                return (
                                    <a
                                        key={link}
                                        href="#"
                                        className={isLiberty
                                            ? "relative h-10 w-10 overflow-hidden rounded-full transition-opacity hover:opacity-80 shadow-md"
                                            : "flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-[var(--color-accent)] transition-colors text-white"
                                        }
                                        aria-label={link}
                                    >
                                        {isLiberty ? (
                                            <Image
                                                src="/images/icon/liberty-social.png"
                                                alt="Liberty Social"
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            socialIcons[link] || link[0]
                                        )}
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} EzPost®. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                    </div>
                </div>
            </div>
        </footer>
    );
}

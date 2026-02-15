"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-white font-sans antialiased text-gray-900 selection:bg-red-600 selection:text-white pt-24 pb-12">
            <Navigation />

            <div className="container mx-auto px-6 max-w-4xl py-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Terms of Service</h1>

                <div className="prose prose-lg prose-gray max-w-none space-y-8">
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                        <p className="font-medium">Last Updated: February 15, 2026</p>
                    </div>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using the services provided by EzPost® ("Service"), you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
                        <p>
                            EzPost® provides a postage shortfall correction service designed to ensure mail delivery continuity. We automatically fund the difference for under-posted mail based on pre-configured rules and account balances.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">3. User Obligations</h2>
                        <p>
                            You agree to provide accurate and complete information during registration and to maintain the security of your account credentials. You are responsible for all activities that occur under your account.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">4. Payment and Billing</h2>
                        <p>
                            Services are billed according to the plan selected. You authorize us to charge your payment method for all fees incurred. All fees are non-refundable unless otherwise stated.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
                        <p>
                            All content, trademarks, and data on this Service, including the EzPost® brand, are the property of EzPost® or its licensors and are protected by applicable intellectual property laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
                        <p>
                            To the fullest extent permitted by law, EzPost® shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">7. Termination</h2>
                        <p>
                            We reserve the right to suspend or terminate your access to the Service at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users of the Service, us, or third parties, or for any other reason.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
                        <p>
                            These Terms shall be governed by and construed in accordance with the laws of the State of Maine, without regard to its conflict of law principles.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
                        <p>
                            Questions about the Terms of Service should be sent to us at <a href="mailto:info@ez-postage.com" className="text-blue-600 hover:underline">info@ez-postage.com</a>.
                        </p>
                    </section>

                    <p className="text-sm text-gray-500 mt-12">
                        © 2026 EzPost®. All rights reserved.
                    </p>
                </div>
            </div>

            <Footer />
        </main>
    );
}

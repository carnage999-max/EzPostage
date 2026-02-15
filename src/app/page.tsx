import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhoItsFor } from "@/components/sections/WhoItsFor";
import { WhyEzPost } from "@/components/sections/WhyEzPost";
import { Security } from "@/components/sections/Security";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { SectionDivider } from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] font-sans antialiased text-gray-900 selection:bg-[var(--color-accent)] selection:text-white">
      <Navigation />

      <Hero />
      <SectionDivider variant="red" />
      <HowItWorks />
      <SectionDivider variant="blue" />
      <WhoItsFor />
      <SectionDivider variant="red" />
      <WhyEzPost />
      <SectionDivider variant="blue" />
      <Security />
      <SectionDivider variant="red" />
      <Pricing />
      <SectionDivider variant="blue" />
      <Faq />
      <SectionDivider variant="red" />
      <Contact />

      <Footer />
    </main>
  );
}

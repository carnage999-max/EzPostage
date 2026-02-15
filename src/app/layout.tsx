import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EzPost® - Stop Wasting Time, Money & Missing Deadlines.",
  description: "EzPost® ensures your mail gets delivered even when postage is pennies short. Institutional-grade postage solution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--color-accent)] selection:text-white">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "EzPost® - Stop Wasting Time, Money & Missing Deadlines.",
  description: "EzPost® ensures your mail gets delivered even when postage is pennies short. Institutional-grade postage solution.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
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
        <Script
          src="https://now-hiring-eta.vercel.app/widget.js"
          data-icon="Mail"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

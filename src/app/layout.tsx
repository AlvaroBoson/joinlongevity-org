import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import React from "react";
import Header from "@/components/Header";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Join Longevity - Extend Your Healthspan",
  description: "Join Longevity is dedicated to helping you live a longer, healthier life through evidence-based practices and community support.",
  keywords: ["longevity", "healthspan", "lifespan", "health", "wellness", "anti-aging"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
      >
        <Header />
        
        {/* Main Content and Footer with consistent dark background */}
        <div className="bg-[#1E2A38]">
        {children}
          {/* Footer */}
          <footer className="mt-16 bg-[#1a1f2e] text-white border-t border-[#2a2f3e]">
            <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row md:justify-between gap-8">
              {/* Logo and tagline */}
              <div className="flex flex-col items-start md:items-start gap-3 md:w-1/3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block w-8 h-8">
                    <Image src="/image/homepage/jl_logo.svg" alt="Join Longevity Logo" width={32} height={32} className="w-8 h-8" />
                  </span>
                  <span className="text-xl font-semibold">Join Longevity</span>
                </div>
                <span className="text-sm text-gray-300">Helping people navigate, apply, and support longevity</span>
              </div>
              {/* Navigation links */}
              <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                <Link href="/" className="hover:text-green-400">Home</Link>
                <Link href="/longevity-map" className="hover:text-green-400">The Longevity Map</Link>
                <Link href="/get-involved" className="hover:text-green-400">Get Involved</Link>
                <Link href="/longevity-lifestyle" className="hover:text-green-400">Longevity Lifestyle</Link>
                <Link href="/#faq" className="hover:text-green-400">FAQ</Link>
                <Link href="/blog#join-biotech-blog" className="hover:text-green-400">Newsletter Signup</Link>
                <Link href="/#news-opportunities" className="hover:text-green-400">News & Opportunities</Link>
                <Link href="/whos-who" className="hover:text-green-400">Who&apos;s Who in Longevity</Link>
                <Link href="/blog#jl-projects" className="hover:text-green-400">Join Our Projects</Link>
                <Link href="/about" className="hover:text-green-400">About Join Longevity</Link>
                <Link href="mailto:alex@joinlongevity.org" className="hover:text-green-400">Contact</Link>
              </div>
            </div>
            <div className="text-center text-xs text-gray-400 py-4 border-t border-[#2a2f3e] mt-8">
              © 2025 Join Longevity. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

"use client";

import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLongevityMapPage = pathname === "/longevity-map";
  const isHomePage = pathname === "/";
  const isSpecialPage = isLongevityMapPage || isHomePage;

  useEffect(() => {
    // Only disable scrolling on the map page
    if (isLongevityMapPage) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isLongevityMapPage]);

  const containerClasses = [
    isSpecialPage ? 'flex-grow' : 'bg-[#1E2A38]',
    isLongevityMapPage ? 'relative' : ''
  ].join(' ');

  return (
    <div className={containerClasses}>
      {children}
      {!isSpecialPage && (
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
                <Link href="/apply-longevity" className="hover:text-green-400">Apply Longevity</Link>
                <Link href="/longevity-explorer" className="hover:text-green-400">Longevity Explorer</Link>
                <Link href="/longevity-lifestyle" className="hover:text-green-400">Longevity Lifestyle</Link>
                <Link href="/#faq" className="hover:text-green-400">FAQ</Link>
                <Link href="/blog#join-biotech-blog" className="hover:text-green-400">Newsletter Signup</Link>
                <Link href="/#news-opportunities" className="hover:text-green-400">News & Opportunities</Link>
                <Link href="/longevity-explorer" className="hover:text-green-400">Longevity Explorer</Link>
                <Link href="/blog#jl-projects" className="hover:text-green-400">Join Our Projects</Link>
                <Link href="/about" className="hover:text-green-400">About</Link>
                <Link href="mailto:alex@joinlongevity.org" className="hover:text-green-400">Contact</Link>
              </div>
            </div>
            <div className="text-center text-xs text-gray-400 py-4 border-t border-[#2a2f3e] mt-8">
              © 2025 Join Longevity. All rights reserved.
            </div>
          </footer>
      )}
    </div>
  );
} 
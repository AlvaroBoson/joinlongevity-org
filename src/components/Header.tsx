"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/whos-who", label: "Who\'s Who" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2, ease: "easeInOut" }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeInOut" }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2, ease: "easeInOut" }
  }
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="relative sticky top-0 z-30 w-full bg-[#1a1f2e] text-white border-b border-[#2a2f3e]">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block w-8 h-8">
            <Image src="/image/homepage/jl_logo.svg" alt="Join Longevity Logo" width={32} height={32} className="w-8 h-8" />
          </span>
          <span className="text-lg font-normal">Join Longevity</span>
        </Link>
        
        {/* Desktop Menu & Support Button */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-6 font-medium text-sm">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-[#64BC6E] transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <Link href="/get-involved#support-advocate" className="px-5 py-2 bg-[#64BC6E] text-[#1E2A38] rounded-full font-medium text-sm hover:bg-[#4fa65b] transition-colors">
            Support
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Link href="/get-involved#support-advocate" className="px-4 py-2 mr-2 bg-[#64BC6E] text-[#1E2A38] rounded-full font-medium text-xs hover:bg-[#4fa65b] transition-colors">
            Support
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md hover:bg-[#2a2f3e] focus:outline-none focus:bg-[#2a2f3e] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel with AnimatePresence for exit animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden absolute top-full left-0 right-0 bg-[#1a1f2e] border-t border-[#2a2f3e] shadow-lg"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.label} 
                  href={link.href} 
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#2a2f3e] hover:text-[#64BC6E] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 
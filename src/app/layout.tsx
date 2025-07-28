import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import React from "react";
import Header from "@/components/Header";
import "./globals.css";
import PageLayout from "@/components/PageLayout";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
      >
        <Header />
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}

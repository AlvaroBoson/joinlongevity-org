import { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "Join Longevity | Your Guide to the Longevity Ecosystem",
  description: "Longevity is for everyone. Join Longevity is your entry point to the world of healthspan. Explore the science, find projects to join, discover who to trust, and see how you can contribute to the future of health.",
  keywords: ["longevity", "healthspan", "lifespan extension", "join longevity", "longevity community", "future of health", "aging research", "contribute to longevity"],
  openGraph: {
    title: "Join Longevity | Your Guide to the Longevity Ecosystem",
    description: "Longevity is for everyone. Join Longevity is your entry point to the world of healthspan. Explore the science, find projects to join, discover who to trust, and see how you can contribute to the future of health.",
    url: "https://joinlongevity.com",
    siteName: "Join Longevity",
    images: [
      {
        url: "https://joinlongevity.com/image/og-image.webp", // Assuming a general OG image for the homepage
        width: 1200,
        height: 630,
        alt: "Logo and tagline for Join Longevity, a guide to the longevity ecosystem.",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join Longevity | Your Guide to the Longevity Ecosystem",
    description: "Longevity is for everyone. Join Longevity is your entry point to the world of healthspan. Explore the science, find projects to join, discover who to trust, and see how you can contribute to the future of health.",
    images: ["https://joinlongevity.com/image/og-image.webp"],
  },
};

export default function Home() {
  return <HomePageClient />;
}

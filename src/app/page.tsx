import { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "Join Longevity: Your Guide to the Longevity Ecosystem",
  description: "Join Longevity is your independent guide to the longevity ecosystem. We provide curated, fact-based information to help you navigate the future of health and well-being.",
  keywords: ["longevity", "healthspan", "lifespan extension", "join longevity", "longevity community", "future of health", "aging research", "contribute to longevity"],
  openGraph: {
    title: "Join Longevity: Your Guide to the Longevity Ecosystem",
    description: "Join Longevity is your independent guide to the longevity ecosystem. We provide curated, fact-based information to help you navigate the future of health and well-being.",
    url: "https://joinlongevity.org",
    siteName: "Join Longevity",
    images: [
      {
        url: "https://joinlongevity.org/image/og-image.webp", // Assuming a general OG image for the homepage
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
    title: "Join Longevity: Your Guide to the Longevity Ecosystem",
    description: "Join Longevity is your independent guide to the longevity ecosystem. We provide curated, fact-based information to help you navigate the future of health and well-being.",
    images: ["https://joinlongevity.org/image/og-image.webp"],
    creator: "@joinlongevity",
  },
};

export default function Home() {
  return <HomePageClient />;
}

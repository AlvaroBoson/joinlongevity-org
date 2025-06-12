import { Metadata } from "next";
import LongevityMapClient from "@/components/LongevityMapClient";

export const metadata: Metadata = {
  title: "The Longevity Map: A Framework for Extending Healthspan | Join Longevity",
  description: "Explore the interconnected world of longevity with our comprehensive visual guide. The Longevity Map helps you navigate the key players and sectors shaping the future of health.",
  keywords: ["Longevity", "Healthspan", "Lifespan", "Extending Healthspan", "Longevity Map", "Join Longevity"],
  alternates: {
    canonical: "/longevity-map",
  },
  openGraph: {
    title: "The Longevity Map: A Framework for Extending Healthspan | Join Longevity",
    description: "Explore the interconnected world of longevity with our comprehensive visual guide. The Longevity Map helps you navigate the key players and sectors shaping the future of health.",
    url: "https://joinlongevity.org/longevity-map",
    siteName: "Join Longevity",
    images: [
      {
        url: "https://joinlongevity.org/image/longevitymap/healthspan-life-extension-immortality.webp",
        width: 1200,
        height: 630,
        alt: "The three horizons of longevity: Healthspan, Life Extension, and Immortality.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Longevity Map: A Framework for Extending Healthspan | Join Longevity",
    description: "Discover the Longevity Map, a framework for extending healthspan and understanding the longevity field. Join Longevity for insights and opportunities.",
    images: ["https://joinlongevity.org/image/longevitymap/healthspan-life-extension-immortality.webp"],
    creator: "@joinlongevity",
  },
};

export default function LongevityMapPage() {
  return <LongevityMapClient />;
} 
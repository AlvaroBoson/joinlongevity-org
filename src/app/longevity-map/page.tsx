import { Metadata } from "next";
import LongevityMapClient from "@/components/LongevityMapClient";

export const metadata: Metadata = {
  title: "The Longevity Map: A Framework for Extending Healthspan | Join Longevity",
  description: "Discover the Longevity Map, a framework for extending healthspan and understanding the longevity field. Join Longevity for insights and opportunities.",
  keywords: ["Longevity", "Healthspan", "Lifespan", "Extending Healthspan", "Longevity Map", "Join Longevity"],
  openGraph: {
    title: "The Longevity Map: A Framework for Extending Healthspan | Join Longevity",
    description: "Discover the Longevity Map, a framework for extending healthspan and understanding the longevity field. Join Longevity for insights and opportunities.",
    url: "https://longevity.joinlongevity.com",
    siteName: "Join Longevity",
    images: ["https://longevity.joinlongevity.com/image/longevitymap/healthspan-life-extension-immortality.webp"],
    locale: "en-US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "The Longevity Map: A Framework for Extending Healthspan | Join Longevity",
    description: "Discover the Longevity Map, a framework for extending healthspan and understanding the longevity field. Join Longevity for insights and opportunities.",
    images: ["https://longevity.joinlongevity.com/image/longevitymap/healthspan-life-extension-immortality.webp"]
  }
};

export default function LongevityMapPage() {
  return <LongevityMapClient />;
} 
import { Metadata } from 'next';
import WhosWhoClient from '@/components/WhosWhoClient';

export const metadata: Metadata = {
  title: "Who's Who in Longevity: A Curated Directory with Trust Scores | Join Longevity",
  description: "Navigate the longevity space with confidence. Explore our curated directory of the most influential people, companies, and projects, complete with community-driven trust scores to help you find who to follow.",
  keywords: ["who's who in longevity", "longevity leaders", "longevity companies", "longevity investors", "healthspan experts", "trustworthy longevity sources"],
  openGraph: {
    title: "Who's Who in Longevity: A Curated Directory with Trust Scores | Join Longevity",
    description: "Navigate the longevity space with confidence. Explore our curated directory of the most influential people, companies, and projects, complete with community-driven trust scores to help you find who to follow.",
    url: "https://joinlongevity.com/whos-who",
    siteName: "Join Longevity",
    images: [
      {
        url: "https://joinlongevity.com/image/whoswho/whos-who-og.webp", // Assuming a relevant OG image
        width: 1200,
        height: 630,
        alt: "A collage of profile cards from the Who's Who in Longevity directory.",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Who's Who in Longevity: A Curated Directory with Trust Scores | Join Longevity",
    description: "Navigate the longevity space with confidence. Explore our curated directory of the most influential people, companies, and projects, complete with community-driven trust scores to help you find who to follow.",
    images: ["https://joinlongevity.com/image/whoswho/whos-who-og.webp"],
  },
};

export default function WhosWhoPage() {
  return <WhosWhoClient />;
} 
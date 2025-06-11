import { Metadata } from 'next';
import BlogPageClient from '@/components/BlogPageClient';

export const metadata: Metadata = {
  title: "The Join Longevity Blog | Curated Insights on Longevity",
  description: "Explore the Join Longevity blog, where volunteers and experts collaborate to share fact-based news, trends, and insights from the world of longevity.",
  keywords: ["longevity blog", "longevity news", "healthspan research", "biotech insights", "longevity community"],
  openGraph: {
    title: "The Join Longevity Blog | Curated Insights on Longevity",
    description: "Explore the Join Longevity blog, where volunteers and experts collaborate to share fact-based news, trends, and insights from the world of longevity.",
    url: "https://joinlongevity.com/blog",
    siteName: "Join Longevity",
    images: [
      {
        url: "https://joinlongevity.com/image/blog/blog-og.webp", // Assuming a relevant OG image
        width: 1200,
        height: 630,
        alt: "An overview of the Join Longevity blog with featured articles.",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Join Longevity Blog | Curated Insights on Longevity",
    description: "Explore the Join Longevity blog, where volunteers and experts collaborate to share fact-based news, trends, and insights from the world of longevity.",
    images: ["https://joinlongevity.com/image/blog/blog-og.webp"],
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
} 
import { Metadata } from 'next';
import BlogPageClient from '@/components/BlogPageClient';

export const metadata: Metadata = {
  title: "The Join Longevity Blog | Curated Insights on Longevity",
  description: "Explore the Join Longevity blog, where volunteers and experts collaborate to share fact-based news, trends, and insights from the world of longevity.",
  keywords: ["longevity blog", "longevity news", "healthspan research", "biotech insights", "longevity community"],
  openGraph: {
    title: "The Join Longevity Blog: Latest News & Insights",
    description: "Stay informed with the latest news, research, and insights from the world of longevity. The Join Longevity blog is your trusted source for actionable information.",
    url: "https://joinlongevity.org/blog",
    siteName: "Join Longevity",
    images: [
      {
        url: "https://joinlongevity.org/image/blog/blog-og.webp", // Assuming a relevant OG image
        width: 1200,
        height: 630,
        alt: "An article from the Join Longevity blog, showing a title and featured image.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Join Longevity Blog: Latest News & Insights",
    description: "Stay informed with the latest news, research, and insights from the world of longevity. The Join Longevity blog is your trusted source for actionable information.",
    images: ["https://joinlongevity.org/image/blog/blog-og.webp"],
    creator: "@joinlongevity",
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
} 
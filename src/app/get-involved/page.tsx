import { Metadata } from 'next';
import GetInvolvedClient from '@/components/GetInvolvedClient';

export const metadata: Metadata = {
  title: "Get Involved in Longevity | Projects, Jobs & Events | Join Longevity",
  description: "Find your place in the longevity field. Discover projects, jobs, events, and communities where you can contribute, learn, and make an impact—no science background required.",
  keywords: ["longevity jobs", "longevity projects", "longevity community", "get involved in longevity", "longevity events", "contribute to longevity"],
  openGraph: {
    title: "Get Involved in Longevity | Projects, Jobs & Events | Join Longevity",
    description: "Find your place in the longevity field. Discover projects, jobs, events, and communities where you can contribute, learn, and make an impact—no science background required.",
    url: "https://joinlongevity.com/get-involved",
    siteName: "Join Longevity",
    images: [
      {
        url: "https://joinlongevity.com/image/getinvolved/get-involved-og.webp", // Assuming you'll create a relevant OG image
        width: 1200,
        height: 630,
        alt: "A collage of people collaborating on longevity projects.",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Involved in Longevity | Projects, Jobs & Events | Join Longevity",
    description: "Find your place in the longevity field. Discover projects, jobs, events, and communities where you can contribute, learn, and make an impact—no science background required.",
    images: ["https://joinlongevity.com/image/getinvolved/get-involved-og.webp"],
  },
};

export default function GetInvolvedPage() {
  return <GetInvolvedClient />;
} 
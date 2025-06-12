import { Metadata } from 'next';
import GetInvolvedClient from '@/components/GetInvolvedClient';

export const metadata: Metadata = {
  title: "Get Involved in Longevity: Join the Movement | Join Longevity",
  description: "Discover how you can contribute to the longevity field. Find communities, events, and projects that match your interests and skills at Join Longevity.",
  keywords: ["longevity jobs", "longevity projects", "longevity community", "get involved in longevity", "longevity events", "contribute to longevity"],
  openGraph: {
    title: "Get Involved in Longevity: Join the Movement | Join Longevity",
    description: "Discover how you can contribute to the longevity field. Find communities, events, and projects that match your interests and skills at Join Longevity.",
    url: "https://joinlongevity.org/get-involved",
    siteName: "Join Longevity",
    images: [
      {
        url: "https://joinlongevity.org/image/getinvolved/get-involved-og.webp", // Assuming you'll create a relevant OG image
        width: 1200,
        height: 630,
        alt: "A collage of images representing community, events, and collaboration in the longevity space.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Involved in Longevity: Join the Movement | Join Longevity",
    description: "Discover how you can contribute to the longevity field. Find communities, events, and projects that match your interests and skills at Join Longevity.",
    images: ["https://joinlongevity.org/image/getinvolved/get-involved-og.webp"],
    creator: "@joinlongevity",
  },
};

export default function GetInvolvedPage() {
  return <GetInvolvedClient />;
} 
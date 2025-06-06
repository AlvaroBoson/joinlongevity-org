import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const sitemapUrl = `https://www.joinlongevity.org/sitemap.xml`;

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: sitemapUrl,
  };
} 
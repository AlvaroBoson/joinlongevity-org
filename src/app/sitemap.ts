import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = siteConfig.lastUpdated ? new Date(siteConfig.lastUpdated) : new Date();
  
  const routes = [
    '/',
    '/about',
    '/blog',
    '/get-involved',
    '/longevity-lifestyle',
    '/longevity-map',
    '/whos-who',
  ].map((route) => ({
    url: `https://www.joinlongevity.org${route}`,
    lastModified,
  }));

  return routes;
} 
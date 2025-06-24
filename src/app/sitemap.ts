import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '', 
    '/about', 
    '/apply-longevity', 
    '/get-involved', 
    '/introduction', 
    '/longevity-map', 
    '/longevity-explorer',
    '/projects-jobs'
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
  }));
 
  return routes;
}
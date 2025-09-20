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
    '/longevity-map-pro', 
    '/longevity-explorer',
    '/partnership',
    '/jobs',
    '/conferences',
  
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString(),
  }));
 
  return routes;
}
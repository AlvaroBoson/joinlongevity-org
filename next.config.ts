import type { NextConfig } from "next";
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/longevity-blog/:path*',
        destination: 'http://localhost:3001/:path*',
      },
      {
        source: '/_next/static/:path*',
        destination: 'http://localhost:3001/_next/static/:path*',
      }
    ]
  },
};

export default withBundleAnalyzer(nextConfig);
